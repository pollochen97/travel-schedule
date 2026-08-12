const tripData = {
  trip: {
    title: 'Fukuoka Trip',
    subtitle: '福岡晚夏三日遊 --- / 吃爆福岡！買爆福岡！/',
    location: 'Fukuoka, Japan',
    startDate: '2026-09-03',
    endDate: '2026-09-05',
  },

  theme: {
    primary: '#D96846',
    secondary: '#F3C58F',
    background: '#FFF9F2',
    heroImage: './assets/hero-placeholder.svg',
    heroEmoji: '🍜',
  },
  flights: {
    outbound: {
      airline: '華航',
      flightNo: 'CI110',
      departureTime: '06:50',
      departureAirport: 'TPE 桃園',
      arrivalTime: '09:55',
      arrivalAirport: 'FUK 福岡',
    },
    inbound: {
      airline: '華航',
      flightNo: 'CI129',
      departureTime: '19:10',
      departureAirport: 'FUK 福岡',
      arrivalTime: '20:35',
      arrivalAirport: 'TPE 桃園',
    },
  },
  hotel: {
    name: '福岡博多車站東方飯店 Oriental Hotel Fukuoka Hakata Station',
    address: '4-23 Hakataekichuogai, Hakata Ward, Fukuoka, 812-0012日本',
    mapUrl: 'https://maps.app.goo.gl/LMuzC42K2QnVxDVr8',
    websiteUrl: 'https://fukuoka-orientalhotel.com/',
  },
  days: [
    {
      day: 1,
      title: 'Day 1',
      date: '2026-09-03',
      title: '抵達福岡！博多美食、大濠公園、福岡塔夜景',
      icon: '🧳',
      schedule: [
        {
          time: '09:55',
          title: '抵達福岡機場',
          category: '交通',
          location: '福岡機場',
          note: '入境、領行李後前往市區。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport',
            },
          ],
        },
        {
          time: '11:00',
          title: '飯店寄放行李',
          category: '住宿',
          location: '福岡博多車站東方飯店',
          note: '15:00後可辦理入住，先寄放行李再出發。',
          image: '',
          links: [],
        },
        {
          time: '12:00',
          title: '博多吃午餐',
          category: '用餐',
          location: '博多車站、博多運河附近吃東西',
          note: '一蘭 博多運河城店(才有方形盒子)、いくら蛋包飯、Musashi和牛飯',
          image: '',
          links: [
            {
              label: '一蘭拉麵',
              url: 'https://maps.app.goo.gl/gipsA2r1w2VMnzLT6',
            },
            {
              label: 'いくら博多店',
              url: 'https://maps.app.goo.gl/HU2LKdLCpEoF32Hs5',
            },
            {
              label: 'Musashi 黒毛和牛 博多牛まぶし 武蔵',
              url: 'https://maps.app.goo.gl/FqP1VQmCW9YjCu5n6',
            },
          ],
        },
        {
          time: '14:00',
          title: '來個小甜點',
          category: '美食',
          location: 'いもんね博多店',
          openingHours: '10:00-21:00',
          note: '冰淇淋麻吉店 小乖推推 感覺好吃很可愛 在博多車站 & 飯店附近',
          image: '',
          links: [
            {
              label: 'いもんね博多店',
              url: 'https://www.google.com/maps/search/?api=1&query=Kushida+Shrine+Fukuoka',
            },
          ],
        },
        {
          time: '15:00',
          title: '飯店Check In + 小逛街',
          category: '住宿',
          location: '博多車站、飯店、Nintendo FUKUOKA',
          openingHours: 'Nintendo FUKUOKA 10:00-20:00',
          note: '準備去公園玩的食物(微野餐)、Nintendo FUKUOKA買皮克敏、飯店check in',
          image: '',
          links: [
            {
              label: 'Nintendo FUKUOKA',
              url: 'https://maps.app.goo.gl/sZnnKRKHbyVgpPMX9',
            },
            {
              label: 'Dacomecca 麵包店',
              url: 'https://maps.app.goo.gl/bDU4MWogjXCnbUGG7',
            },
          ],
        },
        {
          time: '16:00',
          title: '大濠公園 & 福岡市美術館',
          category: '景點',
          location: '大濠公園',
          note: '福岡城、舞鶴公園、福岡市美術館（草間彌生南瓜）、大濠公園、逛逛吃吃',
          image: '',
          links: [],
        },
        {
          time: '17:45',
          title: '福岡的街邊夕陽與海',
          category: '景點',
          location: '福岡塔 & 百道濱海灘',
          note: '看漂亮夕陽與海景，很餓的話就找地方吃東西、不看夕陽的話：可以和上一個行程對調，比較好安排晚餐時間',
          image: '',
          links: [
            {
              label: '福岡塔',
              url: 'https://maps.app.goo.gl/H9NTiR55AayksERK9',
            },
          ],
        },
        {
          time: '19:00',
          title: '享受晚餐',
          category: '用餐',
          location: '在機場線附近的站(大濠公園/唐人町) 吃',
          note: '好幾個選手可以選：再來訂位',
          image: '',
          links: [
            {
              label: 'Ishihara 石原牛精肉店',
              url: 'https://maps.app.goo.gl/ytZFega9ko5Z3DTW8',
            },
            {
              label: 'WAGYU PINFU 日式燒肉餐廳',
              url: 'https://maps.app.goo.gl/YMeo6m57EPVTfa9G8',
            },
            {
              label: '博多水炊鍋専門 橙',
              url: 'https://maps.app.goo.gl/PYwSY9o9M6TgkYxB9',
            },
          ],
        },
        {
          time: '20:30',
          title: '回飯店休息 & 車站地下街逛逛採買',
          category: '住宿',
          location: '博多車站',
          note: '回到飯店休息、博多車站地下街逛逛、第一波伴手禮採買',
          image: '',
          links: [],
        },
      ],
    },
    {
      day: 2,
      date: '2026-09-04',
      title: 'Day 2',
      icon: '⛩️',
      schedule: [
        // {
        //   time: '09:00',
        //   title: '前往太宰府',
        //   category: '交通',
        //   location: '太宰府站',
        //   note: '建議預留轉乘與排隊時間。',
        //   image: '',
        //   links: [
        //     {
        //       label: 'Google Maps',
        //       url: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Station',
        //     },
        //   ],
        // },
        // {
        //   time: '10:00',
        //   title: '太宰府天滿宮',
        //   category: '景點',
        //   location: '太宰府天滿宮',
        //   note: '參拜、表參道散步、吃梅枝餅。',
        //   image: '',
        //   links: [
        //     {
        //       label: 'Google Maps',
        //       url: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu',
        //     },
        //     { label: '更多資訊', url: 'https://www.dazaifutenmangu.or.jp/' },
        //   ],
        // },
        // {
        //   time: '14:30',
        //   title: '天神・大名逛街',
        //   category: '購物',
        //   location: '天神 / 大名',
        //   note: '咖啡、選物店、百貨都可依體力彈性調整。',
        //   image: '',
        //   links: [],
        // },
        // {
        //   time: '19:00',
        //   title: '晚餐與夜間散步',
        //   category: '美食',
        //   location: '天神 / 中洲',
        //   note: '如果想體驗屋台，可以晚餐後再去。',
        //   image: '',
        //   links: [],
        // },
      ],
    },
    {
      day: 3,
      date: '2026-09-05',
      title: '大採買日・返程',
      icon: '🛍️',
      schedule: [
        // {
        //   time: '09:30',
        //   title: '大濠公園散步',
        //   category: '景點',
        //   location: '大濠公園',
        //   note: '最後一天安排比較舒服的節奏。',
        //   image: '',
        //   links: [
        //     {
        //       label: 'Google Maps',
        //       url: 'https://www.google.com/maps/search/?api=1&query=Ohori+Park+Fukuoka',
        //     },
        //   ],
        // },
        // {
        //   time: '11:30',
        //   title: '午餐',
        //   category: '美食',
        //   location: '大濠 / 天神',
        //   note: '可依當天想吃的餐廳調整。',
        //   image: '',
        //   links: [],
        // },
        // {
        //   time: '14:00',
        //   title: '回飯店取行李',
        //   category: '住宿',
        //   location: '住宿地點',
        //   note: '確認伴手禮與隨身物品。',
        //   image: '',
        //   links: [],
        // },
        // {
        //   time: '15:30',
        //   title: '前往福岡機場',
        //   category: '交通',
        //   location: '福岡機場',
        //   note: '請依實際航班時間調整。',
        //   image: '',
        //   links: [
        //     {
        //       label: 'Google Maps',
        //       url: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport',
        //     },
        //   ],
        // },
      ],
    },
  ],
  footer: {
    message: 'Have a nice trip ♡',
    updatedAt: '2026-08-12',
  },
}
