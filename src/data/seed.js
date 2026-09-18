export const seedData = {
  meta: {
    title: "Jeju Island Trip",
    subtitle: "橘子🍊、海風🏝️與我們的五日小旅行",
    dates: "2026.09.01 – 2026.09.05",
    hotel: "Cony Ocean Suite Hotel",
  },
  participants: [
    { id: "a", name: "Iris" },
    { id: "b", name: "梨寶" },
    { id: "c", name: "心禾禾" },
    { id: "d", name: "Cindy" },
    { id: "e", name: "小葵" }
  ],
  days: [
    {
      id: "day1",
      label: "Day 1",
      date: "9/1",
      title: "橘子～大海～我們來了～",
      mood: "特種部隊出動！",
     items: [
  { time: "23:50", title: "桃園機場", spotId: "taoyuanAirport", type: "transport" },
  { time: "06:05", title: "濟州機場", spotId: "airport", type: "flight" },
  { time: "07:00", title: "Egg Drop", spotId: "eggDrop", type: "food" },
  { time: "08:30", title: "飯店放行李", spotId: "hotel", type: "hotel" },
  { time: "10:30", title: "9.81 Park", spotId: "park981", type: "activity" },
  { time: "13:30", title: "Osulloc 茶博物館", spotId: "osulloc", type: "sight" },
  { time: "17:30", title: "Haejigae Café 夕陽咖啡廳", spotId: "haejigaeCafe", type: "cafe" }
]
  },
  {
    id: "day2",
      label: "Day 2",
      date: "9/2",
      title: "橘子的深度探索",
      mood: "來都來了要了解一下🍊",
      items: [
  { time: "10:00", title: "서광마을 국수", spotId: "seogwangNoodles", type: "food" },
  { time: "12:00", title: "Lounge J", spotId: "loungeJ", type: "cafe" },
  { time: "14:00", title: "正房瀑布", spotId: "jeongbang", type: "sight" },
  { time: "15:30", title: "天地淵瀑布", spotId: "cheonjeyeon", type: "sight" },
  { time: "17:00", title: "菊花閣樓", spotId: "chrysanthemumLoft", type: "cafe" },
  { time: "18:30", title: "Olive Young", spotId: "oliveYoung", type: "shopping" },
  { time: "19:15", title: "大創", spotId: "daiso", type: "shopping" },
  { time: "20:00", title: "BHC炸雞 濟州市廳店", spotId: "bhcCityHall", type: "food" },
  { time: "21:00", title: "樂天超市", spotId: "lotteMart", type: "shopping" }
]
        },
  {
  id: "day3",
  label: "Day 3",
  date: "9/3",
  title: "牛島一整天",
  mood: "花生冰淇淋、白沙灘、黑沙灘，最後用快艇收尾！",
items: [
  { time: "09:00", title: "오브젝트 제주점 Object Jeju Branch", spotId: "objectJeju", type: "shopping" },
  { time: "10:30", title: "London Bagel Museum Jeju", spotId: "bagel", type: "food" },
  { time: "12:30", title: "城山港", spotId: "seongsanPort", type: "transport" },
  { time: "13:00", title: "牛島", spotId: "udo", type: "transport" },
  { time: "14:00", title: "UDO SAND", spotId: "udoSand", type: "food" },
  { time: "15:00", title: "牛島快艇", spotId: "udoJetboat", type: "activity" },
  { time: "16:30", title: "牛島 天津港", spotId: "udoCheonjinPort", type: "transport" },
  { time: "19:00", title: "東門市場", spotId: "dongmun", type: "food" }
]
},
{
      id: "day4",
      label: "Day 4",
      date: "9/4",
      title: "水..咕嚕咕嚕..族..咕嚕..館",
      mood: "聽說有動物表演",
   items: [
  { time: "10:00", title: "Boryong Coffee & Bakery", spotId: "boryongCoffee", type: "cafe" },
  { time: "13:00", title: "水族館", spotId: "aquarium", type: "sight" },
  { time: "18:00", title: "豚舍豚 돈사돈 總店", spotId: "donsadon", type: "food" }
]
  },
  {
      id: "day5",
      label: "Day 5",
      date: "9/5",
      title: "回去當牛馬",
      mood: "該面對現實",
      items: [
        { time: "07:40", title: "退房叫車", spotId: "checkoutTaxi", type: "hotel" },        
        { time: "08:20", title: "抵達濟州機場", spotId: "airport", type: "flight" },
        { time: "10:30", title: "飛機起飛", spotId: "airport", type: "flight" },
        { time: "11:35", title: "抵達桃園機場", spotId: "taoyuanAirport", type: "flight" }
      ]
    }
  ],
  spots: {
        taoyuanAirport: {
  name: "桃園機場",
  area: "台灣",
  naverQuery: "桃園國際機場",
  image: "/flight-ze886.png",
  tags: ["集合", "出國前準備"],
  intro: "Iris、梨寶從宜蘭出發\nCindy、心禾從台北出發\n小葵從高雄出發\n抵達後先完成 eSIM、外交部出國登錄與韓國 e-Arrival Card。",
  links: [
    {
      label: "🛂 e-Arrival Card",
      url: "https://www.e-arrivalcard.go.kr/portal/main/index.do?locale=CH"
    },
    {
      label: "📱 外交部出國登錄 LINE",
      url: "https://line.me/R/ti/p/@boca.tw"
    }
  ]
},
    airport: {
      name: "濟州國際機場",
      area: "濟州市",
      naverQuery: "제주국제공항",
      lat: 33.5113,
      lng: 126.4929,
      image: "/jejuairport.png",
      tags: ["機場", "行李", "回程"],
      intro: "第一天先處理行李與交通，最後一天因為早班機，住宿靠市區會最安心。"
    },
    hotel: {
  name: "Cony Ocean Suite Hotel",
  area: "涯月",
  naverQuery: "Cony Ocean Suite Hotel 제주",
  lat: 33.4849,
  lng: 126.3678,
  image: "/hotel-cony.png",
  tags: ["住宿", "海景", "休息"],
  intro: "位於涯月的海景第一排\n抵達機場後叫車回飯店 check-in、整理行李與休息。\n地址：제주 제주시 애월읍 가문동길 79\n自助報到密碼:3256"
},
bagel: {
  name: "London Bagel Museum Jeju",
  area: "舊左",
  naverQuery: "런던베이글뮤지엄 제주점",
  lat: 33.5537,
  lng: 126.7099,
  image: "/london-bagel.png",
  tags: ["早餐", "咖啡", "貝果"],
  intro: "第一天抵達濟州後的早餐點，位於舊左邑東福路一帶，適合先補充體力再開始東部包車行程。"
},
manjanggul: {
  name: "萬丈窟",
  area: "舊左",
  naverQuery: "만장굴",
  lat: 33.5291,
  lng: 126.7714,
  image: "/manjanggul.png",
  tags: ["自然", "洞窟", "世界遺產"],
  intro: "濟州代表性的熔岩洞窟景點，適合安排約 1–1.5 小時。第一天包車前往東部時順路安排。"
},
eoureumNoodles: {
  name: "어우름제주고기국수 성산본점",
  area: "城山",
  naverQuery: "어우름제주고기국수 성산본점",
  lat: 33.4609,
  lng: 126.9336,
  image: "/eoureum-noodles.png",
  tags: ["午餐", "濟州豬肉麵", "城山"],
  intro: "位於城山日出峰附近的午餐點，主打濟州 고기국수。安排在萬丈窟之後、城山日出峰之前很順。"
},
seongsan: {
  name: "城山日出峰",
  area: "城山",
  naverQuery: "성산일출봉",
  lat: 33.4581,
  lng: 126.9425,
  image: "/seongsan.png",
  tags: ["自然", "海景", "世界遺產"],
  intro: "濟州東部代表景點，可以視體力選擇登頂，或只在周邊拍照、看海景。"
},
seopjikoji: {
  name: "涉地可支",
  area: "城山",
  naverQuery: "섭지코지",
  lat: 33.4242,
  lng: 126.9306,
  image: "/seopjikoji.png",
  tags: ["海岸", "散步", "拍照"],
  intro: "城山日出峰附近的海岸景點，適合散步、拍照，放在城山日出峰後面很順。"
},
    tangerineCafe: {
      name: "Cafe Tangerine Flower Attic",
      area: "西歸浦",
      naverQuery: "카페 귤꽃다락",
      tags: ["橘子咖啡", "拍照"],
      intro: "橘子園咖啡廳，非常適合這次橘、白、粉、藍的可愛主題。"
    },
    citrusMuseum: {
      name: "橘子博物館",
      area: "西歸浦",
      naverQuery: "제주감귤박물관",
      tags: ["橘子", "博物館"],
      intro: "可以跟橘子咖啡園放同一天，做成南部橘子主題半日。"
    },
    jeongbang: {
      name: "正房瀑布",
      area: "西歸浦",
      naverQuery: "정방폭포",
      image: "/jeongbang.png",
      tags: ["瀑布", "海邊"],
      intro: "濟州代表性瀑布之一，白天去更適合拍照。"
    },
    cheonjiyeon: {
      name: "天地淵瀑布",
      area: "西歸浦",
      naverQuery: "천지연폭포",
      tags: ["瀑布", "夜間散步"],
      intro: "比正房瀑布更適合傍晚或晚一點去，行程彈性高。"
    },
    seongsanPort: {
      name: "城山港",
      area: "東部",
      naverQuery: "성산항",
      tags: ["牛島船班", "交通"],
      intro: "要帶護照!要帶雨衣!/n買票的時候一次買來回、乘船申報單寫兩張"
    },
    udo: {
      name: "牛島",
      area: "離島",
      naverQuery: "우도",
      image: "/udo.png",
      tags: ["離島", "環島", "海景"],
      intro: "下船後可以買公車票，今天逆時針行駛。"
    },
    udoJetboat: {
      name: "牛島快艇",
      area: "牛島 / 城山",
      naverQuery: "우도 제트보트",
      image: "/udoJetboat.png",
      tags: ["快艇", "水上活動"],
      intro: "路上隨便一家買票就可以，不用預約，可能要排隊。"
    },
    snoopy: {
      name: "史努比花園",
      area: "舊左 / 東部",
      naverQuery: "스누피가든",
      tags: ["可愛", "拍照"],
      intro: "非常適合可愛活潑風格的旅遊手冊與網頁主題，建議排 1.5–3 小時。"
    },
    aqua: {
      name: "Aqua Planet Jeju",
      area: "城山",
      naverQuery: "아쿠아플라넷 제주",
      tags: ["水族館", "室內"],
      intro: "東部室內景點，下雨備案也很好用。可跟城山日出峰同一天。"
    },
    dongmun: {
  name: "東門市場",
  area: "濟州市",
  naverQuery: "제주 동문시장",
  lat: 33.5121,
  lng: 126.5260,
  image: "/dongmun.png",
  tags: ["市場", "伴手禮", "宵夜"],
  intro: "適合最後一晚採買伴手禮、吃小吃。從牛島回到濟州本島後，可以安排在回飯店前順路逛。"
},
haejigaeCafe: {
  name: "Haejigae Café 夕陽咖啡廳",
  area: "涯月",
  naverQuery: "해지개 제주",
  lat: 33.4629,
  lng: 126.3095,
  image: "/haejigae-cafe.png",
  tags: ["咖啡", "早餐", "海景"],
  intro: "室內韓屋風、室外海島風的人氣咖啡廳，雖然是觀夕陽出名但我們就是要早上去\n招牌：橘子蛋糕"
},

osulloc: {
  name: "Osulloc 茶博物館",
  area: "安德",
  naverQuery: "오설록 티뮤지엄",
  lat: 33.3059,
  lng: 126.2895,
  image: "/osulloc.png",
  tags: ["茶", "甜點", "博物館"],
  intro: "濟州西部知名茶文化景點，可以喝抹茶、逛茶園，也適合作為 Day 1 下午的休息點。"
},

yeomiji: {
  name: "如美地植物園",
  area: "中文觀光園區",
  naverQuery: "여미지식물원",
  lat: 33.2526,
  lng: 126.4143,
  image: "/yeomiji.png",
  tags: ["植物園", "拍照", "室內"],
  intro: "位於中文觀光園區的植物園，室內外都可逛，適合排在西部／南部行程中。"
},

hundo: {
  name: "薰陶 濟州黑豬肉專門店",
  area: "涯月",
  naverQuery: "훈도 애월흑돼지",
  lat: 33.4637,
  lng: 126.3112,
  image: "/hundo.png",
  tags: ["晚餐", "黑豬肉", "烤肉"],
  intro: "Day 1 晚餐，安排在西部包車行程結束後，作為第一天收尾。"
},
park981: {
  name: "9.81 Park",
  area: "涯月",
  naverQuery: "9.81파크 제주",
  lat: 33.3899,
  lng: 126.3663,
  image: "/park981.png",
  tags: ["賽車", "活動", "刺激"],
  intro: "濟州西部的重力賽車主題樂園，可以安排賽車與室內活動，是 Day 1 比較有動感的行程。"
},

breakfastTBD: {
  name: "早餐待確定",
  area: "待確認",
  naverQuery: "제주 아침식사",
  tags: ["早餐", "待確認"],
  intro: "早餐尚未決定，之後可以依照當天路線、住宿地點與出發時間再補上。"
},

dinnerTBD: {
  name: "晚餐待確定",
  area: "待確認",
  naverQuery: "제주 저녁식사",
  tags: ["晚餐", "待確認"],
  intro: "晚餐尚未決定，之後可以依照當天實際行程與大家想吃的類型再安排。"
},

hallasan: {
  name: "漢拏山國立公園",
  area: "濟州中部",
  naverQuery: "한라산국립공원",
  lat: 33.3617,
  lng: 126.5292,
  image: "/hallasan.png",
  tags: ["自然", "登山", "國立公園"],
  intro: "濟州代表性的山林景點。實際停留時間要看選擇的路線，如果只是輕鬆走走，可以安排半日。"
},

cheonjeyeon: {
  name: "天地淵瀑布",
  area: "西歸浦",
  naverQuery: "천지연폭포",
  lat: 33.2469,
  lng: 126.5544,
  image: "/cheonjeyeon.png",
  tags: ["瀑布", "散步", "西歸浦"],
  intro: "西歸浦市區附近的瀑布景點，步道相對好走，適合下午安排。"
},

orangeLoft: {
  name: "橘花閣樓",
  area: "濟州",
  naverQuery: "귤꽃다락 제주",
  lat: 33.2449,
  lng: 126.5306,
  image: "/orangeLoft.png",
  tags: ["咖啡", "橘子", "拍照"],
  intro: "行程後半段的咖啡／休息點，適合在瀑布或山林行程後慢慢收尾。"
},

seongsanPort: {
  name: "城山港",
  area: "城山",
  naverQuery: "성산항",
  lat: 33.4745,
  lng: 126.9337,
  image: "/seongsanPort.png",
  tags: ["港口", "牛島", "交通"],
  intro: "前往牛島的主要搭船地點，建議提早抵達，預留買票與排隊時間。"
},

aquarium: {
  name: "水族館",
  area: "城山",
  naverQuery: "아쿠아플라넷 제주",
  lat: 33.4327,
  lng: 126.9278,
  image: "/aquarium.png",
  tags: ["水族館", "室內", "雨天備案"],
  intro: "濟州東部大型水族館，適合排在城山、涉地可支附近，也可以作為雨天備案。"
},

checkoutTaxi: {
  name: "退房叫車",
  area: "飯店",
  naverQuery: "Cony Ocean Suite Hotel 제주",
  tags: ["退房", "叫車", "交通"],
  intro: "退房後叫車前往下一個地點或機場，建議前一天先確認行李與叫車時間。"
},
    lunchTBD: {
  name: "午餐待確定",
  area: "待確認",
  naverQuery: "서귀포 점심",
  tags: ["午餐", "待確認"],
  intro: "午餐尚未決定，之後可以依照當天路線、實際體力與附近餐廳再安排。"
},
    udoReturnPort: {
  name: "木洞港搭船回濟州",
  area: "牛島",
  naverQuery: "우도 목동항",
  tags: ["交通", "港口", "回程"],
  intro: "牛島行程結束後，從木洞港搭船回到濟州本島。建議提前確認最後船班時間，避免錯過回程。"
},
flightDeparture: {
  name: "飛機起飛",
  area: "濟州國際機場",
  naverQuery: "제주국제공항",
  lat: 33.5113,
  lng: 126.4929,
  tags: ["回程", "機場", "飛機"],
  intro: "回程班機起飛，建議提早抵達濟州國際機場辦理報到、托運與安檢。"
  },
  udoSand: {
  name: "UDO SAND",
  area: "牛島",
  naverQuery: "우도샌드",
  lat: 33.5068,
  lng: 126.9555,
  image: "/udo-sand.png",
  tags: ["甜點", "花生冰淇淋", "牛島"],
  intro: "牛島近年討論度很高的花生冰淇淋店"
  },
  udoWhiteBeach: {
  name: "牛島白沙灘",
  area: "牛島",
  naverQuery: "우도 산호해수욕장",
  image: "/udoWhiteBeach.png",
  tags: ["白沙灘", "海景", "拍照"],
  intro: "牛島代表性的白沙灘景點，適合散步、拍照，也很適合排在牛島行程前半段。"
 },
udoBlackBeach: {
  name: "牛島黑沙灘",
  area: "牛島",
  naverQuery: "우도 검멀레해변",
  image: "/udoBlackBeach.png",
  tags: ["黑沙灘", "海岸", "拍照"],
  intro: "牛島知名黑沙灘，與白沙灘形成對比，適合拍照與看海岸地形。"
},
daiso: {
  name: "大創",
  area: "濟州",
  naverQuery: "다이소 제주 이도이동",
  lat: 33.4994,
  lng: 126.5297,
  image: "/daiso.png",
  tags: ["購物", "生活用品", "伴手禮"],
  intro: "韓國大創適合採買生活小物、旅行用品、零食與可愛雜貨。安排在 Olive Young 後面一起採買很順。",
  shoppingList: [
    {
      category: "美妝保養",
      groups: [
        {
          title: "身體保養",
          items: [
            { name: "Daiso 磨砂膏", note: "🧼 去除老廢角質" }
          ]
        },
        {
          title: "臉部保養",
          items: [
            { name: "VT Reedle Shot 50", note: "🧬 溫和入門微針" }
          ]
        },
        {
          title: "BODYTAMIN",
          items: [
            { name: "BODYTAMIN 紫色款精華", note: "腋下美白專攻" },
            { name: "BODYTAMIN 紅色款精華", note: "除脖紋專攻" }
           ]
        }
      ]
    }
  ]
},

oliveYoung: {
  name: "Olive Young",
  area: "濟州",
  naverQuery: "올리브영 제주",
  image: "/oliveyoung.png",
  tags: ["藥妝", "購物", "伴手禮"],
  intro: "買伴手禮的時間到了。",
  shoppingList: [
    {
      category: "保養品",
      groups: [
        {
          title: "抗痘",
          items: [
            { name: "Anua 魚腥草77% B3 Zinc 鋅精華" },
            { name: "Bring Green 保濕精華液" }
          ]
        },
        {
          title: "妝前",
          items: [
            { name: "Torriden DIVE IN 潛水舒緩霜" },
            { name: "MEDITHERAPY 333精華", note: "玻尿酸" }
          ]
        },
        {
          title: "頭皮",
          items: [
            { name: "Aromatica 茶樹淨化爽膚液", note: "cp值高" },
            { name: "Ryo Rootgen Aqua Peel 頭皮水", note: "高檔款" }
          ]
        }
      ]
    },
    {
      category: "香水",
      groups: [
        {
          title: "香水",
          items: [
            { name: "A'ddict Peel the Bergamot（柚子）", note: "使用前須搖勻" },
            { name: "A'ddict Warm Afternoon" }
          ]
        }
      ]
    },
    {
      category: "衣物",
      groups: [
        {
          title: "內褲",
          items: [
            { name: "寬鬆四角內褲" }
          ]
        }
      ]
    },
    {
      category: "保健品",
      groups: [
        {
          title: "機能茶包 Better AET",
          items: [
            { name: "紫色（薰衣草＋洋甘菊）", note: "睡眠障礙" },
            { name: "綠色（地瓜＋南瓜＋決明子＋紅豆）", note: "日常消水腫" },
            { name: "紅色 消水腫加強版" },
            { name: "黃色 主打養胃、護胃" }
          ]
        },
        {
          title: "機能軟糖",
          items: [
            { name: "蜂蜜系列", note: "滋潤喉嚨" },
            { name: "橘色（膠原蛋白／檸檬口味）", note: "維持肌膚彈性" },
            { name: "粉色（補鐵／葡萄口味）" },
            { name: "深藍色（綜合維他命／偏酸的檸檬）" },
            { name: "藍色（葉黃素軟糖／藍莓口味）" }
          ]
        }
      ]
    },
    {
      category: "濟州限定",
      groups: [
        {
          title: "食物",
          items: [
            { name: "牛島花生貝果脆片" },
            { name: "橘子貝果脆片" },
            { name: "橘子香氛片" }
          ]
        },
        {
          title: "商品",
          items: [
            { name: "護手霜" },
            { name: "柑橘護唇膏" },
            { name: "柑橘造海綿球" },
            { name: "專屬痘痘貼" }
          ]
        }
      ]
    },
    {
      category: "避雷",
      groups: [
        {
          title: "保養品",
          items: [
            { name: "d'alba 白松露水光噴霧" },
            { name: "isoi 保加利亞玫瑰精華" }
          ]
        }
      ]
    }
  ]
},
  eggDrop: {
  name: "Egg Drop",
  area: "濟州機場",
  naverQuery: "에그드랍 제주공항점",
  lat: 33.5113,
  lng: 126.4929,
  image: "/eggdrop.png",
  tags: ["早餐", "三明治", "機場"],
  intro: "抵達濟州後先吃早餐，適合作為機場到飯店寄放行李前的第一站。"
},
hahahehe: {
  name: "hahahehe 漢堡",
  area: "牛島",
  naverQuery: "하하호호 우도",
  lat: 33.5052,
  lng: 126.9551,
  image: "/hahahehe.png",
  tags: ["早餐", "漢堡", "牛島"],
  intro: "牛島人氣漢堡店，適合一抵達牛島後先吃早餐、補充體力，再開始白沙灘、牛頭峰與黑沙灘行程。"
},
  udoi: {
  name: "UDOI",
  area: "牛島",
  naverQuery: "우도i 우도해안길 814",
  lat: 33.5068,
  lng: 126.9555,
  image: "/udoi.png",
  tags: ["伴手禮", "甜點", "牛島"],
  intro: "牛島上的人氣伴手禮／甜點店，適合安排在快艇後作為收尾，買東西、休息一下，再準備搭船回濟州。"
},
  udobong: {
  name: "牛頭峰",
  area: "牛島",
  naverQuery: "우도봉",
  lat: 33.4931,
  lng: 126.9661,
  image: "/udobong.png",
  tags: ["牛島", "展望", "散步"],
  intro: "牛島代表性展望點之一，可以俯看海岸與牛島地形。適合安排在白沙灘後、黑沙灘前。"
},
  udoReturnPort: {
  name: "下牛木洞港",
  area: "牛島",
  naverQuery: "우도 하우목동항",
  image: "/udoReturnPort.png",
  tags: ["港口", "回程", "交通"],
  intro: "牛島行程結束後，從下牛木洞港搭船回濟州本島。建議提前確認最後船班時間。"
}
},
expenses: []
};
