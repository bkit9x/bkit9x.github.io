---
title: "Laravel Artisan Cheat Sheet"
date: 2025-12-04T23:10:16+07:00
draft: false
summary: "Bảng tổng hợp các lệnh **Artisan** thường dùng trong Laravel, giúp bạn dễ dàng tra cứu và copy nhanh khi cần..."
featured_image: "https://codecungtui.github.io/images/tao-blog-don-gian-voi-hugo-va-github/cover.jpg"
categories:
  - Laravel
tags:
  - CheatSheet
toc: false
---
# 📚 Tổng hợp đầy đủ các lệnh Artisan trong Laravel

Laravel cung cấp công cụ dòng lệnh **Artisan** để hỗ trợ phát triển, quản lý và bảo trì ứng dụng. Dưới đây là danh sách các lệnh Artisan thường dùng, được phân loại để dễ tra cứu và copy nhanh khi cần.

## 🗄️ Cache & Optimize
```bash
php artisan cache:clear       # Xóa cache ứng dụng
php artisan config:clear      # Xóa cache cấu hình
php artisan route:clear       # Xóa cache route
php artisan view:clear        # Xóa cache view
php artisan optimize:clear    # Xóa tất cả cache (tổng hợp)

php artisan config:cache      # Tạo cache cho cấu hình
php artisan route:cache       # Tạo cache cho route
php artisan view:cache        # Tạo cache cho view
php artisan optimize          # Tối ưu ứng dụng (cache config, route, view)
```

---

## 🛠️ Migration & Database
```bash
php artisan migrate                   # Chạy migration
php artisan migrate:rollback          # Rollback migration gần nhất
php artisan migrate:reset             # Rollback toàn bộ migration
php artisan migrate:refresh           # Reset và chạy lại toàn bộ migration
php artisan migrate:fresh             # Xóa toàn bộ bảng và chạy lại migration
php artisan migrate:status            # Kiểm tra trạng thái migration

php artisan db:seed                   # Chạy seeder
php artisan db:seed --class=UserSeeder # Chạy seeder cụ thể
php artisan migrate --seed            # Chạy migration kèm seeder
```

---

## 📂 File & Storage
```bash
php artisan storage:link     # Tạo symbolic link từ storage/app/public → public/storage
```

---

## 🧩 Make (Tạo file nhanh)
```bash
php artisan make:controller MyController
php artisan make:model MyModel
php artisan make:migration create_users_table
php artisan make:seeder UserSeeder
php artisan make:factory UserFactory
php artisan make:middleware MyMiddleware
php artisan make:command MyCommand
php artisan make:job MyJob
php artisan make:event MyEvent
php artisan make:listener MyListener
php artisan make:policy MyPolicy
php artisan make:request MyRequest
php artisan make:resource MyResource
php artisan make:test MyTest
```

---

## 🖥️ Server & Queue
```bash
php artisan serve             # Chạy server phát triển (http://127.0.0.1:8000)
php artisan queue:work        # Chạy worker xử lý queue
php artisan queue:listen      # Lắng nghe queue
php artisan queue:restart     # Restart queue worker
php artisan schedule:run      # Chạy các tác vụ theo lịch (scheduler)
```

---

## 🔍 Debug & Info
```bash
php artisan tinker            # Mở REPL để thử code trực tiếp
php artisan env               # Hiển thị môi trường hiện tại (.env)
php artisan inspire           # Hiển thị câu quote ngẫu nhiên 😄
php artisan down              # Đưa ứng dụng vào chế độ bảo trì
php artisan up                # Thoát chế độ bảo trì
```

---

## 📌 Tổng hợp lệnh nhanh (copy-paste)
```bash
# Cache & Optimize
php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan view:clear && php artisan optimize:clear

# Migration & Seeder
php artisan migrate:fresh --seed

# Storage link
php artisan storage:link

# Server
php artisan serve
```

---

## 🎯 Kết luận
- **Artisan** là công cụ mạnh mẽ giúp quản lý ứng dụng Laravel nhanh chóng.  
- Khi gặp lỗi cache hoặc permission, hãy ưu tiên chạy các lệnh `clear` và `storage:link`.  
- Khi deploy, thường dùng: `migrate`, `db:seed`, `config:cache`, `route:cache`, `view:cache`.

