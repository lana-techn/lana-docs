---
title: Quick Start Template
description: One-page reference template untuk setup cepat produk digital
navigation:
  icon: i-lucide-zap
---

# 📄 [PRODUCT NAME] - Quick Start Guide

> **One-page reference for fast setup. For detailed docs, see full documentation**

---

## 📥 1. Download Produk

### Dari Email:
1. Buka email konfirmasi pembelian
2. Klik link **"Download Produk"**
3. Login dengan akun Google
4. Klik **"Add to My Drive"** (untuk file >500MB) ATAU **"Download"** langsung

### Troubleshooting:
- ❌ **Quota exceeded?** → Gunakan "Add to My Drive" lalu download dari My Drive
- ❌ **Download gagal?** → Gunakan [Download Manager](https://www.freedownloadmanager.org/)

---

## 📂 2. Extract File

```bash
# Windows: Right-click > Extract All
# macOS: Double-click ZIP file
# Linux: 
unzip product-name.zip
```

---

## 💻 3. Install Dependencies

### Node.js Project:
```bash
cd product-folder
npm install        # atau: pnpm install / yarn install
```

### Python Project:
```bash
cd product-folder
python3 -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### PHP Project:
```bash
cd product-folder
composer install
```

---

## ⚙️ 4. Setup Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit dengan editor favorit
code .env.local     # atau: nano .env.local / notepad .env.local
```

### Minimal Configuration:
```env
# App
APP_URL=http://localhost:3000
APP_NAME=My App

# Database (if needed)
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# API Keys (if needed)
API_KEY=your-key-here
```

---

## 🗄️ 5. Setup Database (Optional)

```bash
# Create database
createdb myapp_db

# Run migrations
npm run migrate        # Node.js
# atau
python manage.py migrate    # Python/Django
# atau
php artisan migrate         # PHP/Laravel
```

---

## 🚀 6. Run Application

### Development:
```bash
npm run dev        # Node.js/Next.js
# atau
python manage.py runserver    # Django
# atau
php artisan serve            # Laravel
```

### Access:
Open browser → **http://localhost:3000** (or port shown in terminal)

---

## ✅ Verify Installation

- [ ] App running without errors
- [ ] Can access homepage
- [ ] Database connected (if applicable)
- [ ] Can create test account / login
- [ ] All main features accessible

---

## 🔧 Common Issues

### Port Already in Use
```bash
# Kill process using port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

### Permission Denied
```bash
# Fix npm permissions (Linux/macOS)
sudo chown -R $USER /usr/local/lib/node_modules

# Or run with correct user
chmod +x script.sh
```

### Module Not Found
```bash
# Clear cache & reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 📞 Need Help?

- 📖 **Full Documentation**: See full docs
- 📧 **Email Support**: support@yourdomain.com
- 💬 **WhatsApp**: +62-xxx-xxxx-xxxx
- 🌐 **Help Center**: yourdomain.com/help

---

## 🎯 Next Steps

1. **Read full documentation** → See docs folder
2. **Customize configuration** → Check config files
3. **Deploy to production** → Follow deployment guide
4. **Join community** → Discord/Forum (coming soon)

---

<div align="center">

### 🚀 You're all set! Happy building!

**Pro tip**: Star this project & bookmark docs for quick reference

</div>
