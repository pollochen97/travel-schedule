const tripData = {
  trip: {
    title: 'Fukuoka Trip',
    subtitle: '福岡 3 日小旅行',
    location: 'Fukuoka, Japan',
    startDate: '2026-10-16',
    endDate: '2026-10-18'
  },
  theme: {
    primary: '#D96846',
    secondary: '#F3C58F',
    background: '#FFF9F2',
    heroImage: './assets/hero-placeholder.svg',
    heroEmoji: '🍜'
  },
  flights: {
    outbound: { airline: '航空公司待填', flightNo: '', departureTime: '09:00', departureAirport: 'TPE 桃園', arrivalTime: '12:15', arrivalAirport: 'FUK 福岡' },
    inbound: { airline: '航空公司待填', flightNo: '', departureTime: '18:30', departureAirport: 'FUK 福岡', arrivalTime: '20:10', arrivalAirport: 'TPE 桃園' }
  },
  hotel: {
    name: '住宿待填寫',
    address: '福岡市（請替換成實際地址）',
    mapUrl: '',
    websiteUrl: ''
  },
  days: [
    {
      day: 1, date: '2026-10-16', title: '抵達福岡・博多散步', icon: '🧳',
      schedule: [
        { time: '12:15', title: '抵達福岡機場', category: '交通', location: '福岡機場', note: '入境、領行李後前往市區。', image: '', links: [{ label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport' }] },
        { time: '14:30', title: '飯店寄放行李 / Check-in', category: '住宿', location: '住宿地點', note: '將這裡改成實際入住時間與注意事項。', image: '', links: [] },
        { time: '16:00', title: '櫛田神社與博多舊市街', category: '景點', location: '櫛田神社', note: '輕鬆散步，保留彈性吃點心。', image: '', links: [{ label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Kushida+Shrine+Fukuoka' }] },
        { time: '18:30', title: '晚餐：博多美食', category: '美食', location: '博多 / 中洲', note: '可改成牛腸鍋、水炊雞或拉麵。', image: '', links: [] }
      ]
    },
    {
      day: 2, date: '2026-10-17', title: '太宰府・天神逛街', icon: '⛩️',
      schedule: [
        { time: '09:00', title: '前往太宰府', category: '交通', location: '太宰府站', note: '建議預留轉乘與排隊時間。', image: '', links: [{ label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Station' }] },
        { time: '10:00', title: '太宰府天滿宮', category: '景點', location: '太宰府天滿宮', note: '參拜、表參道散步、吃梅枝餅。', image: '', links: [{ label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Dazaifu+Tenmangu' }, { label: '更多資訊', url: 'https://www.dazaifutenmangu.or.jp/' }] },
        { time: '14:30', title: '天神・大名逛街', category: '購物', location: '天神 / 大名', note: '咖啡、選物店、百貨都可依體力彈性調整。', image: '', links: [] },
        { time: '19:00', title: '晚餐與夜間散步', category: '美食', location: '天神 / 中洲', note: '如果想體驗屋台，可以晚餐後再去。', image: '', links: [] }
      ]
    },
    {
      day: 3, date: '2026-10-18', title: '大濠公園・返程', icon: '🌿',
      schedule: [
        { time: '09:30', title: '大濠公園散步', category: '景點', location: '大濠公園', note: '最後一天安排比較舒服的節奏。', image: '', links: [{ label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Ohori+Park+Fukuoka' }] },
        { time: '11:30', title: '午餐', category: '美食', location: '大濠 / 天神', note: '可依當天想吃的餐廳調整。', image: '', links: [] },
        { time: '14:00', title: '回飯店取行李', category: '住宿', location: '住宿地點', note: '確認伴手禮與隨身物品。', image: '', links: [] },
        { time: '15:30', title: '前往福岡機場', category: '交通', location: '福岡機場', note: '請依實際航班時間調整。', image: '', links: [{ label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query=Fukuoka+Airport' }] }
      ]
    }
  ],
  footer: { message: 'Have a nice trip ♡', updatedAt: '2026-08-12' }
};
