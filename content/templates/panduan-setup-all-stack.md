---
title: Panduan Setup Lengkap Semua Tech-Stack
description: Panduan komprehensif setup untuk React, Next.js, Laravel, PHP, dan HTML/CSS dari awal hingga production ready
navigation:
  icon: i-lucide-rocket
---

# 📄 Panduan Setup Lengkap Semua Tech-Stack

Panduan komprehensif untuk setup semua tech-stack yang tersedia, dari instalasi hingga production deployment.

---

## 🔵 REACT - Setup & Instalasi

### Requirements
- Node.js 16+ 
- npm atau yarn

### Quick Start
```bash
# Buat project baru
npx create-react-app my-app
cd my-app

# Install dependencies jika download template
npm install

# Jalankan development server
npm start
# Akses: http://localhost:3000
```

### Struktur Folder React
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── styles/        # CSS files
├── utils/         # Helper functions
├── App.jsx        # Main component
└── index.jsx      # Entry point
```

### Konfigurasi Penting
**`.env` file:**
```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_NAME=MyApp
```

⚠️ **Note:** Environment variables harus dimulai dengan `REACT_APP_`

### Install Package Umum
```bash
npm install react-router-dom axios
npm install -D tailwindcss
```

### Build untuk Production
```bash
npm run build
# Output: folder "build"

# Test production build
npm install -g serve
serve -s build
```

### Deploy
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag & drop folder "build"
- **GitHub Pages**: `npm install --save-dev gh-pages`

---

## ⚫ NEXT.JS - Setup & Instalasi

### Requirements
- Node.js 18.17+
- npm atau yarn

### Quick Start
```bash
# Buat project baru (recommended)
npx create-next-app@latest my-nextjs-app
cd my-nextjs-app

# Atau dengan template yang didownload
npm install

# Jalankan development server
npm run dev
# Akses: http://localhost:3000
```

### Struktur Folder Next.js (App Router)
```
app/
├── layout.jsx      # Root layout
├── page.jsx        # Home page (/)
├── api/
│   └── route.js    # API endpoint
└── blog/
    ├── [slug]/
    │   └── page.jsx # Dynamic route

components/        # Reusable components
lib/              # Helper functions
public/           # Static files
```

### Environment Variables (`.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgresql://...
API_SECRET_KEY=secret_key
```

**Note:** `NEXT_PUBLIC_` = client-side, tanpa prefix = server-side

### Setup Database & Auth
```bash
# Prisma ORM
npm install @prisma/client
npm install -D prisma
npx prisma init

# NextAuth untuk authentication
npm install next-auth
```

### Build & Run Production
```bash
npm run build
npm run start
```

### Deploy
- **Vercel** (recommended): `vercel` atau push ke GitHub
- **Netlify**: Setup build command `npm run build`
- **Docker**: Siap untuk containerization

---

## 🔴 LARAVEL - Setup & Instalasi

### Requirements
- PHP 8.1+
- Composer
- MySQL/Database

### Quick Start
```bash
# Install Laravel Installer
composer global require laravel/installer

# Buat project baru
laravel new my-laravel-app
cd my-laravel-app

# Atau dengan template yang didownload
composer install
php artisan key:generate
php artisan serve
# Akses: http://localhost:8000
```

### Konfigurasi Database (`.env`)
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_db
DB_USERNAME=root
DB_PASSWORD=password
```

### Database Setup
```bash
# Create database (MySQL console atau tool)
CREATE DATABASE laravel_db;

# Run migrations
php artisan migrate

# Seed data
php artisan db:seed
```

### Struktur Folder Laravel
```
app/
├── Http/Controllers/   # Business logic
├── Models/            # Database models

database/
├── migrations/        # Schema files
├── seeders/          # Sample data

resources/
├── views/            # Blade templates
├── css/
└── js/

routes/
├── web.php           # Web routes
└── api.php           # API routes
```

### Install Dependencies
```bash
# NPM assets
npm install
npm run dev

# Authentication
php artisan breeze:install
```

### Build & Deploy
```bash
# Production optimization
php artisan config:cache
php artisan route:cache
npm run build

# Deploy ke shared hosting, VPS, atau Docker
```

---

## 🌐 HTML/CSS - Setup & Instalasi

### Requirements
- Browser modern
- Text editor (VS Code recommended)
- Live Server extension (optional)

### Quick Start
```bash
# Extract template
unzip template-html.zip
cd template-html

# Jalankan dengan Live Server
# VS Code: Right-click index.html → Open with Live Server

# Atau dengan Python
python3 -m http.server 8000
# Akses: http://localhost:8000
```

