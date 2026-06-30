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
  {
    time: "23:50",
    title: "桃園機場集合",
    type: "transport",
    spotId: "taoyuanAirport"
  },
  {
    time: "02:50",
    title: "台灣起飛",
    type: "transport",
    spotId: "taoyuanAirport"
  },
  {
    time: "06:05",
    title: "抵達濟州機場",
    type: "transport",
    spotId: "airport"
  },
  {
    time: "08:00",
    title: "Cony Ocean Suite Hotel 寄放行李",
    type: "hotel",
    spotId: "hotel"
  },
  {
  time: "09:00",
        title: "Haejigae Cafe",
        type: "food",
        spotId: "haejigaeCafe"
      },
      {
        time: "11:00",
        title: "9.81 Park 賽車",
        type: "activity",
        spotId: "park981"
      },
      {
        time: "12:30",
        title: "Osulloc 茶博物館",
        type: "sight",
        spotId: "osulloc"
      },
      {
        time: "15:00",
        title: "如美地植物園",
        type: "sight",
        spotId: "yeomiji"
      },
      {
        time: "18:00",
        title: "晚餐｜薰陶 濟州黑豬肉專門店",
        type: "food",
        spotId: "hundo"
      },
           {
        time: "20:00",
        title: "回飯店休息",
        type: "hotel",
        spotId: "hotel"
      }
    ]
  },
  {
    id: "day2",
      label: "Day 2",
      date: "9/2",
      title: "橘子的深度探索",
      mood: "來都來了要了解一下🍊",
      items: [
      {
        time: "08:00",
        title: "早餐待確定",
        type: "food",
        spotId: "breakfastTBD"
      },
      {
        time: "09:30",
        title: "漢拏山國立公園",
        type: "nature",
        spotId: "hallasan"
      },
      {
        time: "12:30",
        title: "午餐待確定",
        type: "food",
        spotId: "lunchTBD"
      },
      {
        time: "14:00",
        title: "正房瀑布",
        type: "sight",
        spotId: "jeongbang"
      },
      {
        time: "15:30",
        title: "天地淵瀑布",
        type: "sight",
        spotId: "cheonjeyeon"
      },
            {
        time: "17:30",
        title: "橘花閣樓",
        type: "cafe",
        spotId: "orangeLoft"
      },
        {
        time: "19:00",
        title: "回飯店休息",
        type: "hotel",
        spotId: "hotel"
  }
  ]
        },
  {
  id: "day3",
  label: "Day 3",
  date: "9/3",
  title: "牛島一整天",
  mood: "花生冰淇淋、白沙灘、黑沙灘，最後用快艇收尾！",
  items: [
    {
      time: "07:30",
      title: "出發前往城山港",
      type: "transport",
      spotId: "seongsanPort"
    },
    {
      time: "09:00",
      title: "搭船前往牛島",
      type: "transport",
      spotId: "udo"
    },
    {
      time: "10:00",
      title: "UDO SAND 花生冰淇淋",
      type: "food",
      spotId: "udoSand"
    },
    {
      time: "11:00",
      title: "牛島白沙灘",
      type: "sight",
      spotId: "udoWhiteBeach"
    },
    {
      time: "12:30",
      title: "牛島黑沙灘",
      type: "sight",
      spotId: "udoBlackBeach"
    },
    {
      time: "14:30",
      title: "牛島快艇",
      type: "activity",
      spotId: "udoJetboat"
    },
    {
      time: "17:00",
      title: "下牛木洞港搭船回濟州",
      type: "transport",
      spotId: "udoReturnPort"
    },
    {
  time: "18:30",
  title: "東門市場",
  type: "food",
  spotId: "dongmun"
},
    {
      time: "20:00",
      title: "回飯店休息",
      type: "hotel",
      spotId: "hotel"
  }
  ]
},
{
      id: "day4",
      label: "Day 4",
      date: "9/4",
      title: "水..咕嚕咕嚕..族..咕嚕..館",
      mood: "聽說有動物表演",
      items: [
      {
        time: "08:30",
        title: "早餐｜London Bagel Museum Jeju",
        type: "food",
        spotId: "bagel"
      },
      {
        time: "10:30",
        title: "萬丈窟",
        type: "sight",
        spotId: "manjanggul"
      },
      {
        time: "12:30",
        title: "城山日出峰",
        type: "sight",
        spotId: "seongsan"
      },
      {
        time: "14:00",
        title: "午餐｜어우름제주고기국수 성산본점",
        type: "food",
        spotId: "eoureumNoodles"
      },
      {
        time: "15:30",
        title: "水族館",
        type: "sight",
        spotId: "aquarium"
        },
        {
  time: "17:30",
  title: "Olive Young",
  type: "shopping",
  spotId: "oliveYoung"
},
{
  time: "18:30",
  title: "大創",
  type: "shopping",
  spotId: "daiso"
},
{
  time: "20:00",
  title: "回飯店休息",
  type: "hotel",
  spotId: "hotel"
}
},
{
      id: "day5",
      label: "Day 5",
      date: "9/5",
      title: "回去當牛馬",
      mood: "該面對現實",
      items: [
        { time: "07:40", title: "退房叫車", spotId: "terrace", type: "hotel" },
        { time: "08:20", title: "抵達濟州機場", spotId: "airport", type: "flight" },
        { time: "10:30", title: "飛機起飛", spotId: "airport", type: "flight" }
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
      tags: ["市場", "伴手禮", "宵夜"],
      intro: "適合最後一晚採買伴手禮、吃小吃。住市區會非常方便。"
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
  naverQuery: "다이소 제주",
  tags: ["購物", "生活用品", "伴手禮"],
  intro: "韓國大創適合採買生活小物、旅行用品、零食與可愛雜貨。安排在 Olive Young 後面一起採買很順。"
},
oliveYoung: {
  name: "Olive Young",
  area: "濟州",
  naverQuery: "올리브영 제주",
  tags: ["藥妝", "購物", "伴手禮"],
  intro: "韓國常見藥妝店，適合在 Day 4 水族館行程後採買保養品、零食與伴手禮。"
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
