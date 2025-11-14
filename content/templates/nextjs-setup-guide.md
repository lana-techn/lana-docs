---
title: Panduan Setup Next.js - Dari Template hingga Production Ready
description: Tutorial lengkap setup Next.js dari pemilihan template, instalasi, konfigurasi, hingga siap deploy ke production
navigation:
  icon: i-lucide-file-text
---

# 📄 Panduan Setup Next.js - Dari Template hingga Production Ready

Panduan komprehensif untuk setup Next.js dengan template, dari download hingga production deployment.

## 1. Prasyarat & Persiapan

### Requirements
- **Node.js** 18.17 atau lebih baru
- **npm** / **yarn** / **pnpm** / **bun**
- **Text Editor** (VS Code recommended)
- **Git** untuk version control

### Verifikasi
```bash
node --version
npm --version
git --version
```

## 2. Memilih Cara Setup Next.js

### Opsi A: Create-Next-App (Official)
```bash
# Create project baru
npx create-next-app@latest my-nextjs-app

# Pilih opsi saat install:
# ✔ Would you like to use TypeScript? › No / Yes
# ✔ Would you like to use ESLint? › Yes / No
# ✔ Would you like to use Tailwind CSS? › Yes / No
# ✔ Would you like to use `src/` directory? › Yes / No
# ✔ Would you like to use App Router? › Yes / No
# ✔ Would you like to customize the import alias? › No / Yes

# Masuk folder
cd my-nextjs-app

# Jalankan development server
npm run dev
```

### Opsi B: Download Template Next.js Premium

#### Marketplace Populer:

