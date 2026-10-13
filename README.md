# Korea Trip Site

一個可分享給家人的手機優先靜態旅行行程網站。目前依行程照片整理 2026/10/16～10/19 韓國 4 日旅程，包含銀赫見面會、藝聲演唱會與機場接送。原福岡行程可從 `main` 分支的歷史版本查看。

照片中的合併儲存格以約略時間整理；未指定的景點、飯店分館、清晨入住、AREX 首班與接送時間保留為待確認。去程為 10/17 01:25～05:00，回程為 10/18 22:40～10/19 00:10。電子入境表提醒依照片轉錄。

## 最常修改的檔案：`tripData.js`

你可以直接調整：
- `trip`：旅行名稱、地點、開始/結束日期
- `flights`：去程與回程航班；`departureDate`／`arrivalDate` 顯示跨日日期
- `hotels`：多間住宿的名稱、地址、備註、Google Maps / 官網（也相容原本的 `hotel`）
- `reminders`：行前提醒、備註與連結
- `days`：Day 1～Day 4 的時間、行程名稱、地點、營業時間、備註、圖片、連結
- `footer.updatedAt`：最後更新日期

每個行程可以這樣寫：

```js
{
  time: '10:00',
  title: '太宰府天滿宮',
  category: '景點',
  location: '太宰府天滿宮',
  openingHours: '06:30-18:30',
  note: '參拜、散步、吃梅枝餅。',
  image: './assets/dazaifu.jpg',
  links: [
    { label: 'Google Maps', url: 'https://...' },
    { label: '官方網站', url: 'https://...' }
  ]
}
```

不需要的 `openingHours`、`note`、`image`、`location` 或 `links` 可以留空，網站會自動隱藏。

「旅行資訊」下的提醒卡片集中在「旅行筆記」中，預設收合，點擊標題即可一次展開／收合，也支援鍵盤操作。航班、住宿卡片與每日行程的備註維持直接顯示；沒有提醒卡片時不顯示「旅行筆記」。

## 更換主視覺與顏色

在 `tripData.js` 修改：

```js
theme: {
  primary: '#D96846',
  secondary: '#F3C58F',
  background: '#FFF9F2',
  heroImage: './assets/hero-placeholder.svg',
  heroEmoji: '🍜'
}
```

把自己的照片或插圖放到 `assets/`，再把 `heroImage` 改成新的檔案路徑即可。若 `heroImage` 留空，會顯示 `heroEmoji`。

## 本機預覽

在專案資料夾啟動支援自動重載的開發伺服器：

```bash
node dev-server.js
```

接著瀏覽器開啟 `http://127.0.0.1:8000/`。儲存行程、HTML、CSS、JavaScript 或圖片後，頁面會在約 1 秒內自動重載。開發伺服器禁止快取；自動重載程式只在本機伺服器回應中加入，不影響部署版本。

若先前已有伺服器執行，先在其終端按 `Ctrl+C`，再執行上述指令。若 8000 埠被占用，PowerShell 可用 `$env:PORT=8001` 後再執行 `node dev-server.js`，開啟對應的 8001 網址。

也可用 `python -m http.server 8000` 做一般靜態預覽，但不會自動重載。若你開啟的是部署網站，本機修改需要推送並完成部署才會顯示。

## 分享給家人

整個專案都是純 HTML / CSS / JavaScript，可直接部署到 GitHub Pages、Cloudflare Pages 或 Netlify。部署時不需要 build 指令，網站根目錄就是這個資料夾。
