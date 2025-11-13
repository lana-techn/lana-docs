---
title: Next.js SaaS Starter Kit - Panduan Lengkap
description: Contoh dokumentasi produk untuk template SaaS berbasis Next.js + TypeScript + Supabase
navigation:
  icon: i-lucide-layout-template
---

# 📄 Next.js SaaS Starter Kit - Panduan Lengkap

> **Contoh dokumentasi produk untuk template SaaS berbasis Next.js + TypeScript + Supabase**

---

## 📦 Tentang Produk

**Next.js SaaS Starter Kit** adalah template siap pakai untuk membangun aplikasi SaaS modern dengan teknologi terkini. Hemat waktu development hingga 100+ jam dengan foundation yang solid dan best practices.

### ✨ Fitur Utama
- 🚀 **Next.js 14** dengan App Router & Server Components
- 🔐 **Authentication** lengkap (Email, Google, GitHub)
- 💳 **Payment Integration** dengan Stripe
- 🎨 **UI Components** 50+ komponen siap pakai
- 📊 **Admin Dashboard** untuk manage users & data
- 📧 **Email Service** dengan Resend/SendGrid
- 🗄️ **Database** Supabase (PostgreSQL)
- 🎯 **Landing Page** conversion-optimized
- 📱 **Responsive** mobile-first design
- 🌙 **Dark Mode** support
- 🔍 **SEO Optimized** dengan metadata lengkap
- 📈 **Analytics** Google Analytics & Umami ready

### 💡 Untuk Siapa Produk Ini?
Produk ini cocok untuk:
- 👨‍💻 Developers yang ingin launch SaaS dengan cepat
- 🚀 Startup yang butuh MVP dalam hitungan hari
- 💼 Freelancer yang sering build aplikasi web
- 🎓 Learners yang ingin belajar modern web development

---

## 🛒 Cara Membeli Produk

### Langkah 1: Pilih Produk
1. Kunjungi halaman produk di website kami
2. Baca deskripsi lengkap dan demo live
3. Cek bagian "Kompatibel dengan" untuk memastikan produk sesuai

### Langkah 2: Klik Tombol "Unduh Sekarang"
1. Klik tombol **"Unduh Sekarang"** berwarna hijau
2. Anda akan diarahkan ke halaman checkout

### Langkah 3: Lengkapi Pembayaran
1. Pilih metode pembayaran favorit Anda
2. Ikuti instruksi pembayaran
3. Setelah berhasil, Anda akan menerima:
   - ✅ Email konfirmasi dengan link download
   - ✅ Invoice pembelian
   - ✅ Akses ke folder Google Drive

> ⏱️ **Waktu Proses**: Link download dikirim dalam 5-10 menit setelah pembayaran

---

## 📥 Cara Download Produk dari Google Drive

### Metode Recommended: Add to My Drive (Untuk File >1GB)

Karena ukuran produk cukup besar (~1.5GB), kami sarankan metode ini:

1. **Klik link Google Drive** yang diterima via email
2. **Login** dengan akun Google Anda
3. Klik ikon **"Add to My Drive"** (folder dengan tanda +) di pojok kanan atas
4. Pilih lokasi folder di Drive Anda
5. Tunggu proses copy selesai (2-5 menit)
6. **Buka Google Drive Anda**
7. Cari folder "Next.js SaaS Starter Kit"
8. **Klik kanan > Download** (atau gunakan Google Drive Desktop App untuk sync otomatis)

### Metode Alternatif: Download Langsung

1. Klik link Google Drive
2. Klik tombol **"Download"** di pojok kanan atas
3. Jika muncul warning "Can't scan for viruses", klik **"Download anyway"**
4. File akan didownload sebagai ZIP

### Troubleshooting Download

#### ❌ "Download quota exceeded"
**Solusi:**
1. Gunakan akun Google yang berbeda
2. ATAU tunggu 24 jam
3. ATAU gunakan metode "Add to My Drive"

#### ❌ Download terputus di tengah jalan
**Solusi:**
1. Gunakan download manager (IDM, Free Download Manager)
2. ATAU gunakan Google Drive Desktop App (auto-resume)
3. ATAU "Add to My Drive" lalu sync dengan desktop app

---

## 💻 Persyaratan Sistem

### Minimal Requirements
- **OS**: Windows 10, macOS 12+, atau Ubuntu 20.04+
- **Processor**: Intel Core i3 / AMD Ryzen 3
- **RAM**: 8GB minimum
- **Storage**: 2GB ruang kosong
- **Node.js**: Version 18.17 atau lebih baru
- **Git**: Untuk version control (optional tapi recommended)

