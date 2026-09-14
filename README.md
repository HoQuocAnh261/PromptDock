# 🚀 PromptDock — Windows 11 Desktop PWA

> **PromptDock** là kho lưu trữ và quản lý Prompt AI (ChatGPT, Gemini, Claude, Grok, Midjourney...) chuẩn Desktop PWA theo ngôn ngữ thiết kế **Windows 11 Fluent Design (Mica & Acrylic)**. Ứng dụng hoạt động **100% offline**, không cần server, không phụ thuộc thư viện ngoài, sẵn sàng đóng gói **MSIX** bằng **PWABuilder** để đăng tải lên **Microsoft Store**.

---

## 🌟 Tính Năng Nổi Bật

| Tính năng | Chi tiết |
| :--- | :--- |
| 🪟 **Windows 11 Fluent** | Hiệu ứng Mica blur đa lớp, Acrylic translucent, bo góc 18px, shadow mềm, chuyển động 180ms cubic-bezier. |
| ⚡ **1-Click Copy** | Nút lớn `📋 Copy Prompt` hoặc phím tắt `Enter` sao chép ngay vào clipboard + hiển thị Toast notification. |
| 🔍 **Realtime Search** | Tìm kiếm tức thì theo tiêu đề, nội dung, danh mục, và thẻ tag (không phân biệt hoa/thường). |
| ⭐ **Favorites & Recent** | Đánh dấu yêu thích 1 chạm và tự động lưu 20 prompt vừa mở/sao chép gần nhất. |
| 📁 **Categories Linh Hoạt** | Tích hợp sẵn 8 danh mục: *ChatGPT, Gemini, Claude, YouTube, Coding, Marketing, Shopee, Other* + thêm danh mục tùy ý. |
| 🗑️ **Trash & Khôi phục** | Chuyển vào Thùng rác (an toàn) và hỗ trợ khôi phục hoặc xóa vĩnh viễn / dọn sạch thùng rác. |
| 💾 **Local Database & Autosave** | Tự động lưu vào `localStorage` sau mỗi thao tác. Dữ liệu vĩnh viễn trên máy của bạn. |
| 🔄 **Import / Export JSON** | Sao lưu toàn bộ dữ liệu ra file `.json` hoặc nhập dữ liệu phục hồi chỉ với 1 cú click. |
| 📶 **100% Offline PWA** | Cài đặt như native app Windows qua Microsoft Edge / Chrome hoặc gói MSIX, chạy mượt không cần mạng Internet. |

---

## ⌨️ Bảng Phím Tắt Tiện Lợi (Keyboard Shortcuts)

| Phím tắt | Chức năng |
| :--- | :--- |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> | Kích hoạt nhanh cửa sổ PromptDock / Focus tìm kiếm |
| <kbd>Ctrl</kbd> + <kbd>F</kbd> | Focus vào thanh tìm kiếm |
| <kbd>Ctrl</kbd> + <kbd>N</kbd> | Mở hộp thoại tạo Prompt mới |
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Lưu prompt ngay khi đang soạn thảo trong hộp thoại |
| <kbd>Enter</kbd> | Sao chép prompt đang chọn vào Clipboard |
| <kbd>↑</kbd> / <kbd>↓</kbd> (Arrow Up/Down) | Di chuyển chọn prompt kế tiếp / trước đó trong danh sách |
| <kbd>Delete</kbd> | Chuyển prompt đang chọn vào Thùng rác (Trash) |
| <kbd>Esc</kbd> | Đóng popup, thoát hộp thoại hoặc hủy tìm kiếm |

---

## 📂 Cấu Trúc Dự Án (Project Structure)

```text
g:\PromptDock\
│
├── index.html            # Giao diện HTML5 Semantic & Windows 11 Window Shell
├── style.css             # Hệ thống Fluent Design, Mica & Acrylic blur, Dark/Light theme
├── app.js                # Core Controller ES6, Local Database, Toast, Shortcut engine
├── manifest.json         # Web App Manifest đạt chuẩn PWABuilder & Windows Store
├── service-worker.js     # Cache-First offline service worker
├── generate_icons.js     # Script tạo icon PNG/SVG thuần Node.js (không cần canvas phụ thuộc)
├── favicon.ico           # Favicon ứng dụng
│
├── icons/
│   ├── icon.svg          # Vector icon thiết kế Fluent
│   ├── icon-192.png      # Icon PWA 192x192 PNG
│   ├── icon-512.png      # Icon PWA 512x512 PNG
│   └── icon-maskable.png # Maskable Icon chuẩn PWA
│
└── README.md             # Hướng dẫn chi tiết dự án & đóng gói MSIX
```

---

## 📦 Hướng Dẫn Đóng Gói MSIX Để Đăng Microsoft Store

PromptDock đã được xây dựng chuẩn 100% theo các tiêu chí khắt khe của **PWABuilder** (do Microsoft phát triển):

