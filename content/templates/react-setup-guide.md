---
title: Panduan Setup React - Dari Download hingga Konfigurasi
description: Tutorial lengkap setup React dari awal, download template, instalasi dependencies, hingga konfigurasi produksi
navigation:
  icon: i-lucide-file-text
---

# 📄 Panduan Setup React - Dari Download hingga Konfigurasi

Tutorial lengkap untuk memulai proyek React, dari download template hingga siap diproduksi.

## 1. Persiapan Awal

### Prasyarat
- **Node.js** versi 16+ (download dari [nodejs.org](https://nodejs.org))
- **npm** atau **yarn** (sudah included saat install Node.js)
- **Text Editor** (VS Code, WebStorm, atau sesuai preferensi)
- **Git** untuk version control (optional tapi recommended)

### Verifikasi Instalasi
```bash
# Cek versi Node.js
node --version

# Cek versi npm
npm --version
```

## 2. Memilih Cara Membuat Project React

### Opsi A: Menggunakan Create React App (Paling Mudah)
```bash
# Buat project baru
npx create-react-app my-react-app

# Masuk ke folder project
cd my-react-app

# Jalankan development server
npm start
```

**Keuntungan:**
- Setup otomatis dan mudah
- Cocok untuk pemula
- Webpack sudah dikonfigurasi

**Kekurangan:**
- Build time lebih lambat
- Kustomisasi terbatas

### Opsi B: Menggunakan Vite (Lebih Cepat)
```bash
# Buat project dengan Vite
npm create vite@latest my-react-app -- --template react

# Masuk ke folder
cd my-react-app

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

**Keuntungan:**
- Development server lebih cepat
- Build time lebih singkat
- Modern tooling

### Opsi C: Download Template React (Dari Provider)

#### Dari Marketplace Populer:

**1. Envato Elements / ThemeForest**
- Buka [themeforest.net](https://themeforest.net)
- Cari template React dengan keyword: "React admin", "React dashboard", dll
- Klik template pilihan → "Buy Now" (atau gunakan subscription Envato)
- Download file `.zip`

**2. Creative Tim**
- Kunjungi [creativetim.com](https://creativetim.com)
- Pilih template React gratis atau premium
- Klik "Download" atau "Get Free"
- Extract file ke folder project

**3. UI Kit Libraries**
- [Material-UI](https://mui.com) - Gratis
- [Chakra UI](https://chakra-ui.com) - Gratis
- [Ant Design](https://ant.design) - Gratis

## 3. Setup Template React yang Didownload

### Step 1: Extract dan Persiapan
```bash
# Extract file template yang didownload
unzip template-react.zip

# Masuk ke folder project
cd template-react

# Lihat struktur folder
ls -la
```

### Step 2: Install Dependencies
```bash
# Install semua package yang dibutuhkan
npm install

# Atau gunakan yarn
yarn install
```

**Jika ada error:**
```bash
# Clear npm cache
npm cache clean --force

# Install ulang
npm install

# Atau coba dengan npm ci (recommended untuk production)
npm ci
```

### Step 3: Konfigurasi Environment Variables
```bash
# Buat file .env (jika belum ada)
cp .env.example .env

# Edit file .env
nano .env
# atau buka dengan text editor favorit
```

**Contoh `.env` file:**
```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_API_KEY=your_api_key_here
REACT_APP_ENVIRONMENT=development
```

**Catatan:** Di React, environment variable harus dimulai dengan `REACT_APP_`

## 4. Struktur Folder React Standard

```
src/
├── components/          # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Sidebar.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── styles/             # CSS/SCSS files
│   └── main.css
├── utils/              # Helper functions
│   ├── api.js
│   └── formatters.js
├── App.jsx             # Main component
├── index.jsx           # Entry point
└── index.css           # Global styles

public/
├── index.html
├── favicon.ico
└── assets/

.env                     # Environment variables
package.json            # Dependencies
```

## 5. Menjalankan Project

### Development Mode
```bash
npm start
```

Aplikasi akan terbuka di `http://localhost:3000`

### Dengan Hot Reload
- Perubahan file otomatis mereload browser
- Sangat berguna saat development

### Production Build
```bash
npm run build
```

Ini akan membuat folder `build/` dengan file-file ter-optimize untuk production.

## 6. Konfigurasi Dasar

### Install Package Tambahan yang Umum
```bash
# React Router (untuk navigation)
npm install react-router-dom

# Axios (untuk API calls)
npm install axios

# Tailwind CSS (untuk styling)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# State Management (Redux)
npm install @reduxjs/toolkit react-redux
```

### Setup React Router
**`src/App.jsx`:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

### Setup Axios untuk API
**`src/utils/api.js`:**
```javascript
import axios from 'axios'

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

// Add token to headers jika ada
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default API
```

## 7. Deployment

### Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy ke Netlify
```bash
# Build production
npm run build

# Drag & drop folder 'build' ke Netlify
# Atau gunakan Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Deploy ke GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add ke package.json:
# "homepage": "https://username.github.io/repo-name"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

## 8. Troubleshooting Common Issues

### Error: "Module not found"
```bash
# Clear node_modules dan install ulang
rm -rf node_modules
npm install
```

### Port 3000 sudah digunakan
```bash
# Ganti port
PORT=3001 npm start
```

### Environment variable tidak terbaca
```bash
# React hanya membaca REACT_APP_ prefix
# Restart dev server setelah update .env
npm start
```

### Build size terlalu besar
```bash
# Analisis bundle
npm install --save-dev source-map-explorer

# Analyze
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

## 9. Best Practices

✅ **DO:**
- Gunakan functional components & hooks
- Pisahkan components menjadi file terpisah
- Gunakan prop drilling minimally
- Implement error boundaries
- Optimize images

❌ **DON'T:**
- Hindari inline styles untuk production
- Jangan store sensitive data di localStorage
- Jangan commit `.env` file ke git
- Hindari large bundle sizes

## 10. Next Steps

- Pelajari React Hooks (useState, useEffect, useContext)
- Setup testing dengan Jest & React Testing Library
- Implement state management dengan Redux atau Zustand
- Setup CI/CD pipeline
- Deploy ke production

---

**Butuh bantuan?** Lihat dokumentasi resmi di [react.dev](https://react.dev)
