import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Cloud,
  CloudOff,
  Coffee,
  CreditCard,
  Heart,
  Home,
  Hotel,
  MapPin,
  Navigation,
  Pencil,
  Plane,
  Plus,
  ReceiptText,
  Save,
  ShipWheel,
  Sparkles,
  Trash2,
  Waves
} from "lucide-react";
import { seedData } from "./data/seed";
import {
  ensureAnonUser,
  hasFirebaseConfig,
  saveTrip,
  subscribeTrip
} from "./firebase";

const LOCAL_KEY = "jeju-travel-planner-local-v2";

function money(value) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}
const DEFAULT_LUGGAGE_GROUPS = [
  {
    category: "換洗衣物",
    items: ["衣服4套", "內褲", "襪子", "睡衣", "外套", "帽子", "鞋子"]
  },
  {
    category: "盥洗用品",
    items: ["洗面乳", "洗髮乳", "潤髮乳", "牙刷牙膏", "牙套牙線", "乳液", "刮鬍刀"]
  },
  {
    category: "化妝用品",
    items: ["粉底", "粉撲", "防曬", "遮瑕", "眼影", "唇膏", "睫毛膏", "腮紅", "打亮修容", "洗臉巾", "護髮／髮油", "化妝棉", "眼鏡盒", "隱形眼鏡", "棉花棒"]
  },
  {
    category: "隨身用品",
    items: ["小衛生紙", "信用卡", "錢包", "護照", "雨傘", "常備藥", "暈船藥"]
  },
  {
    category: "3C 設備",
    items: ["手機", "耳機", "充電器", "相機", "萬用插頭", "行動電源", "eSIM / 網路設定"]
  }
];

const DEFAULT_LUGGAGE_ITEMS = DEFAULT_LUGGAGE_GROUPS.flatMap(
  (group) => group.items
);
function createId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

function getInitialData() {
  try {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) return JSON.parse(saved);
    const oldSaved = localStorage.getItem("jeju-travel-planner-local-v1");
    if (oldSaved) return JSON.parse(oldSaved);
  } catch {
    // ignore broken local cache
  }
  return seedData;
}
function calculateSettlements(expenses = [], participants = []) {
  const balances = {};

  participants.forEach((person) => {
    balances[person.name] = 0;
  });

  expenses.forEach((expense) => {
    const amount = Number(expense.amount) || 0;
    const payer = expense.payer || expense.paidBy;

    const splitWith =
      expense.splitWith?.length > 0
        ? expense.splitWith
        : participants.map((person) => person.name);

    const validSplitWith = splitWith.filter((name) => balances[name] !== undefined);

    if (!payer || balances[payer] === undefined || validSplitWith.length === 0) return;

    const share = amount / validSplitWith.length;

    balances[payer] += amount;

    validSplitWith.forEach((name) => {
      balances[name] -= share;
    });
  });

  const creditors = [];
  const debtors = [];

  Object.entries(balances).forEach(([name, balance]) => {
    const rounded = Math.round(balance);

    if (rounded > 0) {
      creditors.push({ name, amount: rounded });
    } else if (rounded < 0) {
      debtors.push({ name, amount: Math.abs(rounded) });
    }
  });

  const settlements = [];
  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const amount = Math.min(debtors[i].amount, creditors[j].amount);

    settlements.push({
      from: debtors[i].name,
      to: creditors[j].name,
      amount
    });

    debtors[i].amount -= amount;
    creditors[j].amount -= amount;

    if (debtors[i].amount === 0) i += 1;
    if (creditors[j].amount === 0) j += 1;
  }

  return { balances, settlements };
}
function nameOf(participants, id) {
  return participants.find((p) => p.id === id)?.name || id;
}


