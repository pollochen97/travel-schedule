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
      date: '2026-01-24',
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
          time: '16:00',
          title: '櫛田神社與博多舊市街',
          category: '景點',
          location: '櫛田神社',
          note: '輕鬆散步，保留彈性吃點心。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://www.google.com/maps/search/?api=1&query=Kushida+Shrine+Fukuoka',
            },
          ],
        },
        {
          time: '18:30',
          title: '晚餐：博多美食',
          category: '美食',
          location: '博多 / 中洲',
          note: '可改成牛腸鍋、水炊雞或拉麵。',
          image: '',
          links: [],
        },
      ],
    },
    {
      day: 2,
      date: '2026-10-17',
      title: '太宰府・天神逛街',
      icon: '⛩️',
      schedule: [
        {
          time: '09:00',
          title: '前往太宰府',
          category: '交通',
          location: '太宰府站',
          note: '建議預留轉乘與排隊時間。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Station',
            },
          ],
        },
        {
          time: '10:00',
          title: '太宰府天滿宮',
          category: '景點',
          location: '太宰府天滿宮',
          note: '參拜、表參道散步、吃梅枝餅。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu',
            },
            { label: '更多資訊', url: 'https://www.dazaifutenmangu.or.jp/' },
          ],
        },
        {
          time: '14:30',
          title: '天神・大名逛街',
          category: '購物',
          location: '天神 / 大名',
          note: '咖啡、選物店、百貨都可依體力彈性調整。',
          image: '',
          links: [],
        },
        {
          time: '19:00',
          title: '晚餐與夜間散步',
          category: '美食',
          location: '天神 / 中洲',
          note: '如果想體驗屋台，可以晚餐後再去。',
          image: '',
          links: [],
        },
      ],
    },
    {
      day: 3,
      date: '2026-10-18',
      title: '大濠公園・返程',
      icon: '🌿',
      schedule: [
        {
          time: '09:30',
          title: '大濠公園散步',
          category: '景點',
          location: '大濠公園',
          note: '最後一天安排比較舒服的節奏。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://www.google.com/maps/search/?api=1&query=Ohori+Park+Fukuoka',
            },
          ],
        },
        {
          time: '11:30',
          title: '午餐',
          category: '美食',
          location: '大濠 / 天神',
          note: '可依當天想吃的餐廳調整。',
          image: '',
          links: [],
        },
        {
          time: '14:00',
          title: '回飯店取行李',
          category: '住宿',
          location: '住宿地點',
          note: '確認伴手禮與隨身物品。',
          image: '',
          links: [],
        },
        {
          time: '15:30',
          title: '前往福岡機場',
          category: '交通',
          location: '福岡機場',
          note: '請依實際航班時間調整。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport',
            },
          ],
        },
      ],
    },
  ],

  footer: {
    message: 'Have a nice trip ♡',
    updatedAt: '2026-08-12',
  },
}