```

Bạn có muốn mình viết thêm một **cheat sheet ngắn gọn** (dạng bảng 2 cột: lệnh – tác dụng) để dễ nhìn hơn không?

# 📝 Laravel Artisan Cheat Sheet

Bảng tổng hợp các lệnh **Artisan** thường dùng trong Laravel, giúp bạn dễ dàng tra cứu và copy nhanh khi cần.

---

## 🔧 Cơ bản

| Lệnh | Tác dụng |
|------|-----------|
| `php artisan list` | Liệt kê tất cả các lệnh Artisan |
| `php artisan help <command>` | Xem chi tiết hướng dẫn cho một lệnh |

---

## 🗄️ Cache & Optimize

| Lệnh | Tác dụng |
|------|-----------|
| `php artisan cache:clear` | Xóa cache ứng dụng |
| `php artisan config:clear` | Xóa cache cấu hình |
| `php artisan route:clear` | Xóa cache route |
| `php artisan view:clear` | Xóa cache view |
| `php artisan optimize:clear` | Xóa tất cả cache |
| `php artisan config:cache` | Tạo cache cho cấu hình |
| `php artisan route:cache` | Tạo cache cho route |
| `php artisan view:cache` | Tạo cache cho view |
| `php artisan optimize` | Tối ưu ứng dụng (cache config, route, view) |

---

## 🛠️ Migration & Database

| Lệnh | Tác dụng |
|------|-----------|
| `php artisan migrate` | Chạy migration |
| `php artisan migrate:rollback` | Rollback migration gần nhất |
| `php artisan migrate:reset` | Rollback toàn bộ migration |
| `php artisan migrate:refresh` | Reset và chạy lại toàn bộ migration |
| `php artisan migrate:fresh` | Xóa toàn bộ bảng và chạy lại migration |
| `php artisan migrate:status` | Kiểm tra trạng thái migration |
| `php artisan db:seed` | Chạy seeder |
| `php artisan db:seed --class=UserSeeder` | Chạy seeder cụ thể |
| `php artisan migrate --seed` | Chạy migration kèm seeder |

---

## 📂 File & Storage

| Lệnh | Tác dụng |
|------|-----------|
| `php artisan storage:link` | Tạo symbolic link từ storage/app/public → public/storage |

---

## 🧩 Make (Tạo file nhanh)

| Lệnh | Tác dụng |
|------|-----------|
| `php artisan make:controller MyController` | Tạo controller |
| `php artisan make:model MyModel` | Tạo model |
| `php artisan make:migration create_users_table` | Tạo migration |
| `php artisan make:seeder UserSeeder` | Tạo seeder |
| `php artisan make:factory UserFactory` | Tạo factory |
| `php artisan make:middleware MyMiddleware` | Tạo middleware |
| `php artisan make:command MyCommand` | Tạo command |
| `php artisan make:job MyJob` | Tạo job |
| `php artisan make:event MyEvent` | Tạo event |
| `php artisan make:listener MyListener` | Tạo listener |
| `php artisan make:policy MyPolicy` | Tạo policy |
| `php artisan make:request MyRequest` | Tạo form request |
| `php artisan make:resource MyResource` | Tạo API resource |
| `php artisan make:test MyTest` | Tạo test |

---

## 🖥️ Server & Queue

| Lệnh | Tác dụng |
|------|-----------|
| `php artisan serve` | Chạy server phát triển (http://127.0.0.1:8000) |
| `php artisan queue:work` | Chạy worker xử lý queue |
| `php artisan queue:listen` | Lắng nghe queue |
| `php artisan queue:restart` | Restart queue worker |
| `php artisan schedule:run` | Chạy các tác vụ theo lịch (scheduler) |

---

## 🔍 Debug & Info

| Lệnh | Tác dụng |
|------|-----------|
| `php artisan tinker` | Mở REPL để thử code trực tiếp |
| `php artisan env` | Hiển thị môi trường hiện tại (.env) |
| `php artisan inspire` | Hiển thị câu quote ngẫu nhiên 😄 |
| `php artisan down` | Đưa ứng dụng vào chế độ bảo trì |
| `php artisan up` | Thoát chế độ bảo trì |

---

## 🚀 Tổng hợp lệnh nhanh (copy-paste)

```bash
# Xóa toàn bộ cache
php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan view:clear && php artisan optimize:clear

# Reset database và chạy lại migration + seeder
php artisan migrate:fresh --seed

# Tạo storage link
php artisan storage:link

# Chạy server phát triển
php artisan serve


# Sửa quyền sở hữu toàn bộ project

```bash

sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache

# Cài đặt composer
composer install

# Xóa cache Laravel
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear
```
