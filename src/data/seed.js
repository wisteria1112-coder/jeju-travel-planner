export const seedData = {
  meta: {
    title: "Jeju Island Trip",
    subtitle: "橘子、海風、牛島與我們的五日小旅行",
    dates: "2026.06.20 – 2026.06.24",
    hotel: "Jeju The Terrace View",
    note: "四晚住同一間，遠程日以包車 / 大型計程車為主。"
  },
  participants: [
    { id: "a", name: "A" },
    { id: "b", name: "B" },
    { id: "c", name: "C" },
    { id: "d", name: "D" },
    { id: "e", name: "E" }
  ],
  days: [
    {
      id: "day1",
      label: "Day 1",
      date: "6/20",
      title: "市區＋涯月",
      mood: "剛抵達也要玩滿！",
      items: [
        { time: "06:05", title: "抵達濟州機場", spotId: "airport", type: "flight" },
        { time: "08:00", title: "飯店寄放行李", spotId: "terrace", type: "hotel" },
        { time: "10:00", title: "London Bagel Museum", spotId: "bagel", type: "food" },
        { time: "13:00", title: "9.81 Park 智慧賽車", spotId: "park981", type: "activity" },
        { time: "16:00", title: "Haejigae 海景咖啡", spotId: "haejigae", type: "cafe" },
        { time: "18:30", title: "燻陶 훈도 晚餐", spotId: "hundo", type: "food" }
      ]
    },
    {
      id: "day2",
      label: "Day 2",
      date: "6/21",
      title: "南部／西歸浦",
      mood: "橘子園、瀑布、南部散步",
      items: [
        { time: "09:30", title: "Cafe Tangerine Flower Attic", spotId: "tangerineCafe", type: "cafe" },
        { time: "11:30", title: "橘子博物館", spotId: "citrusMuseum", type: "museum" },
        { time: "14:00", title: "正房瀑布", spotId: "jeongbang", type: "nature" },
        { time: "17:30", title: "天地淵瀑布", spotId: "cheonjiyeon", type: "nature" }
      ]
    },
    {
      id: "day3",
      label: "Day 3",
      date: "6/22",
      title: "牛島一整天",
      mood: "離島日排中間，天氣不好還能改",
      items: [
        { time: "07:30", title: "出發前往城山港", spotId: "seongsanPort", type: "transport" },
        { time: "09:00", title: "搭船前往牛島", spotId: "udo", type: "island" },
        { time: "10:00", title: "牛島環島", spotId: "udo", type: "island" },
        { time: "14:00", title: "牛島快艇", spotId: "udoJetboat", type: "activity" },
        { time: "17:00", title: "回本島 / optional 城山日出峰", spotId: "seongsan", type: "nature" }
      ]
    },
    {
      id: "day4",
      label: "Day 4",
      date: "6/23",
      title: "東部本島",
      mood: "史努比、水族館、城山日落",
      items: [
        { time: "09:30", title: "史努比花園", spotId: "snoopy", type: "theme" },
        { time: "13:00", title: "濟州水族館", spotId: "aqua", type: "aquarium" },
        { time: "16:30", title: "城山日出峰", spotId: "seongsan", type: "nature" },
        { time: "19:00", title: "東門市場", spotId: "dongmun", type: "market" }
      ]
    },
    {
      id: "day5",
      label: "Day 5",
      date: "6/24",
      title: "回程",
      mood: "早班機，不排景點",
      items: [
        { time: "07:40", title: "退房叫車", spotId: "terrace", type: "hotel" },
        { time: "08:20", title: "抵達濟州機場", spotId: "airport", type: "flight" },
        { time: "10:30", title: "飛機起飛", spotId: "airport", type: "flight" }
      ]
    }
  ],
  spots: {
    airport: {
      name: "濟州國際機場",
      area: "濟州市",
      tags: ["機場", "行李", "回程"],
      intro: "第一天先處理行李與交通，最後一天因為早班機，住宿靠市區會最安心。"
    },
    terrace: {
      name: "Jeju The Terrace View",
      area: "蓮洞 / 濟州市",
      tags: ["住宿", "市區基地"],
      intro: "四晚同住的穩定方案。適合五人旅行、行李多、最後一天早班機。"
    },
    bagel: {
      name: "London Bagel Museum",
      area: "濟州市",
      tags: ["早餐", "排隊名店"],
      intro: "熱門貝果店，建議早點去。可以當第一天抵達後的第一個可愛行程。"
    },
    park981: {
      name: "9.81 Park",
      area: "涯月",
      tags: ["賽車", "活動"],
      intro: "主打智慧賽車與戶外體驗，適合安排 2–3 小時。天氣不穩時要先確認營運。"
    },
    haejigae: {
      name: "Haejigae",
      area: "涯月",
      tags: ["海景咖啡", "夕陽"],
      intro: "海景咖啡廳，適合放在涯月行程的下午或傍晚，拍照氛圍很好。"
    },
    hundo: {
      name: "燻陶 훈도",
      area: "涯月",
      tags: ["黑豬肉", "晚餐"],
      intro: "濟州黑豬肉餐廳。適合 Day 1 西部/涯月日結尾。"
    },
    tangerineCafe: {
      name: "Cafe Tangerine Flower Attic",
      area: "西歸浦",
      tags: ["橘子咖啡", "拍照"],
      intro: "橘子園咖啡廳，非常適合這次橘、白、粉、藍的可愛主題。"
    },
    citrusMuseum: {
      name: "橘子博物館",
      area: "西歸浦",
      tags: ["橘子", "博物館"],
      intro: "可以跟橘子咖啡園放同一天，做成南部橘子主題半日。"
    },
    jeongbang: {
      name: "正房瀑布",
      area: "西歸浦",
      tags: ["瀑布", "海邊"],
      intro: "濟州代表性瀑布之一，白天去更適合拍照。"
    },
    cheonjiyeon: {
      name: "天地淵瀑布",
      area: "西歸浦",
      tags: ["瀑布", "夜間散步"],
      intro: "比正房瀑布更適合傍晚或晚一點去，行程彈性高。"
    },
    seongsanPort: {
      name: "城山港",
      area: "東部",
      tags: ["牛島船班", "交通"],
      intro: "前往牛島的主要港口。離島行程請排在中間天數，保留天氣備案。"
    },
    udo: {
      name: "牛島",
      area: "離島",
      tags: ["離島", "環島", "海景"],
      intro: "建議安排完整一天。因船班會受天氣影響，不建議排在最後一天。"
    },
    udoJetboat: {
      name: "牛島快艇",
      area: "牛島 / 城山",
      tags: ["快艇", "水上活動"],
      intro: "訂票前要確認集合點是在牛島島上，還是城山日出峰附近。"
    },
    snoopy: {
      name: "史努比花園",
      area: "舊左 / 東部",
      tags: ["可愛", "拍照"],
      intro: "非常適合可愛活潑風格的旅遊手冊與網頁主題，建議排 1.5–3 小時。"
    },
    aqua: {
      name: "Aqua Planet Jeju",
      area: "城山",
      tags: ["水族館", "室內"],
      intro: "東部室內景點，下雨備案也很好用。可跟城山日出峰同一天。"
    },
    seongsan: {
      name: "城山日出峰",
      area: "城山",
      tags: ["世界自然景觀", "登高"],
      intro: "濟州東部代表景點，可排在牛島回程 optional，或 Day 4 東部本島日。"
    },
    dongmun: {
      name: "東門市場",
      area: "濟州市",
      tags: ["市場", "伴手禮", "宵夜"],
      intro: "適合最後一晚採買伴手禮、吃小吃。住市區會非常方便。"
    }
  },
  expenses: [
    { id: "e1", title: "住宿訂金", amount: 6757, paidBy: "a", splitWith: ["a", "b", "c", "d", "e"], category: "住宿" },
    { id: "e2", title: "早餐", amount: 1000, paidBy: "c", splitWith: ["a", "b", "c", "d", "e"], category: "餐飲" }
  ]
};
