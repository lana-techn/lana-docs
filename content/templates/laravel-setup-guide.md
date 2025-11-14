---
title: Panduan Setup Laravel - Dari Template hingga Ready Production
description: Tutorial lengkap setup Laravel dari download template, instalasi dependencies, database, hingga deployment ke server
navigation:
  icon: i-lucide-file-text
---

# 📄 Panduan Setup Laravel - Dari Template hingga Ready Production

Panduan komprehensif untuk setup framework Laravel, mulai dari template, instalasi, konfigurasi database, hingga production deployment.

## 1. Persiapan & Requirements

### Kebutuhan Sistem
- **PHP** 8.1+ (atau versi yang di-support Laravel)
- **Composer** (PHP Package Manager)
- **Database**: MySQL 5.7+, PostgreSQL, atau SQLite
- **Text Editor**: VS Code, PhpStorm, atau Sublime
- **Git** untuk version control

### Verifikasi Instalasi
```bash
# Cek PHP version
php --version

# Cek Composer
composer --version

# Cek MySQL/Database
mysql --version
```

### Install Requirements (jika belum)

**Windows:**
- Download PHP dari [windows.php.net](https://windows.php.net)
- Download Composer dari [getcomposer.org](https://getcomposer.org)
- Download MySQL dari [mysql.com](https://mysql.com)

**macOS:**
```bash
# Dengan Homebrew
brew install php
brew install composer
brew install mysql
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install php php-curl php-mbstring php-xml mysql-server
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

## 2. Memilih Cara Setup Laravel

### Opsi A: Laravel Installer (Paling Mudah)
```bash
# Install Laravel installer
composer global require laravel/installer

# Buat project baru
laravel new my-laravel-app

# Masuk folder
cd my-laravel-app

# Jalankan development server
php artisan serve
```

Server akan berjalan di `http://localhost:8000`

### Opsi B: Menggunakan Composer Directly
```bash
# Create project dari template resmi
composer create-project laravel/laravel my-laravel-app

cd my-laravel-app

php artisan serve
```

### Opsi C: Download Template Laravel Premium

#### Marketplace Populer:

**1. Envato Elements / CodeCanyon**
- Cari template Laravel di [codecanyon.net](https://codecanyon.net)
- Filter: "Laravel" atau "PHP"
- Download template pilihan
- Extract file

**2. Creative Tim Laravel Templates**
- Kunjungi [creativetim.com](https://creativetim.com)
- Filter by "Laravel"
- Download template

**3. GitHub Repositories**
- Search "Laravel template" di GitHub
- Clone dengan: `git clone repo-url`

**4. Marketplace Lokal**
- Envato Elements
- Themeforest
- CodeCanyon

## 3. Setup Laravel Template yang Didownload

### Step 1: Extract & Folder Setup
```bash
# Extract template
unzip laravel-template.zip
cd laravel-template

# Buat folder yang diperlukan (jika belum)
mkdir -p storage/logs
chmod -R 775 storage bootstrap/cache
```

### Step 2: Install Dependencies
```bash
# Install semua package via Composer
composer install

# Jika ada issue dengan dependencies
composer install --no-interaction --prefer-dist
```

### Step 3: Environment Configuration
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

**Edit `.env` file:**
```env
APP_NAME=MyApp
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_db
DB_USERNAME=root
DB_PASSWORD=your_password

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
```

### Step 4: Database Setup
```bash
# Create database (dari MySQL client)
mysql -u root -p
CREATE DATABASE laravel_db;
EXIT;

# Atau gunakan Laravel artisan
php artisan migrate:install

# Run migrations
php artisan migrate

# Seed database (jika ada seeders)
php artisan db:seed
```

### Step 5: Generate Assets (jika menggunakan Tailwind/Bootstrap)
```bash
# Install NPM dependencies
npm install

# Build assets
npm run dev

# Atau untuk production
npm run build
```

## 4. Struktur Folder Laravel

```
app/
├── Http/
│   ├── Controllers/     # Business logic
│   │   └── PostController.php
│   └── Middleware/      # Request middleware
├── Models/              # Database models
│   └── Post.php
├── Mail/                # Mailable classes
└── Jobs/                # Queueable jobs

database/
├── migrations/          # Database schema
│   └── 2024_01_01_create_posts_table.php
├── seeders/             # Database seeders
│   └── PostSeeder.php
└── factories/           # Model factories

resources/
├── views/               # Blade templates
│   ├── layouts/
│   │   └── app.blade.php
│   ├── posts/
│   │   ├── index.blade.php
│   │   └── show.blade.php
│   └── welcome.blade.php
├── css/
│   └── app.css
└── js/
    └── app.js

routes/
├── web.php              # Web routes
└── api.php              # API routes

config/
├── app.php              # App configuration
├── database.php         # Database config
├── mail.php             # Mail config
└── services.php         # External services

storage/
├── app/                 # File uploads
├── logs/                # Application logs
└── framework/           # Cache & sessions

tests/
├── Feature/             # Feature tests
├── Unit/                # Unit tests
└── TestCase.php

.env                     # Environment variables
.env.example             # Environment template
artisan                  # Command CLI
composer.json            # PHP dependencies
package.json             # Node dependencies
```

## 5. Menjalankan Project

### Development Server
```bash
# Terminal 1: Jalankan Laravel server
php artisan serve

# Terminal 2: Jalankan asset builder (jika ada)
npm run dev
```

Akses di `http://localhost:8000`

### Command Penting
```bash
# Database migrations
php artisan migrate
php artisan migrate:rollback
php artisan migrate:refresh

# Database seeding
php artisan db:seed

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Check routes
php artisan route:list

# Tinker (Laravel REPL)
php artisan tinker
```

## 6. Konfigurasi Penting untuk Production

### Buat Model & Migration
```bash
# Buat model dengan migration
php artisan make:model Post -m

# Atau dengan controller
php artisan make:model Post -mc
```

Edit `database/migrations/YYYY_MM_DD_create_posts_table.php`:
```php
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('content');
    $table->string('slug')->unique();
    $table->unsignedBigInteger('user_id');
    $table->foreign('user_id')->references('id')->on('users');
    $table->timestamps();
});
```

### Setup Authentication
```bash
# Install Laravel Breeze (simple auth)
composer require laravel/breeze --dev
php artisan breeze:install

# Atau gunakan Jetstream (lebih lengkap)
composer require laravel/jetstream
php artisan jetstream:install livewire
```

### Setup Email Configuration
Edit `.env`:
```env
MAIL_DRIVER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@example.com
```

### Setup Storage untuk Upload File
```bash
# Create storage link
php artisan storage:link

# Akses file dari storage/app/public
```

## 7. API Development

### Buat API Resource
```bash
php artisan make:resource PostResource
php artisan make:controller Api/PostController --api
```

**Routes (`routes/api.php`):**
```php
Route::apiResource('posts', PostController::class);
```

**Controller Example:**
```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return PostResource::collection(Post::paginate());
    }

    public function store(Request $request)
    {
        $post = Post::create($request->validated());
        return new PostResource($post);
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->validated());
        return new PostResource($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->noContent();
    }
}
```

## 8. Database & Relationships

### Model dengan Relationships
```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
```

### Eager Loading
```php
// Efficient queries
$users = User::with('posts')->get();

// Lazy loading (slower)
$users = User::all();
foreach ($users as $user) {
    $user->posts;  // N+1 problem
}
```

## 9. Testing

### Setup Testing
```bash
php artisan test
```

**Example Test (`tests/Feature/PostTest.php`):**
```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Post;

class PostTest extends TestCase
{
    public function test_can_get_posts()
    {
        $response = $this->get('/api/posts');
        $response->assertStatus(200);
    }

    public function test_can_create_post()
    {
        $response = $this->postJson('/api/posts', [
            'title' => 'Test Post',
            'content' => 'Test content'
        ]);
        $response->assertStatus(201);
    }
}
```

## 10. Deployment ke Production

### Persiapan Pre-Deployment
```bash
# Set production environment
# Edit .env: APP_ENV=production, APP_DEBUG=false

# Optimize untuk production
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Compile assets
npm run build
```

### Deploy ke Shared Hosting (cPanel)
1. Compress project: `zip -r laravel.zip . -x "node_modules/*" ".git/*"`
2. Upload via File Manager
3. Extract di folder public_html
4. SSH ke server:
```bash
cd public_html/laravel
composer install --no-dev
php artisan migrate --force
chmod -R 775 storage bootstrap/cache
```

### Deploy ke VPS (DigitalOcean, Linode, AWS)
```bash
# SSH ke server
ssh root@your_server_ip

# Install dependencies
sudo apt-get update
sudo apt-get install php-fpm php-mysql nginx mysql-server git composer

# Clone repo
cd /var/www
git clone your-repo-url laravel-app
cd laravel-app

# Setup
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

# Setup Nginx
# Create config file /etc/nginx/sites-available/laravel
# Start services
sudo systemctl start nginx
sudo systemctl start php8.1-fpm
sudo systemctl start mysql
```

### Deploy dengan Docker
```dockerfile
FROM php:8.1-fpm

WORKDIR /app

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . .

RUN composer install

EXPOSE 9000

CMD ["php-fpm"]
```

### Deploy dengan Forge (Automated)
1. Sign up di [forge.laravel.com](https://forge.laravel.com)
2. Connect server (DigitalOcean, Linode, AWS)
3. Create site dari Git repo
4. Forge akan handle deployment otomatis

## 11. Performance Optimization

### Caching
```php
// Cache query results
$posts = Cache::remember('posts', now()->addHour(), function () {
    return Post::all();
});
```

### Database Optimization
```php
// Eager load relations
Post::with('user', 'comments')->get();

// Chunk large queries
Post::chunk(100, function ($posts) {
    foreach ($posts as $post) {
        // Process
    }
});
```

### Asset Optimization
```bash
# Minify & optimize assets
npm run build

# Gzip compression di Nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

## 12. Troubleshooting

### "Class not found"
```bash
# Regenerate autoloader
composer dump-autoload
```

### Permission denied on storage
```bash
chmod -R 775 storage bootstrap/cache
```

### Database connection error
```bash
# Verify .env database config
# Test connection
php artisan tinker
DB::connection()->getPdo()
```

### Composer memory limit
```bash
php -d memory_limit=-1 composer install
```

## 13. Checklist Pre-Production

- [ ] `.env` configured dengan production values
- [ ] Database migrations sudah run
- [ ] APP_DEBUG = false
- [ ] APP_ENV = production
- [ ] Assets sudah di-build
- [ ] Storage link sudah di-create
- [ ] Permissions pada storage/bootstrap sudah 775
- [ ] Email config sudah setup
- [ ] Backup database sebelum production
- [ ] SSL certificate sudah installed
- [ ] Monitor logs secara berkala

---

**Dokumentasi Resmi:** [laravel.com](https://laravel.com/docs)
