# Jeju Travel Planner App

一個可愛活潑風格的濟州島旅遊規劃網頁 App。主色是橘、白、粉、藍，核心功能包含：

- 日期切換：點選 Day 1–Day 5 會跳到當天時間軸
- 時間軸行程：點選行程中的景點會跳到景點介紹卡
- 景點介紹：可放地區、標籤、短介紹
- 記帳本：新增支出、成員、支出明細
- 最少轉帳次數：用淨額結算，減少彼此轉帳次數
- Firebase 雲端同步：可讓朋友使用同一個 Trip ID 共用資料
- 沒有 Firebase 設定時：會自動改成本機 localStorage demo 模式

## 快速開始

```bash
npm install
npm run dev
```

## Firebase 設定

1. 到 Firebase Console 建立專案
2. 建立 Web App
3. 開啟 Authentication，啟用 Anonymous / 匿名登入
4. 建立 Cloud Firestore database
5. 複製 `.env.example` 為 `.env`
6. 把 Firebase Web App config 填入 `.env`

```bash
cp .env.example .env
```

## Firestore Security Rules 範例

開發測試可用下方規則。正式上線建議再做更細的權限設計，例如 invite code、owner/member list。

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /trips/{tripId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 最少轉帳次數邏輯

系統會把每個人的支出轉成「淨額」。

- 淨額 > 0：代表應該收錢
- 淨額 < 0：代表應該付錢

接著用雙指標把欠款者直接配給應收者。例如：

- A 欠 B 100
- C 欠 A 150

傳統會變成 C → A、A → B 兩筆。  
但如果 A 的淨額可以被抵消，系統會盡量讓 C 直接付給 B，減少轉帳次數。

## 部署

可部署到 Firebase Hosting、Vercel、Netlify。若用 Firebase Hosting：

```bash
npm run build
firebase init hosting
firebase deploy
```


## PWA 手機安裝

這版已經加入：

- `public/manifest.webmanifest`
- `public/sw.js`
- `public/icon-192.png`
- `public/icon-512.png`
- `index.html` 的 PWA meta tags
- `src/main.jsx` 的 service worker registration

### iPhone 安裝方式

1. 用 Safari 打開部署後的網址
2. 點分享按鈕
3. 選「加入主畫面」
4. 桌面會出現 Jeju Planner icon

### Android 安裝方式

1. 用 Chrome 打開部署後的網址
2. 點右上角三個點
3. 選「安裝應用程式」或「加入主畫面」
