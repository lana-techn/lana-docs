---
title: Panduan Setup PHP - Dari Template Hingga Production Deployment
description: Tutorial lengkap setup PHP website dari download template, konfigurasi database, development hingga deployment ke server production
navigation:
  icon: i-lucide-file-text
---

# 📄 Panduan Setup PHP - Dari Template Hingga Production Deployment

Panduan komprehensif untuk setup PHP website/aplikasi, dari template hingga siap production di server.

## 1. Persiapan & Requirements

### Kebutuhan Sistem
- **PHP** 7.4+ (7.4, 8.0, 8.1, 8.2)
- **Web Server**: Apache atau Nginx
- **Database**: MySQL 5.7+, PostgreSQL, atau MariaDB
- **Text Editor**: VS Code, PHPStorm, atau Sublime
- **FTP/SSH Client**: FileZilla, Cyberduck, atau Terminal

### Local Development Stack
- **Windows**: XAMPP, WAMP, atau Docker
- **macOS**: MAMP, Laravel Valet, atau Docker
- **Linux**: Apache + PHP + MySQL (manual) atau Docker

## 2. Install Local Development Environment

### Windows - XAMPP
```bash
# 1. Download XAMPP dari https://www.apachefriends.org
# 2. Install dengan default settings
# 3. Start Apache & MySQL dari XAMPP Control Panel
# 4. Akses http://localhost
```

### macOS - MAMP
```bash
# 1. Download MAMP dari https://www.mamp.info
# 2. Install aplikasi
# 3. Klik Start Servers
# 4. Akses http://localhost:8888
```

### Linux - Manual Setup
```bash
# Install Apache
sudo apt-get update
sudo apt-get install apache2

# Install PHP
sudo apt-get install php php-cli php-mysql php-curl php-gd php-mbstring

# Install MySQL
sudo apt-get install mysql-server

# Start services
sudo systemctl start apache2
sudo systemctl start mysql
```

### Docker (Recommended)
```yaml
# File: docker-compose.yml
version: '3.8'
services:
  php:
    image: php:8.1-apache
    ports:
      - "80:80"
    volumes:
      - ./:/var/www/html
    environment:
      DB_HOST: db
      DB_USER: root
      DB_PASSWORD: password
      DB_NAME: phpdb

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: phpdb
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

```bash
docker-compose up -d
```

## 3. Memilih Template PHP

### Opsi A: Download Template Gratis

**1. PHPFOX, PHP Scripts**
- [phpfox.com](https://www.phpfox.com) - Social platform
- [nulled.io](https://www.nulled.io) - Berbagai template PHP

**2. Marketplace Premium**
- [codecanyon.net](https://codecanyon.net) - Template PHP
- [themeforest.net](https://themeforest.net) - Website templates
- [envato.com](https://envato.com)

**3. GitHub**
- Search "PHP template" di [github.com](https://github.com)
- Clone repository: `git clone repo-url`

**4. CMS Populer** (jika ingin pakai CMS)
- **WordPress** - Blogging & CMS
- **Joomla** - Enterprise CMS
- **Drupal** - Flexible CMS

### Opsi B: Framework PHP Modern
- **Laravel** - Full framework (sudah ada di template sebelumnya)
- **Slim** - Micro framework untuk API
- **Symfony** - Enterprise framework

## 4. Setup Template PHP yang Didownload

### Step 1: Extract & Folder Preparation
```bash
# Extract template
unzip php-template.zip

# Copy ke folder web server
# Windows XAMPP: C:\xampp\htdocs\project
# macOS MAMP: /Applications/MAMP/htdocs/project
# Linux: /var/www/html/project

# Set permissions (Linux/Mac)
chmod -R 755 .
chmod -R 777 uploads storage cache
```

### Step 2: Folder Structure untuk PHP Website
```
project/
├── index.php                # Entry point
├── config.php               # Configuration
│
├── public/
│   ├── index.php           # Public entry
│   ├── .htaccess           # Apache routing
│   ├── css/
│   ├── js/
│   └── images/
│
├── app/
│   ├── controllers/        # Business logic
│   ├── models/             # Database models
│   ├── views/              # View templates
│   └── helpers/            # Helper functions
│
├── database/
│   ├── config.php          # Database connection
│   ├── migrations/         # Schema files
│   └── seeds/              # Sample data
│
├── includes/
│   ├── header.php
│   ├── footer.php
│   └── sidebar.php
│
├── admin/                  # Admin panel
│   ├── index.php
│   ├── css/
│   └── js/
│
├── uploads/                # User uploads
├── logs/                   # Error logs
│
├── .htaccess               # URL rewriting
├── config.php              # Main config
└── README.md
```

### Step 3: Database Connection Configuration
Create `database/config.php` atau edit yang sudah ada:

```php
<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'project_db');

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset
$conn->set_charset("utf8");
?>
```

### Step 4: Create Database & Tables
```bash
# Login ke MySQL
mysql -u root -p

