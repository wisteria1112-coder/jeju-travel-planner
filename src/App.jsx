import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Cloud,
  CloudOff,
  Coffee,
  CreditCard,
  Heart,
  Home,
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

function calculateSettlements(expenses, participants) {
  expenses = expenses || [];
  participants = participants || [];

  const balances = Object.fromEntries(participants.map((p) => [p.id, 0]));

  expenses.forEach((expense) => {
    const amount = Number(expense.amount || 0);
    const splitWith = expense.splitWith?.length ? expense.splitWith : participants.map((p) => p.id);
    const share = amount / splitWith.length;

    balances[expense.paidBy] = (balances[expense.paidBy] || 0) + amount;
    splitWith.forEach((id) => {
      balances[id] = (balances[id] || 0) - share;
    });
  });

  const debtors = [];
  const creditors = [];

  Object.entries(balances).forEach(([id, balance]) => {
    const rounded = Math.round(balance);
    if (rounded < 0) debtors.push({ id, amount: -rounded });
    if (rounded > 0) creditors.push({ id, amount: rounded });
  });

  debtors.sort((a, b) => b.amount - a.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  const transfers = [];
  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const amount = Math.min(debtors[i].amount, creditors[j].amount);
    if (amount > 0) {
      transfers.push({ from: debtors[i].id, to: creditors[j].id, amount });
    }

    debtors[i].amount -= amount;
    creditors[j].amount -= amount;

    if (debtors[i].amount === 0) i += 1;
    if (creditors[j].amount === 0) j += 1;
  }

  return { balances, transfers };
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
  const [activeDayId, setActiveDayId] = useState(data.days[0]?.id || "day1");
  const [activeSpotId, setActiveSpotId] = useState(data.days[0]?.items?.[0]?.spotId || "airport");
  const [syncState, setSyncState] = useState(hasFirebaseConfig ? "connecting" : "local");
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    paidBy: data.participants[0]?.id || "a",
    category: "餐飲"
  });
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

  const activeDay = data.days.find((day) => day.id === activeDayId) || data.days[0];
  const activeSpot = data.spots[activeSpotId] || {};
  const activeDayIndex = data.days.findIndex((day) => day.id === activeDayId);

function goToDayByIndex(index) {
  const nextDay = data.days[index];
  if (!nextDay) return;

  setActiveDayId(nextDay.id);

  const items = Array.isArray(nextDay.items)
    ? nextDay.items
    : Object.values(nextDay.items || {});

  const firstSpotId = items[0]?.spotId;

  if (firstSpotId) {
    setActiveSpotId(firstSpotId);
  }

  setView("itinerary");
}

function goPrevDay() {
  if (activeDayIndex > 0) {
    goToDayByIndex(activeDayIndex - 1);
  }
}

function goNextDay() {
  if (activeDayIndex < data.days.length - 1) {
    goToDayByIndex(activeDayIndex + 1);
  }
}
  const { balances, transfers } = useMemo(() => {
  return calculateSettlements(data.expenses || [], data.participants || []);
}, [data.expenses, data.participants]);

  function openDay(dayId) {
    const day = data.days.find((d) => d.id === dayId);
    setActiveDayId(dayId);
    setActiveSpotId(day?.items?.[0]?.spotId || activeSpotId);
    setView("day");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openBudget() {
    setView("budget");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        ...current.expenses,
        {
          id: createId("expense"),
          title: newExpense.title.trim(),
          amount: Number(newExpense.amount),
          paidBy: newExpense.paidBy,
          splitWith: current.participants.map((p) => p.id),
          category: newExpense.category || "其他"
        }
      ]
    }));

    setNewExpense((current) => ({ ...current, title: "", amount: "" }));
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
              <p className="eyebrow"><Sparkles size={16} /> 可愛活潑濟州小旅行</p>
              <h1>{data.meta.title}</h1>
              <p className="hero-subtitle">{data.meta.subtitle}</p>

              <div className="hero-chips">
                <span><CalendarDays size={16} />{data.meta.dates}</span>
                <span><MapPin size={16} />{data.meta.hotel}</span>
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
                {data.days.map((day) => (
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

  <button onClick={goNextDay} disabled={activeDayIndex >= data.days.length - 1}>
    下一天 →
  </button>
</div>
              <div className="timeline">
{(Array.isArray(activeDay.items) ? activeDay.items : Object.values(activeDay.items || {})).map((item, index) => (                  <button
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
              <div className="spot-image">
                <span>{activeSpot.name?.slice(0, 1) || "濟"}</span>
              </div>
              <p className="section-kicker">{activeSpot.area || "Jeju"}</p>
              <h2>{activeSpot.name || "選擇一個景點"}</h2>
              <p>{activeSpot.intro || "點選時間軸上的景點，這裡會顯示介紹。"}</p>

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
            </aside>
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
                  value={newExpense.paidBy}
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
