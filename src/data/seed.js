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
  { time: "09:00", title: "the object", spotId: "theobject", type: "shopping" },
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
  intro: "口味很多好吃，內用有蒼蠅"
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
    jeongbang: {
      name: "正房瀑布",
      area: "西歸浦",
      naverQuery: "정방폭포",
      image: "/jeongbang.png",
      tags: ["瀑布", "海邊"],
      intro: "濟州代表性瀑布。"
    },
    cheonjiyeon: {
      name: "天地淵瀑布",
      area: "西歸浦",
      naverQuery: "천지연폭포",
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
      intro: "騎電動腳踏車比較方便。"
    },
    udoJetboat: {
      name: "牛島快艇",
      area: "牛島 / 城山",
      naverQuery: "우도 제트보트",
      image: "/udoJetboat.png",
      tags: ["快艇", "水上活動"],
      intro: "我們搭小貓快艇，超好玩超刺激，一個人大概700台幣。"
    },
    dongmun: {
  name: "東門市場",
  area: "濟州市",
  naverQuery: "제주 동문시장",
  lat: 33.5121,
  lng: 126.5260,
  image: "/dongmun.png",
  tags: ["市場", "伴手禮", "宵夜"],
  intro: "我們覺得食物都不好吃但有很多伴手禮可以買"
},
haejigaeCafe: {
  name: "Haejigae Café 夕陽咖啡廳",
  area: "涯月",
  naverQuery: "해지개 제주",
  lat: 33.4629,
  lng: 126.3095,
  image: "/haejigae-cafe.png",
  tags: ["咖啡", "早餐", "海景"],
  intro: "室內韓屋風、室外海島風的人氣咖啡廳，食物不怎麼樣\n招牌：橘子蛋糕"
},

osulloc: {
  name: "Osulloc 茶博物館",
  area: "安德",
  naverQuery: "오설록 티뮤지엄",
  lat: 33.3059,
  lng: 126.2895,
  image: "/osulloc.png",
  tags: ["茶", "甜點", "博物館"],
  intro: "濟州西部知名茶文化景點，可以喝抹茶、逛茶園，超好喝直接買爆"
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

seongsanPort: {
  name: "城山港",
  area: "城山",
  naverQuery: "성산항",
  lat: 33.4745,
  lng: 126.9337,
  image: "/seongsanPort.png",
  tags: ["港口", "牛島", "交通"],
  intro: "前往牛島的主要搭船地點，要帶護照。"
},

aquarium: {
  name: "水族館",
  area: "城山",
  naverQuery: "아쿠아플라넷 제주",
  lat: 33.4327,
  lng: 126.9278,
  image: "/aquarium.png",
  tags: ["水族館", "室內", "雨天備案"],
  intro: "濟州東部大型水族館，超多入口但只有一個可以進去，我們逛了4個小時。"
},

checkoutTaxi: {
  name: "退房叫車",
  area: "飯店",
  naverQuery: "Cony Ocean Suite Hotel 제주",
  tags: ["退房", "叫車", "交通"],
},
flightDeparture: {
  name: "飛機起飛",
  area: "濟州國際機場",
  naverQuery: "제주국제공항",
  lat: 33.5113,
  lng: 126.4929,
  tags: ["回程", "機場", "飛機"],
  },
  udoSand: {
  name: "UDO SAND",
  area: "牛島",
  naverQuery: "우도샌드",
  lat: 33.5068,
  lng: 126.9555,
  image: "/udo-sand.png",
  tags: ["甜點", "花生冰淇淋", "牛島"],
  intro: "牛島近年討論度很高的花生冰淇淋店，橘子口味也超好吃"
},
daiso: {
  name: "大創",
  area: "濟州",
  naverQuery: "다이소 제주 이도이동",
  lat: 33.4994,
  lng: 126.5297,
  image: "/daiso.png",
  tags: ["購物", "生活用品", "伴手禮"],
  intro: "繼續買",
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
    seogwangNoodles: {
  name: "서광마을 국수",
  area: "濟州",
  naverQuery: "서광마을 국수 제주",
  tags: ["麵食", "在地小吃", "午餐"],
  intro: "早餐，有鮑魚粥、豬肉湯、醒酒湯"
},

loungeJ: {
  name: "Lounge J",
  area: "濟州",
  naverQuery: "Lounge J 제주",
  tags: ["咖啡", "休息", "甜點"],
  intro: "伴手禮店，有很多三麗鷗，零食不要在這裡買很貴"
},

chrysanthemumLoft: {
  name: "菊花閣樓",
  area: "濟州",
  naverQuery: "菊花閣樓 제주",
  tags: ["咖啡", "拍照", "甜點"],
  intro: "復古風的咖啡廳，適合拍照、甜點只有橘子和巧克力口味還有檸檬起司蛋糕。"
},

bhcCityHall: {
  name: "BHC炸雞 濟州市廳店",
  area: "濟州市廳",
  naverQuery: "BHC 제주 시청점",
  tags: ["炸雞", "晚餐", "外帶"],
  intro: "好吃炸機店，不多說。"
},

lotteMart: {
  name: "樂天超市",
  area: "濟州",
  naverQuery: "롯데마트 제주",
  tags: ["超市", "採買", "零食"],
  intro: "買伴手禮。"
},

 the object: {
  name: "the object",
  area: "濟州",
  naverQuery: "오브젝트 제주점",
  tags: ["文具", "選物店", "雜貨"],
  intro: "買爆quokka"
},

udoCheonjinPort: {
  name: "牛島 天津港",
  area: "牛島",
  naverQuery: "우도 천진항",
  tags: ["港口", "牛島", "交通"],
  intro: "搭船回濟州島。"
},

boryongCoffee: {
  name: "Boryong Coffee & Bakery",
  area: "濟州",
  naverQuery: "Boryong Coffee Bakery 제주",
  tags: ["咖啡", "麵包", "早餐"],
  intro: "公車站後面的麵包店，有試吃，每個都超好吃"
},

donsadon: {
  name: "豚舍豚 돈사돈 總店",
  area: "濟州",
  naverQuery: "돈사돈 본점 제주",
  tags: ["黑豬肉", "烤肉", "晚餐"],
  intro: "濟州知名黑豬肉烤肉店，主打濟州黑豬肉，GD愛店"
}
},
expenses: []
};