# Buat database
CREATE DATABASE project_db;
USE project_db;

# Buat table (contoh users table)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# Insert sample data
INSERT INTO users (username, email, password) VALUES
('admin', 'admin@example.com', MD5('password123'));

EXIT;
```

Atau jalankan file SQL jika template sudah punya:
```bash
mysql -u root -p project_db < database/schema.sql
```

## 5. File Struktur Dasar

### index.php (Entry Point)
```php
<?php
// index.php
session_start();

// Include configuration
require_once 'database/config.php';
require_once 'app/helpers/functions.php';

// Determine page
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

// Security: Sanitize input
$page = preg_replace('/[^a-zA-Z0-9_]/', '', $page);

// Check if page exists
if (file_exists("app/views/{$page}.php")) {
    require "includes/header.php";
    require "app/views/{$page}.php";
    require "includes/footer.php";
} else {
    require "includes/header.php";
    require "app/views/404.php";
    require "includes/footer.php";
}
?>
```

### includes/header.php
```php
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title : 'Website'; ?></title>
    <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php?page=home">Home</a></li>
                <li><a href="index.php?page=about">About</a></li>
                <li><a href="index.php?page=services">Services</a></li>
                <li><a href="index.php?page=contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
```

### includes/footer.php
```php
    </main>

    <footer>
        <p>&copy; <?php echo date('Y'); ?> Website Saya</p>
    </footer>

    <script src="public/js/main.js"></script>
</body>
</html>
```

## 6. Database Operations

### Connect & Query Data
```php
<?php
require 'database/config.php';

// SELECT - Get data
$query = "SELECT * FROM users";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row['id'] . " - Name: " . $row['username'];
    }
} else {
    echo "No results found";
}

// INSERT - Add data
$username = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$password = password_hash($_POST['password'] ?? '', PASSWORD_DEFAULT);

if (!empty($username) && !empty($email) && !empty($password)) {
    $insert_query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($insert_query);
    $stmt->bind_param("sss", $username, $email, $password);
    
    if ($stmt->execute()) {
        echo "User created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

// UPDATE - Edit data
$id = $_POST['id'] ?? 0;
$username = $_POST['username'] ?? '';

if ($id > 0) {
    $update_query = "UPDATE users SET username = ? WHERE id = ?";
    $stmt = $conn->prepare($update_query);
    $stmt->bind_param("si", $username, $id);
    
    if ($stmt->execute()) {
        echo "User updated";
    }
    $stmt->close();
}

// DELETE - Remove data
$id = $_GET['id'] ?? 0;
if ($id > 0) {
    $delete_query = "DELETE FROM users WHERE id = ?";
    $stmt = $conn->prepare($delete_query);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo "User deleted";
    }
    $stmt->close();
}
?>
```

## 7. Form Handling & Validation

### Form dengan Validation
```php
<?php
// app/controllers/form.php

$errors = [];
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message'] ?? '');

    // Validate
    if (empty($name)) $errors[] = "Nama wajib diisi";
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email tidak valid";
    }
    if (empty($message)) $errors[] = "Pesan wajib diisi";

    // Process jika valid
    if (empty($errors)) {
        // Save to database atau kirim email
        $insert = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insert);
        $stmt->bind_param("sss", $name, $email, $message);
        
        if ($stmt->execute()) {
            $success = true;
        }
        $stmt->close();
    }
}
?>

<!-- View -->
<?php if ($success): ?>
    <div class="alert success">Pesan berhasil dikirim!</div>
<?php endif; ?>

<?php if (!empty($errors)): ?>
    <div class="alert error">
        <?php foreach ($errors as $error): ?>
            <p><?php echo $error; ?></p>
        <?php endforeach; ?>
    </div>
<?php endif; ?>

<form method="POST">
    <input type="text" name="name" placeholder="Nama Anda" value="<?php echo $name ?? ''; ?>">
    <input type="email" name="email" placeholder="Email" value="<?php echo $email ?? ''; ?>">
    <textarea name="message"><?php echo $message ?? ''; ?></textarea>
    <button type="submit">Kirim</button>
</form>
```

## 8. Session & Authentication

### User Login
```php
<?php
// app/controllers/login.php

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!empty($username) && !empty($password)) {
        // Check database
        $query = "SELECT id, username, password FROM users WHERE username = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            
            // Verify password
            if (password_verify($password, $user['password'])) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                header("Location: dashboard.php");
                exit;
            }
        }
        $error = "Username atau password salah";
    }
}
?>
```

### Protect Pages
```php
<?php
// Check if user logged in
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
?>
```

### Logout
```php
<?php
session_start();
session_destroy();
header("Location: index.php");
exit;
?>
```

## 9. RESTful API dengan PHP

### API Endpoints
```php
<?php
// api/users.php
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

