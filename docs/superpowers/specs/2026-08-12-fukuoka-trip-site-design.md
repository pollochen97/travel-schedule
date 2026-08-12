# 福岡 3 日家庭分享行程網站 — Design Spec

## 1. 目標
建立一個手機優先、可分享給家人的靜態旅遊行程網站。這次以福岡 3 日旅程為主題，但結構需能重複套用到其他城市。使用者之後主要只需要修改 `tripData.js` 與 `assets/` 內容，即可更新日期、航班、住宿、每日時間軸與外部連結。

## 2. 核心使用情境
- 家人打開網址後，可以快速知道旅行日期、航班、住宿與每天的大致安排。
- 使用者可以用 Day 1 / Day 2 / Day 3 Tab 切換每日行程。
- 每個行程項目包含時間、名稱、地點、簡短備註與可選連結。
- 點擊連結可前往 Google Maps、景點官網、訂票頁或其他參考資訊。
- 未來換城市時，不需要重寫版面，只需要改資料與主題素材。

## 3. 頁面架構
單頁式靜態網站：

1. Hero
   - 旅行名稱
   - 城市 / 國家
   - 旅行日期
   - 可替換主視覺插圖或照片

2. Trip Overview
   - 去程航班
   - 回程航班
   - 住宿名稱
   - 住宿地址
   - 可選 Maps / 官網連結

3. Day Tabs
   - Day 1 / Day 2 / Day 3
   - 顯示日期與當天短標題
   - 點擊後只切換資料，不重新載入頁面

4. Daily Timeline
   - 時間
   - 行程名稱
   - 類型 icon / emoji
   - 地點
   - 備註
   - 外部連結按鈕
   - 可選圖片

5. Footer
   - 簡單旅程標語 / 最後更新日期

## 4. 視覺方向
「福岡旅行風」但不把版面綁死在福岡：
- 手機優先，桌機以置中卡片形式呈現。
- 使用柔和日系配色、圓角卡片、輕量陰影。
- Hero 可以搭配可替換的福岡插圖 / 旅行照片。
- 行程 timeline 用圓點與垂直線建立時間流動感。
- 每日 Tab 需有明確 active 狀態。
- 不依賴圖片才能成立；圖片缺少時版面仍完整。

## 5. 可自訂 Theme
`tripData.js` 提供：
- `theme.primary`
- `theme.secondary`
- `theme.background`
- `theme.heroImage`
- `theme.heroEmoji`

若沒有 `heroImage`，改用 emoji / 純色 Hero。

## 6. 資料結構
```js
const tripData = {
  trip: {
    title: "Fukuoka Trip",
    subtitle: "福岡 3 日小旅行",
    location: "Fukuoka, Japan",
    startDate: "2026-10-16",
    endDate: "2026-10-18"
  },
  theme: {
    primary: "#...",
    secondary: "#...",
    background: "#...",
    heroImage: "./assets/hero.jpg",
    heroEmoji: "✈️"
  },
  flights: {
    outbound: {
      airline: "",
      flightNo: "",
      departureTime: "",
      departureAirport: "",
      arrivalTime: "",
      arrivalAirport: ""
    },
    inbound: {}
  },
  hotel: {
    name: "",
    address: "",
    mapUrl: "",
    websiteUrl: ""
  },
  days: [
    {
      day: 1,
      date: "2026-10-16",
      title: "抵達福岡・市區散步",
      icon: "🍜",
      schedule: [
        {
          time: "10:00",
          title: "範例行程",
          category: "景點",
          location: "",
          note: "",
          image: "",
          links: [
            { label: "Google Maps", url: "" },
            { label: "更多資訊", url: "" }
          ]
        }
      ]
    }
  ]
};
```

## 7. 檔案架構
```text
fukuoka-trip-site/
├─ index.html
├─ styles.css
├─ app.js
├─ tripData.js
├─ assets/
│  ├─ hero-placeholder.svg
│  └─ README.md
└─ README.md
```

責任分工：
- `index.html`: 固定頁面骨架。
- `styles.css`: 視覺樣式與 RWD。
- `tripData.js`: 使用者主要編輯資料。
- `app.js`: 將資料渲染到畫面、切換 Tab、產生外部連結。
- `assets/`: 使用者替換的圖片 / 插圖。

## 8. 互動與資料流
1. Browser 載入 `tripData.js`。
2. `app.js` 讀取資料並渲染 Hero、航班、住宿與 Day Tabs。
3. 預設顯示 Day 1。
4. 點擊 Tab 時，重新渲染 timeline 區塊。
5. 外部連結以新分頁開啟並加上安全的 `rel="noopener noreferrer"`。

## 9. Error Handling
- 缺少圖片：隱藏圖片區塊，不顯示破圖。
- 缺少地點 / 備註：不渲染空白欄位。
- 缺少 URL：不建立該按鈕。
- 缺少航班或住宿欄位：只顯示已有資訊。
- `days` 為空：顯示簡短提示，而非 JavaScript error。

## 10. 可及性與手機體驗
- Button / link 觸控區域至少約 44px 高。
- Tab 支援 keyboard focus。
- 圖片具有 alt。
- 顏色不作為唯一狀態辨識方式。
- 主要內容寬度限制，桌機不會過度拉寬。

## 11. 測試重點
- Day 1 / Day 2 / Day 3 正確切換。
- 手機 360px 寬度不溢位。
- 桌機顯示置中且可閱讀。
- 空圖片 / 空備註 / 空連結不破版。
- Google Maps / 官網連結可以正常開新分頁。
- 修改 `tripData.js` 後不需要改 HTML 即可更新內容。

## 12. 非目標 / YAGNI
第一版不做：
- 登入 / 帳號
- 雲端資料庫
- 網站內編輯器
- 即時多人同步
- 地圖 API 嵌入
- 後台管理

這些功能會增加部署與維護成本，不符合「可快速分享給家人的靜態網站」目標。

## 13. 完成定義
- 3 天行程可透過 Tab 使用。
- 首頁有航班與住宿資訊。
- 每個時間軸項目可選擇性加入外部連結。
- 使用者只需改 `tripData.js` 即可更新主要旅行內容。
- Hero / icon / theme 可以自行替換。
- 可直接部署到 GitHub Pages、Cloudflare Pages 或 Netlify 等靜態託管服務。