function naverMapUrl(spot) {
  const appname = "jeju-travel-planner-eosin.vercel.app";
  const name = encodeURIComponent(spot?.naverQuery || spot?.name || "");

  if (spot?.lat && spot?.lng) {
    return `nmap://route/public?dlat=${spot.lat}&dlng=${spot.lng}&dname=${name}&appname=${appname}`;
  }

  return `nmap://search?query=${name}&appname=${appname}`;
}

function pillIcon(type) {
  const props = { size: 16, strokeWidth: 2.5 };
  const icons = {
    flight: <Plane {...props} />,
    cafe: <Coffee {...props} />,
    food: <ReceiptText {...props} />,
    island: <ShipWheel {...props} />,
    nature: <Waves {...props} />,
    hotel: <Heart {...props} />,
    activity: <Sparkles {...props} />
  };
  return icons[type] || <MapPin {...props} />;
}

export default function App() {
  const [tripId, setTripId] = useState(() => localStorage.getItem("jeju-trip-id") || "jeju-2026");
  const [data, setData] = useState(getInitialData);
  const [view, setView] = useState("home");
  const [selectedLuggageName, setSelectedLuggageName] = useState("");
  const [activeDayId, setActiveDayId] = useState(data.days[0]?.id || "day1");
  const [activeSpotId, setActiveSpotId] = useState(data.days[0]?.items?.[0]?.spotId || "airport");
  const [syncState, setSyncState] = useState(hasFirebaseConfig ? "connecting" : "local");
  const [newExpense, setNewExpense] = useState({
  title: "",
  amount: "",
  payer: "Iris",
  category: "餐飲",
  splitWith: []
});

const [showSplitOptions, setShowSplitOptions] = useState(false);
  const [memberName, setMemberName] = useState("");

  const remoteReady = useMemo(() => ({ current: false }), []);
  const skipNextSave = useMemo(() => ({ current: false }), []);

  useEffect(() => {
    localStorage.setItem("jeju-trip-id", tripId);
  }, [tripId]);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (!hasFirebaseConfig) {
      setSyncState("local");
      return;
    }

    let unsubscribe = () => {};
    let alive = true;

    setSyncState("connecting");

    ensureAnonUser()
      .then(() => {
        if (!alive) return;
        unsubscribe = subscribeTrip(
          tripId,
          async (remote) => {
            if (!alive) return;
            if (!remote?.payload) {
              await saveTrip(tripId, { payload: data });
              remoteReady.current = true;
              setSyncState("synced");
              return;
            }

            skipNextSave.current = true;
            setData(remote.payload);
            remoteReady.current = true;
            setSyncState("synced");
          },
          (error) => {
            console.error(error);
            setSyncState("error");
          }
        );
      })
      .catch((error) => {
        console.error(error);
        setSyncState("error");
      });

    return () => {
      alive = false;
      unsubscribe();
      remoteReady.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tripId]);

  useEffect(() => {
    if (!hasFirebaseConfig || !remoteReady.current) return;

    if (skipNextSave.current) {
      skipNextSave.current = false;
      return;
    }

    setSyncState("saving");
    const handle = window.setTimeout(() => {
      saveTrip(tripId, { payload: data })
        .then(() => setSyncState("synced"))
        .catch((error) => {
          console.error(error);
          setSyncState("error");
        });
    }, 650);

    return () => window.clearTimeout(handle);
  }, [data, tripId]);

  const days = Array.isArray(data.days)
  ? data.days
  : Object.values(data.days || {});

const spots = data.spots || {};

const activeDay = days.find((day) => day.id === activeDayId) || days[0] || {};
const activeSpot = spots[activeSpotId] || {};
const selectedPersonName =
  selectedLuggageName || data.participants?.[0]?.name || "";

const selectedLuggage = data.luggage?.[selectedPersonName] || {};

const packedCount = DEFAULT_LUGGAGE_ITEMS.filter(
  (item) => selectedLuggage[item]
).length;
const activeDayIndex = days.findIndex((day) => day.id === activeDayId);