require_once '../database/config.php';

switch ($method) {
    case 'GET':
        if ($id) {
            // GET single user
            $query = "SELECT * FROM users WHERE id = ?";
            $stmt = $conn->prepare($query);
            $stmt->bind_param("i", $id);
        } else {
            // GET all users
            $query = "SELECT * FROM users";
            $stmt = $conn->prepare($query);
        }
        
        $stmt->execute();
        $result = $stmt->get_result();
        $data = $result->fetch_all(MYSQLI_ASSOC);
        
        echo json_encode(['status' => 'success', 'data' => $data]);
        break;

    case 'POST':
        // CREATE user
        $data = json_decode(file_get_contents('php://input'), true);
        $query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("sss", $data['username'], $data['email'], 
                         password_hash($data['password'], PASSWORD_DEFAULT));
        
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'id' => $conn->insert_id]);
        } else {
            echo json_encode(['status' => 'error', 'message' => $stmt->error]);
        }
        break;

    case 'PUT':
        // UPDATE user
        $data = json_decode(file_get_contents('php://input'), true);
        $query = "UPDATE users SET username = ? WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("si", $data['username'], $id);
        
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => $stmt->error]);
        }
        break;

    case 'DELETE':
        // DELETE user
        $query = "DELETE FROM users WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => $stmt->error]);
        }
        break;
}
?>
```

## 10. Security Best Practices

### Prevent SQL Injection
```php
// ✗ TIDAK AMAN - SQL Injection risk
$query = "SELECT * FROM users WHERE username = '" . $_POST['username'] . "'";

// ✓ AMAN - Prepared statements
$query = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $_POST['username']);
$stmt->execute();
```

### Prevent XSS (Cross-Site Scripting)
```php
// ✗ TIDAK AMAN
echo "Welcome " . $_GET['name'];

// ✓ AMAN - Escape output
echo "Welcome " . htmlspecialchars($_GET['name']);
```

### Prevent CSRF (Cross-Site Request Forgery)
```php
// Generate token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Add to form
echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';

// Verify token
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die("CSRF token mismatch");
}
```

### Secure Password Storage
```php
// Hash password
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

// Verify password
if (password_verify($_POST['password'], $hashed_password)) {
    // Password correct
}
```

## 11. Deployment ke Production

### Deploy ke Shared Hosting (cPanel)
```bash
# 1. FTP ke server
# 2. Upload semua files ke public_html
# 3. Upload database dump via phpMyAdmin
# 4. Edit config.php dengan database credentials production
# 5. Set folder permissions: chmod 755 folders, 644 files
# 6. Website live
```

### Deploy ke VPS
```bash
# SSH ke server
ssh root@server_ip

# Install dependencies
apt-get update
apt-get install apache2 php-8.1 php-mysql mysql-server

# Clone repository
cd /var/www
git clone your-repo-url project

# Setup database
mysql -u root -p < project/database/schema.sql

# Set permissions
chmod -R 755 project/
chmod -R 777 project/uploads project/cache project/logs

# Enable mod_rewrite untuk .htaccess
a2enmod rewrite
systemctl restart apache2
```

### .htaccess untuk Clean URLs
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Remove .php extension
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^([a-zA-Z0-9_-]+)/?$ index.php?page=$1 [QSA,L]
</IfModule>
```

## 12. Performance Optimization

### Enable Caching
```php
<?php
// Simple file-based caching
$cache_file = 'cache/' . md5($_SERVER['REQUEST_URI']) . '.cache';
$cache_time = 3600; // 1 hour

if (file_exists($cache_file) && time() - filemtime($cache_file) < $cache_time) {
    readfile($cache_file);
    exit;
}

// Generate content
ob_start();
// Your content here

// Save to cache
$content = ob_get_clean();
file_put_contents($cache_file, $content);
echo $content;
?>
```

### Database Optimization
```php
// Add indexes
CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);
```

## 13. Troubleshooting

### "Fatal error: Call to undefined function"
- Check if file included correctly
- Verify function name spelling

### "MySQL connection failed"
- Verify database credentials in config.php
- Check if MySQL server running
- Verify database exists

### Session not working
- Check `session_start()` called at top
- Verify cookies enabled
- Check tmp folder permissions

### 404 errors on .htaccess
- Check mod_rewrite enabled: `a2enmod rewrite`
- Verify .htaccess syntax
- Restart Apache: `systemctl restart apache2`

---

**Resources:**
- [PHP.net Official](https://www.php.net)
- [MySQL Documentation](https://dev.mysql.com/doc)
- [OWASP Security Guidelines](https://owasp.org)