**1. Envato Elements / ThemeForest**
- Cari template Next.js di [themeforest.net](https://themeforest.net)
- Filter: "Next.js" atau "React Next"
- Purchase atau subscribe Envato Elements
- Download file

**2. Vercel Templates**
- Kunjungi [vercel.com/templates](https://vercel.com/templates)
- Pilih template Next.js
- Klik "Deploy" untuk otomatis
- Atau "View Source Code" untuk clone

**3. Creative Tim Next.js
- [creativetim.com](https://creativetim.com)
- Filter by "Next.js"
- Download template pilihan

**4. UI Framework Templates**
- [Nextui.org](https://nextui.org) - Free Next.js templates
- [Shadcn/ui](https://ui.shadcn.com) - Component library
- [Next-Starter Templates](https://github.com/vercel/next.js/tree/canary/examples)

## 3. Setup Next.js Template yang Didownload

### Step 1: Extract & Initial Setup
```bash
# Extract template
unzip template-nextjs.zip
cd template-nextjs

# Lihat package.json
cat package.json
```

### Step 2: Install Dependencies
```bash
# Dengan npm
npm install

# Atau dengan yarn
yarn install

# Atau dengan pnpm
pnpm install
```

**Troubleshoot Installation:**
```bash
# Jika ada conflict
npm install --legacy-peer-deps

# Clear cache jika perlu
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Step 3: Environment Configuration
```bash
# Buat .env.local (Next.js file untuk environment variables)
cp .env.example .env.local
# atau
touch .env.local
```

**Contoh `.env.local`:**
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=My App
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
API_SECRET_KEY=your_secret_key_here
```

**Catatan:**
- `NEXT_PUBLIC_` = accessible di client-side
- Tanpa prefix = server-side only

### Step 4: Build Configuration (jika perlu)
Edit `next.config.js` jika diperlukan:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
  
  // Redirect & Rewrite
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
    ]
  },

  // Headers
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

## 4. Struktur Folder Next.js (App Router)

```
app/
├── layout.jsx           # Root layout
├── page.jsx             # Home page (/)
├── globals.css          # Global styles
├── api/
│   ├── route.js         # API endpoint
│   └── products/
│       └── route.js     # GET /api/products
├── dashboard/
│   ├── layout.jsx       # Dashboard layout
│   └── page.jsx         # /dashboard page
├── blog/
│   ├── [slug]/
│   │   └── page.jsx     # Dynamic route /blog/[slug]
│   └── page.jsx         # /blog
└── (auth)/
    ├── login/
    │   └── page.jsx
    └── register/
        └── page.jsx

public/
├── logo.png
└── images/

components/
├── Header.jsx
├── Footer.jsx
├── Navigation.jsx
└── common/
    └── Button.jsx

lib/
├── db.js
├── auth.js
└── utils.js

styles/
├── globals.css
└── variables.css

.env.local              # Local environment variables
.env.production         # Production environment
next.config.js         # Next.js configuration
tsconfig.json          # TypeScript config (jika TS)
package.json
```

## 5. Menjalankan Project

### Development Server
```bash
npm run dev
# Aplikasi berjalan di http://localhost:3000
```

### Production Build & Test
```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Lint & Format
```bash
# Check lint
npm run lint

# Format code
npm run format
```

## 6. Konfigurasi Penting untuk Production

### Database Setup (Contoh dengan Prisma)
```bash
npm install @prisma/client
npm install -D prisma

# Initialize Prisma
npx prisma init
```

Edit `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id    Int     @id @default(autoincrement())
  title String
  content String?
  author User @relation(fields: [authorId], references: [id])
  authorId Int
}
```

```bash
# Push schema ke database
npx prisma migrate dev --name init
```

### Authentication Setup (NextAuth.js)
```bash
npm install next-auth
npx auth secret
```

`app/api/auth/[...nextauth]/route.js`:
```javascript
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

### Image Optimization
```jsx
import Image from 'next/image'

export default function Home() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
    />
  )
}
```

## 7. API Routes & Server Actions

### API Route Example
`app/api/posts/route.js`:
```javascript
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ posts: [] })
}

export async function POST(request) {
  const data = await request.json()
  // Handle POST
  return NextResponse.json({ created: true }, { status: 201 })
}
```

### Server Action Example
```jsx
'use server'

export async function addPost(formData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Save to database
  return { success: true }
}
```

## 8. Performance Optimization

### Image Optimization
```javascript
// next.config.js
images: {
  formats: ['image/avif', 'image/webp'],
  minimumCacheTTL: 60,
}
```

### Code Splitting
```jsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { loading: () => <p>Loading...</p> }
)
```

### Metadata untuk SEO
```jsx
export const metadata = {
  title: 'Home Page',
  description: 'Welcome to my Next.js app',
  openGraph: {
    title: 'Home Page',
    description: 'Welcome to my Next.js app',
    url: 'https://example.com',
    type: 'website',
  },
}

export default function Home() {
  return <h1>Welcome</h1>
}
```

## 9. Deployment

### Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
vercel env add API_SECRET_KEY
```

### Deploy ke Netlify
```bash
npm run build
# Upload folder `.next` dan `public` ke Netlify
```

### Deploy ke Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Deploy ke AWS / DigitalOcean / VPS
```bash
# Build
npm run build

# Upload dengan SCP atau Git
scp -r .next/ username@server:/var/www/nextjs/

# Di server, run dengan PM2
pm2 start "npm start" --name nextjs-app
```

## 10. Troubleshooting

### Error: "Module not found"
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 sudah digunakan
```bash
# Ganti port
PORT=3001 npm run dev
```

### Build error dengan TypeScript
```bash
# Jika menggunakan TypeScript
npm install -D typescript @types/node @types/react

# Generate tsconfig
npx tsc --init
```

### Database connection error
```bash
# Verify connection string di .env.local
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Test connection
npx prisma db push
```

## 11. Best Practices

✅ **Gunakan:**
- App Router (lebih baru & lebih baik)
- Server Components sebagai default
- Environment variables untuk config
- Image component untuk optimization
- Metadata untuk SEO

❌ **Hindari:**
- Pages Router untuk project baru
- Fetch data di client-side (gunakan Server Components)
- Hardcode sensitive data
- Large bundle sizes

## 12. Checklist Pre-Production

- [ ] `.env.local` file sudah setup
- [ ] Database sudah terhubung
- [ ] Authentication sudah berfungsi
- [ ] API endpoints sudah tested
- [ ] Images sudah optimized
- [ ] Metadata & SEO sudah configured
- [ ] Error handling sudah implemented
- [ ] Build test: `npm run build` berjalan sukses
- [ ] Performance check dengan Lighthouse
- [ ] Security: tidak ada secrets di repo

---

**Dokumentasi Resmi:** [nextjs.org](https://nextjs.org)
