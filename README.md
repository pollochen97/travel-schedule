# Fukuoka Trip Site

一個可分享給家人的手機優先靜態旅行行程網站。這份範例先放入福岡 3 日行程，但未來換城市時不需要重寫版面。

## 最常修改的檔案：`tripData.js`

你可以直接調整：
- `trip`：旅行名稱、地點、開始/結束日期
- `flights`：去程與回程航班
- `hotel`：住宿名稱、地址、Google Maps / 官網
- `days`：Day 1～Day 3 的時間、行程名稱、地點、備註、圖片、連結
- `footer.updatedAt`：最後更新日期

每個行程可以這樣寫：

```js
{
  time: '10:00',
  title: '太宰府天滿宮',
  category: '景點',
  location: '太宰府天滿宮',
  note: '參拜、散步、吃梅枝餅。',
  image: './assets/dazaifu.jpg',
  links: [
    { label: 'Google Maps', url: 'https://...' },
    { label: '官方網站', url: 'https://...' }
  ]
}
```

不需要的 `note`、`image`、`location` 或 `links` 可以留空，網站會自動隱藏。

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

建議不要直接雙擊 HTML，而是在資料夾中啟動簡單的靜態伺服器：

```bash
python -m http.server 8000
```

接著瀏覽器開啟 `http://localhost:8000/`。

## 分享給家人

整個專案都是純 HTML / CSS / JavaScript，可直接部署到 GitHub Pages、Cloudflare Pages 或 Netlify。部署時不需要 build 指令，網站根目錄就是這個資料夾。