const dayItems = Array.isArray(activeDay?.items)
  ? activeDay.items
  : Object.values(activeDay?.items || {});

  function goToDayByIndex(index) {
  const nextDay = days[index];
  if (!nextDay) return;

  setActiveDayId(nextDay.id);

  const items = Array.isArray(nextDay.items)
    ? nextDay.items
    : Object.values(nextDay.items || {});

  const firstSpotId = items[0]?.spotId;

  if (firstSpotId) {
    setActiveSpotId(firstSpotId);
  }

  setView("day");
}

function goPrevDay() {
  if (activeDayIndex > 0) {
    goToDayByIndex(activeDayIndex - 1);
  }
}

function goNextDay() {
  if (activeDayIndex < days.length - 1) {
    goToDayByIndex(activeDayIndex + 1);
  }
}
const { balances, settlements: transfers } = useMemo(() => {  
  return calculateSettlements(data.expenses || [], data.participants || []);
}, [data.expenses, data.participants]);

  function openDay(dayId) {
  const day = days.find((d) => d.id === dayId);
  setActiveDayId(dayId);

  const items = Array.isArray(day?.items)
    ? day.items
    : Object.values(day?.items || {});

  setActiveSpotId(items[0]?.spotId || activeSpotId);
  setView("day");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

  function openBudget() {
    setView("budget");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
function openLuggage() {
  setSelectedLuggageName(
    (current) => current || data.participants?.[0]?.name || ""
  );
  setView("luggage");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleLuggageItem(item) {
  if (!selectedPersonName) return;

  setData((current) => ({
    ...current,
    luggage: {
      ...(current.luggage || {}),
      [selectedPersonName]: {
        ...(current.luggage?.[selectedPersonName] || {}),
        [item]: !current.luggage?.[selectedPersonName]?.[item]
      }
    }
  }));
}
  function openHome() {
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectSpot(spotId) {
    setActiveSpotId(spotId);
    setView("spot");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addExpense(event) {
    event.preventDefault();
    if (!newExpense.title.trim() || !Number(newExpense.amount)) return;

    setData((current) => ({
  ...current,
  expenses: [
    ...(current.expenses || []),
   {
  id: createId("expense"),
  title: newExpense.title.trim(),
  amount: Number(newExpense.amount),
  payer: newExpense.payer,
  category: newExpense.category || "其他",
  splitWith:
    newExpense.splitWith?.length > 0
      ? newExpense.splitWith
      : (data.participants || []).map((person) => person.name),
  createdAt: Date.now()
}
      ]
    }));

    setNewExpense((current) => ({
  ...current,
  title: "",
  amount: "",
  splitWith: []
}));
  }

  function deleteExpense(id) {
    setData((current) => ({
      ...current,
      expenses: current.expenses.filter((expense) => expense.id !== id)
    }));
  }

  function addParticipant(event) {
    event.preventDefault();
    const name = memberName.trim();
    if (!name) return;

    setData((current) => ({
      ...current,
      participants: [...current.participants, { id: createId("member"), name }]
    }));
    setMemberName("");
  }

  function syncText() {
    if (syncState === "local") return "Local Demo";
    if (syncState === "connecting") return "連線中";
    if (syncState === "saving") return "同步中";
    if (syncState === "synced") return "已同步";
    if (syncState === "error") return "同步失敗";
    return "Local Demo";
  }

  return (
    <div className="app mobile-shell">
      <div className="decor decor-1">🍊</div>
      <div className="decor decor-2">🌊</div>
      <div className="decor decor-3">💙</div>

      <header className="app-header">
        <button className="brand mini-brand" onClick={openHome}>
          <span className="brand-icon"><span>🍊</span></span>
          <span>Jeju Planner</span>
        </button>

        <div className={`sync sync-${syncState}`}>
          {syncState === "local" ? <CloudOff size={16} /> : <Cloud size={16} />}
          <span>{syncText()}</span>
        </div>
      </header>

      <main className="screen-wrap">
        {view === "home" && (
          <section className="screen home-screen">
            <div className="hero-card">
              <p className="eyebrow"><Sparkles size={16} /> ASAASA第二次海外團建</p>
              <h1>{data.meta.title}</h1>
              <p className="hero-subtitle">{data.meta.subtitle}</p>

              <div className="hero-chips">
                <span><CalendarDays size={16} />{data.meta.dates}</span>
                <span><Hotel size={16} />{data.meta.hotel}</span>
                <span><Heart size={16} />五人共用</span>
              </div>
            </div>

            <section className="card trip-box-home">
              <label htmlFor="tripId">共用 Trip ID</label>
              <div className="trip-id-row">
                <input
                  id="tripId"
                  value={tripId}
                  onChange={(event) => setTripId(event.target.value)}
                  placeholder="例如 jeju-2026"
                />
                <button onClick={() => navigator.clipboard?.writeText(tripId)}>
                  複製
                </button>
              </div>
              <p>朋友使用同一個 Firebase 設定與 Trip ID，就會看到同一份雲端資料。</p>
            </section>

            <section className="card menu-card">
              <p className="section-kicker">Timeline</p>
              <h2>選擇日期</h2>
              <div className="day-menu">
                {days.map((day) => (
                  <button key={day.id} onClick={() => openDay(day.id)}>
                    <span>{day.label}</span>
                    <b>{day.date}</b>
                    <small>{day.title}</small>
                  </button>
                ))}
              </div>
            </section>

            <section className="card menu-card">
  <p className="section-kicker">Money</p>
  <h2>旅行記帳</h2>

  <button className="big-action" onClick={openBudget}>
    <CreditCard size={22} />
    打開記帳本
  </button>

  <p className="section-kicker">Packing</p>
  <h2>行李清單</h2>

  <button className="big-action" onClick={openLuggage}>
    🧳
    打開行李清單
  </button>
</section>
</section>
)}
        {view === "day" && (
          <section className="screen">
            <div className="screen-top">
              <button className="back-btn" onClick={openHome}><Home size={18} />首頁</button>
              <button className="soft-btn" onClick={openBudget}><CreditCard size={18} />記帳</button>
            </div>

            <article className="day-card focus solo-day">
              <div className="day-card-header">
                <div>
                  <p>{activeDay.date} · {activeDay.label}</p>
                  <h3>{activeDay.title}</h3>
                </div>
                <span>{activeDay.mood}</span>
              </div>
<div className="day-nav-buttons">
  <button onClick={goPrevDay} disabled={activeDayIndex <= 0}>
    ← 上一天
  </button>

  <strong>
    Day {activeDayIndex + 1}
  </strong>

  <button onClick={goNextDay} disabled={activeDayIndex >= days.length - 1}>
    下一天 →
  </button>
</div>
              <div className="timeline">
{dayItems.map((item, index) => (
  <button
    key={`${activeDay.id}-${index}`}
    className={`timeline-item ${item.spotId === activeSpotId ? "selected" : ""}`}
    onClick={() => selectSpot(item.spotId)}
  >
                    <div className="time-dot">
                      <span>{item.time}</span>
                      <i>{pillIcon(item.type)}</i>
                    </div>
                    <div className="timeline-content">
                      <strong>{item.title}</strong>
                      <small>點我看景點介紹</small>
                    </div>
                  </button>
                ))}
              </div>
            </article>
          </section>
        )}

        {view === "spot" && (
          <section className="screen">
            <div className="screen-top">
              <button className="back-btn" onClick={() => setView("day")}><CalendarDays size={18} />回行程</button>
              <button className="soft-btn" onClick={openHome}><Home size={18} />首頁</button>
            </div>

            <aside className="spot-panel solo-spot" id="spot-card">
              <div className="sticker">SPOT NOTE</div>
<div className={`spot-image ${activeSpot.image ? "has-image" : ""}`}>  {activeSpot.image ? (
    <img
      className="spot-image-img"
      src={activeSpot.image}
      alt={activeSpot.name}
    />
  ) : (
    <span>{activeSpot.name?.slice(0, 1) || "濟"}</span>
  )}
</div>
              <p className="section-kicker">{activeSpot.area || "Jeju"}</p>
              <h2>{activeSpot.name || "濟州機場"}</h2>
            
              <p>{activeSpot.intro || "有時間的話拍個轉場。"}</p>

              <div className="tag-row">
                {(activeSpot.tags || []).map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>

              <a
                className="naver-button"
                href={naverMapUrl(activeSpot)}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={19} />
                用 Naver Map 導航
              </a>
              {activeSpot.links?.length > 0 && (
  <div className="spot-links">
    <h4>快速連結</h4>

    {activeSpot.links.map((link) => (
      <a
        key={link.url}
        className="spot-link-button"
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        {link.label}
      </a>
    ))}
  </div>
)}
            </aside>
          </section>
        )}
{view === "luggage" && (
  <section className="screen">
    <div className="screen-top">
      <button className="back-btn" onClick={openHome}>
        <Home size={18} />首頁
      </button>
      <button className="soft-btn" onClick={openBudget}>
<CreditCard size={18} />記帳      
      </button>
    </div>

    <div className="luggage-shell">
      <div className="luggage-card">
        <p className="section-kicker">PACKING LIST</p>
        <h2>行李清單</h2>
        <p className="muted">選自己的名字，勾選自己的行李。</p>

        <select
          className="luggage-select"
          value={selectedPersonName}
          onChange={(event) => setSelectedLuggageName(event.target.value)}
        >
          {(data.participants || []).map((person) => (
            <option key={person.id || person.name} value={person.name}>
              {person.name}
            </option>
          ))}
        </select>

        <p className="luggage-progress">
          已完成 {packedCount} / {DEFAULT_LUGGAGE_ITEMS.length}
        </p>

        <div className="luggage-groups">
          {DEFAULT_LUGGAGE_GROUPS.map((group) => (
            <div className="luggage-group" key={group.category}>
              <h3>{group.category}</h3>

              <div className="luggage-list">
                {group.items.map((item) => (
                  <label
                    key={item}
                    className={`luggage-item ${selectedLuggage[item] ? "done" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={!!selectedLuggage[item]}
                      onChange={() => toggleLuggageItem(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}
        {view === "budget" && (
          <section className="screen">
            <div className="screen-top">
              <button className="back-btn" onClick={openHome}><Home size={18} />首頁</button>
              <button className="soft-btn" onClick={() => openDay(activeDayId)}><CalendarDays size={18} />行程</button>
            </div>

            <section className="card budget-card solo-budget">
              <div className="budget-header">
                <div>
                  <p className="section-kicker">Shared Ledger</p>
                  <h2>旅行記帳本</h2>
                </div>
                <CreditCard size={34} />
              </div>

              <form className="expense-form" onSubmit={addExpense}>
                <h3><Pencil size={18} />新增支出</h3>
                <input
                  value={newExpense.title}
                  onChange={(event) => setNewExpense({ ...newExpense, title: event.target.value })}
                  placeholder="例如：牛島快艇"
                />
                <input
                  value={newExpense.amount}
                  onChange={(event) => setNewExpense({ ...newExpense, amount: event.target.value })}
                  placeholder="金額，例如 2500"
                  inputMode="numeric"
                />
               <select
                 value={newExpense.payer}
                  onChange={(event) => setNewExpense({ ...newExpense, paidBy: event.target.value })}
                >
                  {data.participants.map((person) => (
                    <option key={person.id} value={person.id}>
                      {person.name} 先付
                    </option>
                  ))}
                </select>
                <input
                  value={newExpense.category}
                  onChange={(event) => setNewExpense({ ...newExpense, category: event.target.value })}
                  placeholder="分類，例如 餐飲 / 交通"
                />
<div className="split-box">
  <button
    type="button"
    className="split-toggle"
    onClick={() => setShowSplitOptions((current) => !current)}
  >
    <span>
      這筆跟誰分？
      <strong>
        {(newExpense.splitWith || []).length === 0
          ? "全部人均分"
          : `${newExpense.splitWith.length} 人分攤`}
      </strong>
    </span>
    <span className={`split-arrow ${showSplitOptions ? "open" : ""}`}>⌄</span>
  </button>

  {showSplitOptions && (
    <div className="split-options">
      {(data.participants || []).map((person) => (
        <label key={person.id || person.name} className="split-option">
          <input
            type="checkbox"
            checked={
              (newExpense.splitWith || []).length === 0 ||
              (newExpense.splitWith || []).includes(person.name)
            }
            onChange={(event) => {
              const checked = event.target.checked;

              setNewExpense((current) => {
                const allNames = (data.participants || []).map((p) => p.name);
                const currentList =
                  current.splitWith?.length > 0 ? current.splitWith : allNames;

                return {
                  ...current,
                  splitWith: checked
                    ? [...new Set([...currentList, person.name])]
                    : currentList.filter((name) => name !== person.name)
                };
              });
            }}
          />
          <span>{person.name}</span>
        </label>
      ))}

      <button
        type="button"
        className="split-all-btn"
        onClick={() =>
          setNewExpense((current) => ({
            ...current,
            splitWith: []
          }))
        }
      >
        設為全部人均分
      </button>
    </div>
  )}
</div>
                <button type="submit"><Plus size={18} />新增</button>
              </form>

              <div className="member-box">
                <form onSubmit={addParticipant}>
                  <input
                    value={memberName}
                    onChange={(event) => setMemberName(event.target.value)}
                    placeholder="新增成員名字"
                  />
                  <button type="submit">加入</button>
                </form>
                <div className="member-chips">
                  {data.participants.map((person) => <span key={person.id}>{person.name}</span>)}
                </div>
              </div>

              <div className="expense-list flat-list">
                <h3>支出明細</h3>

{(data.expenses || []).length === 0 && (
  <p className="empty">尚無支出</p>
)}

{(data.expenses || []).map((expense) => (
  <div className="expense-row" key={expense.id}>
    <div>
      <strong>{expense.title}</strong>
      <small>{expense.category} · {nameOf(data.participants, expense.paidBy)} 先付</small>
    </div>
    <b>{money(expense.amount)}</b>
    <button aria-label="刪除支出" onClick={() => deleteExpense(expense.id)}>
      <Trash2 size={16} />
    </button>
  </div>
))}
</div>

              <div className="settlement flat-list">
                <h3><Save size={18} />最少轉帳方案</h3>
                <p className="mini-text">系統會先算每個人的淨額，再把欠款者直接轉給應收者，減少大家互相轉來轉去。</p>

                <div className="balance-list">
                  {data.participants.map((person) => (
                    <div key={person.id}>
                      <span>{person.name}</span>
                      <b className={balances[person.id] >= 0 ? "positive" : "negative"}>
                        {money(Math.round(balances[person.id] || 0))}
                      </b>
                    </div>
                  ))}
                </div>

                <div className="transfer-list">
                  {transfers.length === 0 && <p className="empty">目前已經打平，不需要轉帳。</p>}
                  {transfers.map((transfer, index) => (
                    <div className="transfer" key={`${transfer.from}-${transfer.to}-${index}`}>
                      <span>{nameOf(data.participants, transfer.from)}</span>
                      <b>→</b>
                      <span>{nameOf(data.participants, transfer.to)}</span>
                      <strong>{money(transfer.amount)}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
        )}
      </main>
    </div>
  );
}
