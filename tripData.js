window.tripData = {
  trip: {
    title: '福岡晚夏三日快閃',
    destination: '日本福岡',
    startDate: '2026-09-03',
    endDate: '2026-09-05',
    travelers: '崇家',
    summary: '吃爆福岡！買爆福岡！',
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
      label: '去程',
      flightNo: '請填入航班編號',
      from: '台北',
      to: '福岡',
      departAt: '請填入出發時間',
      arriveAt: '請填入抵達時間',
      note: '確認航班後可直接修改這裡。',
    },
    inbound: {
      label: '回程',
      flightNo: '請填入航班編號',
      from: '福岡',
      to: '台北',
      departAt: '請填入出發時間',
      arriveAt: '請填入抵達時間',
      note: '確認航班後可直接修改這裡。',
    },
  },

  hotel: {
    name: '請填入住宿名稱',
    address: '請填入住宿地址',
    checkIn: '請填入入住時間',
    checkOut: '請填入退房時間',
    links: [
      { label: 'Google Maps', url: '' },
      { label: '官網', url: '' },
    ],
  },

  days: [
    {
      day: 1,
      title: 'Day 1',
      date: '2026-01-24',
      summary: '抵達福岡、飯店寄放行李，安排市區散步與晚餐。',
      items: [
        {
          time: '10:00',
          title: '抵達福岡機場',
          category: '交通',
          location: '福岡機場',
          note: '入境後搭乘地鐵或計程車前往市區。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Fukuoka%20Airport',
            },
          ],
        },
        {
          time: '12:00',
          title: '博多車站周邊午餐',
          category: '餐食',
          location: '博多車站',
          note: '可選拉麵、牛腸鍋或車站商場餐廳。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Hakata%20Station',
            },
          ],
        },
        {
          time: '15:00',
          title: '飯店 Check-in',
          category: '住宿',
          location: '請填入住宿名稱',
          note: '先休息整理行李，確認隔天交通。',
          image: '',
          links: [],
        },
        {
          time: '18:00',
          title: '天神或中洲晚餐',
          category: '餐食',
          location: '天神 / 中洲',
          note: '晚餐後可散步看夜景。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Tenjin%20Fukuoka',
            },
          ],
        },
      ],
    },
    {
      day: 2,
      title: 'Day 2',
      date: '2026-01-25',
      summary: '太宰府半日散策，下午回福岡市區逛街。',
      items: [
        {
          time: '09:00',
          title: '前往太宰府',
          category: '交通',
          location: '西鐵福岡（天神）站',
          note: '搭乘西鐵前往太宰府，出發前確認班次。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Nishitetsu%20Fukuoka%20Tenjin%20Station',
            },
          ],
        },
        {
          time: '10:00',
          title: '太宰府天滿宮',
          category: '景點',
          location: '太宰府天滿宮',
          note: '參拜、散步、吃梅枝餅。',
          image: './assets/dazaifu.jpg',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Dazaifu%20Tenmangu',
            },
            { label: '官方網站', url: 'https://www.dazaifutenmangu.or.jp/' },
          ],
        },
        {
          time: '14:30',
          title: '回天神逛街',
          category: '購物',
          location: '天神地下街',
          note: '依體力安排百貨、地下街或咖啡休息。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Tenjin%20Underground%20Mall',
            },
          ],
        },
        {
          time: '18:30',
          title: '晚餐',
          category: '餐食',
          location: '福岡市區',
          note: '可預留彈性，依當天狀況選餐廳。',
          image: '',
          links: [],
        },
      ],
    },
    {
      day: 3,
      title: 'Day 3',
      date: '2026-01-26',
      summary: '上午安排海邊或市區輕行程，下午前往機場。',
      items: [
        {
          time: '09:30',
          title: '大濠公園散步',
          category: '景點',
          location: '大濠公園',
          note: '適合慢慢走、拍照或喝咖啡。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Ohori%20Park',
            },
          ],
        },
        {
          time: '12:00',
          title: '午餐與最後採買',
          category: '餐食',
          location: '博多車站 / 天神',
          note: '預留買伴手禮與回飯店拿行李的時間。',
          image: '',
          links: [],
        },
        {
          time: '15:00',
          title: '前往福岡機場',
          category: '交通',
          location: '福岡機場',
          note: '依回程航班調整出發時間。',
          image: '',
          links: [
            {
              label: 'Google Maps',
              url: 'https://maps.google.com/?q=Fukuoka%20Airport',
            },
          ],
        },
      ],
    },
  ],

  footer: {
    message: 'Have a nice trip ♡',
    updatedAt: '2026-08-12',
    note: '航班、住宿與餐廳資訊請以出發前最新資料為準。',
  },
}