### Recommended Requirements
- **OS**: Windows 11, macOS 13+, atau Ubuntu 22.04+
- **Processor**: Intel Core i5 / AMD Ryzen 5 atau lebih baik
- **RAM**: 16GB
- **Storage**: 5GB ruang kosong (untuk node_modules)
- **Node.js**: Version 20 LTS
- **Internet**: Koneksi stabil untuk install dependencies

### Software yang Dibutuhkan
- ✅ **Node.js & npm** ([Download](https://nodejs.org/))
- ✅ **Code Editor** (VS Code recommended)
- ✅ **Git** ([Download](https://git-scm.com/))
- ⚙️ **pnpm** (optional, tapi lebih cepat dari npm)

---

## 🚀 Instalasi & Setup

### Langkah 1: Extract File

1. Setelah download selesai, cari file di folder **Downloads**
2. **Klik kanan** pada file `nextjs-saas-starter.zip`
3. Pilih **"Extract All"** (Windows) atau **double-click** (macOS)
4. Extract ke lokasi yang mudah diakses, misalnya `C:\Projects` atau `~/Projects`

### Langkah 2: Buka Project di VS Code

```bash
# Buka terminal/command prompt
cd ~/Projects/nextjs-saas-starter

# Buka di VS Code
code .
```

Struktur folder akan terlihat seperti ini:
```
nextjs-saas-starter/
├── README.md                 # Dokumentasi utama
├── SETUP.md                  # Setup guide singkat
├── CHANGELOG.md              # Update history
├── .env.example              # Template environment variables
├── .gitignore                
├── package.json              
├── tsconfig.json             
├── next.config.js            
├── tailwind.config.ts        
├── src/
│   ├── app/                  # Next.js App Router
│   ├── components/           # React components
│   ├── lib/                  # Utilities & helpers
│   └── styles/               # Global styles
├── public/                   # Static assets
├── supabase/
│   ├── migrations/           # Database migrations
│   └── seed.sql              # Sample data
└── docs/                     # Extended documentation
```

### Langkah 3: Install Dependencies

Pilih salah satu package manager (kami recommend **pnpm** karena lebih cepat):

#### Menggunakan pnpm (Recommended):
```bash
# Install pnpm jika belum punya
npm install -g pnpm

# Install dependencies
pnpm install
```

#### Menggunakan npm:
```bash
npm install
```

#### Menggunakan yarn:
```bash
yarn install
```

> ⏱️ **Waktu install**: 3-5 menit tergantung koneksi internet

### Langkah 4: Setup Environment Variables

1. **Copy file** `.env.example` menjadi `.env.local`:
   ```bash
   # macOS/Linux
   cp .env.example .env.local
   
   # Windows (Command Prompt)
   copy .env.example .env.local
   ```

2. **Edit file** `.env.local`:
   ```bash
   # macOS
   open .env.local
   
   # Windows
   notepad .env.local
   
   # VS Code
   code .env.local
   ```

3. **Konfigurasi yang wajib diisi**:

```env
# =================
# APP CONFIGURATION
# =================
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="My SaaS App"

# =================
# SUPABASE
# =================
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# =================
# STRIPE (Optional - untuk payment)
# =================
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# =================
# EMAIL (Optional - untuk email notifications)
# =================
RESEND_API_KEY=re_xxxxx
EMAIL_FROM=noreply@yourdomain.com

# =================
# OAUTH (Optional - untuk social login)
# =================
GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxxxx
GITHUB_CLIENT_ID=xxxxx
GITHUB_CLIENT_SECRET=xxxxx
```

### Langkah 5: Setup Supabase Database

#### A. Buat Project di Supabase

1. Buka [supabase.com](https://supabase.com)
2. **Sign up** atau **Login**
3. Klik **"New Project"**
4. Isi detail project:
   - **Name**: My SaaS App
   - **Database Password**: [password yang kuat]
   - **Region**: Singapore (Southeast Asia)
5. Tunggu project selesai dibuat (~2 menit)

#### B. Dapatkan Credentials

1. Di dashboard Supabase, buka **Settings > API**
2. Copy credentials berikut ke `.env.local`:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon/Public Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY`

#### C. Run Database Migrations

Kita akan create tables yang dibutuhkan:

**Option 1: Via Supabase Dashboard (Mudah)**
1. Buka **SQL Editor** di dashboard Supabase
2. Copy isi file `supabase/migrations/001_initial_schema.sql`
3. Paste di SQL Editor
4. Klik **Run**
5. Ulangi untuk semua file migration

**Option 2: Via Supabase CLI (Recommended untuk development)**
```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link ke project Anda
supabase link --project-ref your-project-ref

# Run all migrations
supabase db push
```

#### D. Seed Sample Data (Optional)

Jika ingin data contoh untuk testing:

```bash
# Via CLI
supabase db reset --db-url your-connection-string

# ATAU via SQL Editor
# Copy-paste isi file supabase/seed.sql
```

### Langkah 6: Setup Stripe (Optional - Skip jika tidak butuh payment)

1. Buat akun di [stripe.com](https://stripe.com)
2. Aktifkan **Test Mode** (toggle di dashboard)
3. Buka **Developers > API Keys**
4. Copy keys ke `.env.local`:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

5. **Setup Webhook** (untuk production nanti):
   - Buka **Developers > Webhooks**
   - **Add endpoint**: `https://yourdomain.com/api/webhooks/stripe`
   - Select events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
   - Copy **Signing secret** → `STRIPE_WEBHOOK_SECRET`

6. **Create Products** di Stripe Dashboard:
   - Buka **Products**
   - **Add product** untuk setiap pricing tier
   - Copy **Price ID** dan update di `src/config/pricing.ts`

### Langkah 7: Run Development Server

Sekarang kita siap menjalankan aplikasi!

```bash
# Menggunakan npm
npm run dev

# Menggunakan pnpm
pnpm dev

# Menggunakan yarn
yarn dev
```

Tunggu hingga muncul pesan:
```
✓ Ready in 2.5s
○ Local:        http://localhost:3000
○ Network:      http://192.168.1.100:3000
```

### Langkah 8: Buka di Browser

1. Buka browser favorit Anda
2. Akses **http://localhost:3000**
3. Anda akan melihat landing page SaaS starter kit! 🎉

#### Pages yang Tersedia:
- `/` - Landing page
- `/pricing` - Pricing plans
- `/features` - Feature showcase
- `/docs` - Documentation
- `/auth/login` - Login page
- `/auth/signup` - Signup page
- `/dashboard` - User dashboard (require auth)
- `/admin` - Admin panel (require admin role)

---

## ⚙️ Konfigurasi Lanjutan

### 1. Kustomisasi Branding

#### Update Logo & Favicon
```bash
# Replace file-file ini dengan logo Anda:
public/logo.svg          # Logo utama
public/logo-dark.svg     # Logo untuk dark mode
public/favicon.ico       # Favicon
public/og-image.png      # Open Graph image untuk social share
```

#### Update Colors & Theme
Edit file `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        // Ganti dengan brand colors Anda
        primary: {
          DEFAULT: '#10b981', // Green
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#84cc16', // Lime
          foreground: '#000000',
        },
      },
    },
  },
}
```

#### Update Site Metadata
Edit file `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your SaaS Name',
  description: 'Your SaaS Description',
  keywords: ['saas', 'your', 'keywords'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Your SaaS Name',
    description: 'Your SaaS Description',
    url: 'https://yourdomain.com',
    siteName: 'Your SaaS Name',
    images: ['/og-image.png'],
  },
}
```

### 2. Kustomisasi Landing Page

Edit file `src/app/page.tsx`:

```tsx
// Update hero section
<HeroSection
  title="Your Catchy Headline"
  subtitle="Your compelling subtitle that explains the value"
  ctaText="Get Started Free"
  ctaLink="/auth/signup"
/>

// Update features
const features = [
  {
    title: 'Your Feature 1',
    description: 'Description of feature 1',
    icon: <Zap />,
  },
  // ... more features
]
```

### 3. Setup Email Notifications

Kami support 2 email providers:

#### Option A: Resend (Recommended)
1. Daftar di [resend.com](https://resend.com)
2. Verify domain Anda
3. Create API key
4. Add ke `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxx
   EMAIL_FROM=noreply@yourdomain.com
   ```

#### Option B: SendGrid
1. Daftar di [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Update config di `src/lib/email.ts`

### 4. Setup OAuth Providers

#### Google OAuth
1. Buka [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable **Google+ API**
4. Create **OAuth 2.0 Client ID**:
   - **Application type**: Web application
   - **Authorized redirect URIs**: 
     - `http://localhost:3000/api/auth/callback/google`
     - `https://yourdomain.com/api/auth/callback/google`
5. Copy **Client ID** dan **Client Secret** ke `.env.local`

#### GitHub OAuth
1. Buka **GitHub Settings > Developer settings > OAuth Apps**
2. **New OAuth App**:
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
3. Copy **Client ID** dan generate **Client Secret**
4. Add ke `.env.local`

#### Enable di Supabase
1. Buka **Authentication > Providers** di Supabase Dashboard
2. Enable **Google** dan **GitHub**
3. Paste Client ID dan Secret dari step sebelumnya

### 5. Setup Analytics

#### Google Analytics
Edit `src/app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

#### Umami Analytics (Privacy-friendly alternative)
```env
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxxx
NEXT_PUBLIC_UMAMI_URL=https://analytics.yourdomain.com
```

---

## 🚢 Deploy ke Production

### Option 1: Vercel (Recommended untuk Next.js)

1. **Push ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-saas.git
   git push -u origin main
   ```

2. **Deploy di Vercel**:
   - Buka [vercel.com](https://vercel.com)
   - **Import Project** dari GitHub
   - Vercel akan auto-detect Next.js
   - **Add environment variables** dari `.env.local`
   - Click **Deploy**

3. **Setup Custom Domain**:
   - Di Vercel dashboard, buka **Settings > Domains**
   - Add domain Anda
   - Update DNS records sesuai instruksi

4. **Update Environment Variables**:
   - Buka **Settings > Environment Variables**
   - Update `NEXT_PUBLIC_APP_URL` dengan domain production
   - Update Stripe Webhook URL
   - Update OAuth redirect URLs

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Option 3: VPS (Docker)

File `Dockerfile` sudah included:

```bash
# Build image
docker build -t my-saas .

# Run container
docker run -p 3000:3000 --env-file .env.local my-saas
```

### Post-Deployment Checklist

- [ ] Update `.env` production values
- [ ] Configure custom domain
- [ ] Setup SSL certificate (auto di Vercel/Netlify)
- [ ] Test authentication flow
- [ ] Test payment flow dengan Stripe test cards
- [ ] Setup monitoring (Sentry, LogRocket)
- [ ] Configure backup strategy untuk database
- [ ] Setup error monitoring
- [ ] Test email notifications
- [ ] Update OAuth redirect URLs ke production domain

---

## 🔧 Troubleshooting

### Problem 1: "Module not found" Error

**Gejala:**
```
Error: Cannot find module 'xxx'
```

**Solusi:**
```bash
# Clear cache dan reinstall
rm -rf node_modules .next
npm cache clean --force
npm install

# Restart dev server
npm run dev
```

### Problem 2: Supabase Connection Error

**Gejala:**
- "Invalid API key"
- "Connection refused"

**Solusi:**
1. Double-check credentials di `.env.local`
2. Pastikan tidak ada trailing spaces
3. Restart dev server setelah update env
4. Check Supabase project status (might be paused)

### Problem 3: Stripe Webhook Fails in Local

**Gejala:**
- Payment success tapi tidak tercatat di database

**Solusi:**
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe  # macOS
# atau download dari stripe.com/docs/stripe-cli

# Login
stripe login

# Forward webhooks ke local
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Copy webhook signing secret ke .env.local
```

### Problem 4: Build Error di Production

**Gejala:**
```
Error: Page not found
```

**Solusi:**
1. Check `.env` variables di production
2. Pastikan semua required env vars sudah diset
3. Check build logs untuk error spesifik
4. Test build locally:
   ```bash
   npm run build
   npm run start
   ```

### Problem 5: OAuth Redirect Error

**Gejala:**
- "Redirect URI mismatch"

**Solusi:**
1. Pastikan redirect URLs di Google/GitHub OAuth settings sudah benar
2. Check format URL (http vs https, dengan/tanpa trailing slash)
3. Di Supabase, check Authorization settings
4. Clear browser cookies dan try again

---

## 📚 FAQ

### Q: Apakah saya perlu pengalaman coding untuk menggunakan produk ini?
**A:** Ya, minimal Anda harus familiar dengan:
- ⚡ JavaScript/TypeScript basics
- ⚛️ React fundamentals
- 🎯 HTML & CSS
- 📦 npm/package managers
- 🌐 Basic web development concepts

**Level**: Intermediate

### Q: Apakah saya bisa menggunakan untuk proyek komersial?
**A:** **YA!** Lisensi sudah termasuk commercial use:
- ✅ Proyek client
- ✅ SaaS products
- ✅ Startup MVPs
- ✅ Commercial applications
- ❌ Tidak boleh resell sebagai template

### Q: Apakah dapat update gratis?
**A:** **YA!** Semua updates gratis selamanya:
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation updates
- 🔒 Security patches
- 
**Cara update:**
1. Download versi terbaru dari link yang sama
2. Compare changes dengan project Anda
3. Merge changes yang dibutuhkan

### Q: Berapa biaya running/maintenance?
**A:** Biaya infrastruktur (estimate per bulan):
- 💾 **Supabase**: $0 - $25 (Free tier cukup untuk start)
- 🚀 **Vercel**: $0 - $20 (Free tier support hobby projects)
- 💳 **Stripe**: 2.9% + $0.30 per transaction
- 📧 **Email Service**: $0 - $10 (Free tier: 100-1000 emails/hari)

**Total untuk startup**: $0 - $55/bulan

### Q: Apakah SEO-friendly?
**A:** Ya! Built-in SEO features:
- ✅ Server-side rendering
- ✅ Dynamic meta tags
- ✅ Sitemap generator
- ✅ robots.txt
- ✅ Structured data (JSON-LD)
- ✅ Optimized images
- ✅ Fast page load (<2s)

### Q: Apakah mobile responsive?
**A:** 100% responsive! Tested di:
- 📱 iPhone (Safari)
- 🤖 Android (Chrome)
- 💻 Desktop (Chrome, Firefox, Safari, Edge)
- 🖥️ Tablet (iPad, Android tablets)
- 
### Q: Support browser apa saja?
**A:**
- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari 14+
- ❌ Internet Explorer (not supported)

### Q: Bagaimana dengan security?
**A:** Built-in security features:
- 🔐 Row Level Security (RLS) di database
- 🔑 JWT authentication
- 🛡️ CSRF protection
- 🔒 XSS prevention
- 📝 Input sanitization
- 🚫 SQL injection protection
- 🔐 Encrypted passwords (bcrypt)
- 🌐 HTTPS enforced

### Q: Ada dokumentasi API?
**A:** Ya! Dokumentasi lengkap tersedia:
- 📖 `/docs/api` - API reference
- 🎯 Postman collection included
- 💻 Code examples untuk setiap endpoint
- 🔍 Interactive API tester

### Q: Bisa digunakan untuk mobile app?
**A:** Template ini untuk **web app**, tapi bisa:
- 📱 Buat Progressive Web App (PWA)
- 🔌 Consume API dari React Native/Flutter
- 📦 Export komponen untuk mobile

### Q: Ada limit user/traffic?
**A:** Tidak ada limit dari template. Tergantung hosting:
- **Vercel Free**: 100GB bandwidth/bulan
- **Supabase Free**: 500MB database, 1GB file storage, 2GB bandwidth
- Scale up kapan saja dengan upgrade tier

---

## 🎓 Resources & Next Steps

### 📚 Learn More
- 📘 [Next.js Documentation](https://nextjs.org/docs)
- 📗 [React Documentation](https://react.dev)
- 📕 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- 📙 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 📓 [Supabase Docs](https://supabase.com/docs)

### 🎥 Video Tutorials
- 🎬 Setup & Installation (coming soon)
- 🎬 Customization Guide (coming soon)
- 🎬 Deployment Tutorial (coming soon)
- 🎬 Stripe Integration Deep Dive (coming soon)

### 💬 Community & Support
- 💬 **Discord Community**: Coming soon
- 📧 **Email Support**: support@yourdomain.com
- 📱 **WhatsApp**: +62-xxx-xxxx-xxxx
- 🐦 **Twitter**: @yourhandle

### 🛠️ Useful Tools
- 🎨 Figma Design Files (coming soon)
- 💻 VS Code Extensions
- 📦 Component Library
- 🎯 Deployment Checklist

---

## 🙏 Terima Kasih!

Terima kasih telah memilih **Next.js SaaS Starter Kit**!

🌟 **Bantu kami dengan:**
- ⭐ Star produk kami
- 📝 Tulis review
- 🔗 Share ke developer lain
- 💬 Join community Discord

**We'd love to see what you build!** Tag kami @yourhandle saat launch aplikasi Anda! 🚀

---

## 📞 Need Help?

**Support Hours:**
- Senin - Jumat: 09:00 - 18:00 WIB
- Sabtu: 10:00 - 14:00 WIB

**Contact:**
- 📧 support@yourdomain.com
- 💬 WhatsApp: +62-xxx-xxxx-xxxx
- 🌐 Documentation: docs.yourdomain.com

**Response Time:**
- Email: 24-48 jam
- WhatsApp (urgent): 2-4 jam

---

### 🚀 Happy Building!

Made with ❤️ by [Your Name/Company]

© 2024 All rights reserved.

</div>