### Folder Structure
```
project/
├── index.html        # Home page
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
├── fonts/
└── assets/
```

### CSS Responsive
```css
/* Desktop */
.container { max-width: 1200px; }

/* Tablet */
@media (max-width: 768px) {
  .container { padding: 15px; }
}

/* Mobile */
@media (max-width: 480px) {
  .container { padding: 10px; }
}
```

### JavaScript Minimal
```javascript
// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});
```

### Deploy
- **GitHub Pages**: Push ke repo, enable Pages di Settings
- **Netlify**: Drag & drop folder
- **Shared Hosting**: FTP upload
- **Vercel**: `vercel`

---

## 🟣 PHP - Setup & Instalasi

### Requirements
- PHP 8.1+
- Web Server (Apache/Nginx)
- MySQL

### Quick Start

#### Local Development
```bash
# Windows: XAMPP
# macOS: MAMP
# Linux: Apache + PHP + MySQL

# Extract template
unzip template-php.zip
cd template-php

# Copy ke web server folder
# XAMPP: C:\xampp\htdocs\project
# MAMP: /Applications/MAMP/htdocs/project
```

#### Environment Setup
```bash
# Create .env file
cp .env.example .env

# Edit database credentials
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=project_db
```

#### Database Setup
```bash
# MySQL console
mysql -u root -p
CREATE DATABASE project_db;

# Or import SQL dump
mysql -u root -p project_db < database/schema.sql
```

### Folder Structure
```
project/
├── index.php          # Entry point
├── config.php         # Configuration
├── app/
│   ├── controllers/   # Business logic
│   ├── models/        # Database models
│   └── views/         # HTML templates
├── database/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
└── .htaccess          # URL rewriting
```

### Basic PHP Code
```php
<?php
// config.php - Database connection
$conn = new mysqli("localhost", "root", "password", "project_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
// index.php - Simple routing
$page = $_GET['page'] ?? 'home';
require "app/views/{$page}.php";
?>
```

### Enable Clean URLs (.htaccess)
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^([a-z0-9_-]+)/?$ index.php?page=$1 [QSA,L]
</IfModule>
```

### Deploy
- **Shared Hosting**: FTP upload via cPanel
- **VPS**: SSH + Git clone + composer install
- **Docker**: Siap untuk containerization

---

## ✅ Universal Checklist Pre-Production

Sebelum launch, pastikan:

- [ ] `.env` file sudah configured
- [ ] Database sudah terhubung dan berisi data
- [ ] Build/compile test sukses (`npm run build` atau `php artisan build`)
- [ ] No console errors di browser DevTools
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] All links bekerja dengan baik
- [ ] Forms berfungsi dan data tersimpan
- [ ] Images optimized dan loading cepat
- [ ] Security: no hardcoded secrets di repo
- [ ] HTTPS enabled (jika di production)

---

## 🔗 Referensi Cepat Per Tech-Stack

### React
- Docs: [react.dev](https://react.dev)
- Create React App: `npx create-react-app`
- Vite template: `npm create vite -- --template react`

### Next.js
- Docs: [nextjs.org](https://nextjs.org)
- Template: `npx create-next-app@latest`
- Deploy: Vercel (recommended)

### Laravel
- Docs: [laravel.com](https://laravel.com)
- Installer: `composer global require laravel/installer`
- CLI: `php artisan`

### HTML/CSS
- MDN: [developer.mozilla.org](https://developer.mozilla.org)
- Tailwind: [tailwindcss.com](https://tailwindcss.com)
- Bootstrap: [getbootstrap.com](https://getbootstrap.com)

### PHP
- Docs: [php.net](https://php.net)
- Laravel alternative untuk PHP modern
- MySQL: [mysql.com](https://mysql.com)

---

## 🆘 Common Issues & Solutions

### "npm command not found"
→ Install Node.js dari [nodejs.org](https://nodejs.org)

### "Module not found"
→ Delete `node_modules` dan run `npm install` lagi

### Database connection error
→ Check `.env` credentials dan pastikan database server running

### Port sudah digunakan
→ Ganti port: `PORT=3001 npm start`

### Permission denied on uploads folder
→ `chmod -R 777 uploads` (Linux/Mac)

---

## 📞 Support & Bantuan

- **Using Dev**: [using-dev.vercel.app](https://using-dev.vercel.app)
- **Email**: support@using-dev.com
- **GitHub**: [@maulana-tech](https://github.com/maulana-tech)
- **Instagram**: [@lana.dev_](https://instagram.com/lana.dev_)

---

**Sudah siap? Pilih tech-stack Anda dan mulai setup sekarang!** 🚀