### Bước 1: Chạy thử hoặc Host cục bộ / Web
Bạn có thể host thư mục này lên GitHub Pages, Vercel, Netlify, Cloudflare Pages hoặc chạy local server:

```powershell
# Chạy nhanh bằng Python:
cd g:\PromptDock
python -m http.server 8080

# Hoặc bằng Node npx serve:
npx serve g:\PromptDock
```

### Bước 2: Đóng gói với PWABuilder
1. Truy cập: [https://www.pwabuilder.com/](https://www.pwabuilder.com/)
2. Nhập URL của ứng dụng (hoặc URL deployment của bạn).
3. PWABuilder sẽ kiểm tra và cấp điểm tuyệt đối:
   - ✅ Manifest: Hợp lệ đầy đủ `id`, `display: standalone`, `theme_color`, `shortcuts`.
   - ✅ Service Worker: Caching offline hoàn chỉnh.
   - ✅ Icons: Đầy đủ 192x192, 512x512 và Maskable.
4. Bấm **Package for Store** -> Chọn **Windows (MSIX)**.
5. Điền thông tin Partner Center của bạn:
   - **Package ID**
   - **Publisher ID**
   - **Publisher Display Name**
   - **Version** (ví dụ: `1.0.0.0`)
6. Nhấp **Download Package**. Bạn sẽ nhận được file `.zip` chứa file cài đặt `.msix` đã ký (hoặc để tự test trên Windows với script `install.ps1`).

### Bước 3: Đăng lên Microsoft Store
1. Đăng nhập [Microsoft Partner Center](https://partner.microsoft.com/dashboard).
2. Tạo ứng dụng mới -> Đặt tên `PromptDock`.
3. Tải lên tệp `.msix` vừa tải về từ PWABuilder.
4. Điền mô tả, ảnh chụp màn hình (screenshots), chọn danh mục **Productivity** / **Developer Tools**.
5. Gửi duyệt (Submission). Microsoft Store duyệt tự động thông thường trong vòng 24 - 48 giờ.

---

## 🎯 12 Prompt Mẫu Đỉnh Cao Tích Hợp Sẵn

1. **YouTube Documentary Scriptwriter (10-Minute High RPM)**: Kịch bản phim tài liệu giật gân phong cách MagnatesMedia/Moon với Cold open, nhịp giữ chân 30s, cao trào và bài học.
2. **Senior Software Architect: Production Code Review & Refactor**: Đánh giá kiến trúc SOLID, Clean Code, độ phức tạp Big-O, xử lý lỗi cạnh tranh và tạo unit tests.
3. **Shopee High-Converting Product Description (AIDA Framework)**: Bài viết bán hàng Shopee Mall chuẩn SEO, đánh trúng nỗi đau, cam kết bảo hành và kêu gọi chốt đơn.
4. **Viral TikTok & Reels 3-Second Hook Master**: 10 công thức Hook mở đầu 3 giây lan truyền triệu view phân loại theo tâm lý học hành vi.
5. **Gemini Deep Research & Critical Multi-Angle Synthesis**: Khung nghiên cứu đa chiều, đối chiếu phản biện, tư duy nguyên lý gốc và dự báo kịch bản.
6. **Claude Artifacts: Zero-Dependency Interactive Web App**: Kỹ thuật meta-prompt tạo ứng dụng web đơn tệp HTML/CSS/JS chạy mượt không phụ thuộc framework.
7. **ChatGPT Super-Prompt: Recursive Chain-of-Thought Meta Persona**: Prompt tư duy đa tầng (Chain of Thought), phản biện chéo và tìm giải pháp tối ưu 80/20.
8. **Meta / Facebook Ads: 5 High-Converting Copy Angles**: 5 góc tiếp cận quảng cáo chuyển đổi cao: Pain point, Social proof, So sánh đối đầu, Logic/ROI và Tò mò.
9. **Python Automation & Robust Web Scraping Engine**: Code Python crawler bất đồng bộ (`httpx`/`asyncio`), chống chặn với backoff retry và xuất CSV/JSON.
10. **Kịch Bản Livestream Shopee/TikTok: Kỹ Thuật Đẩy FOMO Chốt Đơn**: Kịch bản 15 phút theo nhịp tâm lý, tung deal độc quyền và đếm ngược khan hiếm.
11. **Academic Literature Review & Research Gap Matrix**: Ma trận tổng quan tài liệu học thuật, so sánh phương pháp luận và xác định khoảng trống nghiên cứu.
12. **Grok Realtime News Fact-Checking & Bias Deconstructor**: Khung kiểm chứng tin tức thời sự khách quan, bóc tách thiên vị truyền thông và tóm tắt sự thật.

---

## 🛡️ Bản Quyền & Giấy Phép
Sản phẩm được phát triển theo tiêu chuẩn sạch, độc lập, mã nguồn mở MIT. Tự do tùy biến, mở rộng và phân phối.
