# 00. GLOBAL ARCHITECTURE & MASTER GUIDELINES
---

## 1. NEXT.JS RENDERING STRATEGY (SSR, CSR, ISR)
Tối ưu hóa Core Web Vitals (đặc biệt là LCP và CLS) bằng cách chọn đúng phương thức render cho từng loại dữ liệu.

* **SSR (Server-Side Rendering):** * **Áp dụng:** Trang Chủ, Trang Chi tiết Dịch vụ, Trang Chi tiết Dự án.
    * **Quy tắc:** Fetch toàn bộ dữ liệu tĩnh và metadata quan trọng ở phía Server để Google Bot có thể đọc ngay lập tức. Layout (chiều cao, khoảng cách) phải được render cố định từ Server để tránh lỗi CLS (giật bố cục) khi Hydration.
* **ISR (Incremental Static Regeneration):**
    * **Áp dụng:** Trang Blog Hub (Tin tức & Kiến thức), Trang danh sách Dịch vụ.
    * **Quy tắc:** Cấu hình thời gian revalidate hợp lý để đảm bảo TTFB (Time-to-First-Byte) cực thấp nhưng nội dung vẫn được cập nhật mới nhất cho SEO.
* **CSR (Client-Side Rendering):**
    * **Áp dụng:** Các module tương tác nặng (Bộ lọc dự án, form liên hệ, các hiệu ứng counter số nhảy, bản đồ Google Maps, và đặc biệt là các component chứa luồng xử lý AR/3D).
    * **Quy tắc:** Lazy load các component này. Nếu có thư viện nặng (như map), dùng `next/dynamic` với tùy chọn `ssr: false`.

---

## 2. RESPONSIVE STRATEGY (FLUID DESIGN)
Loại bỏ tư duy code responsive "cứng" bằng các điểm ngắt (breakpoints) truyền thống. 

* **Quy tắc Cốt lõi:** Sử dụng hệ thống **Fluid Design** thuận tự nhiên (intrinsic).
* **Kỹ thuật:** Khai thác triệt để hàm `clamp(min, val, max)` và **CSS Variables** cho Typography (font-size, line-height), khoảng cách (gap, margin, padding) và kích thước component.
* **Mục tiêu:** Giao diện phải tự động nội suy và co giãn mượt mà trên mọi tỷ lệ màn hình (từ mobile nhỏ nhất đến màn hình siêu rộng) mà không cần viết quá nhiều Media Queries rườm rà.

---

## 3. CLEAN CODE & STATE MANAGEMENT
Dự án không dùng thư viện CSS-in-JS hay Utility-first (như Tailwind) mà sử dụng Pure CSS Modules để đảm bảo tính độc lập và dễ bảo trì.

* **CSS Modules (`.module.css`):**
    * Mỗi component phải có một file CSS Module đi kèm.
    * Tái sử dụng các biến CSS toàn cục (định nghĩa trong `global.css` hoặc `variables.css` cho màu sắc, font chữ, hàm clamp cơ sở).
* **Quản lý State (Zustand & Local State):**
    * **Global State:** Sử dụng `Zustand` cho các trạng thái cần chia sẻ chéo component (Ví dụ: trạng thái bộ lọc của Trang Dự án, điều khiển modal/popup toàn cục, quản lý việc load ảnh background). Tránh rò rỉ state làm re-render toàn trang.
    * **Local State:** Chỉ dùng `useState` cho các logic gói gọn trong một component (ví dụ: form input focus).
* **Hiệu năng & Tải tài nguyên ngầm:**
    * Với các hình ảnh/texture nặng (đặc biệt trong các viewer hoặc gallery lớn), bắt buộc dùng Blurhash làm placeholder.
    * Áp dụng kỹ thuật gọi `Image.decode()` trong luồng ngầm để "hâm nóng" bộ nhớ đệm (cache warming) trước khi đưa ảnh/texture vào DOM, loại bỏ hoàn toàn hiện tượng nháy trắng.

---

## 4. SEO (SEARCH ENGINE OPTIMIZATION)
Kiến trúc HTML phải là một cây ngữ nghĩa (Semantic Tree) hoàn hảo.

* **Thẻ Meta & Headings:** Bắt buộc có thẻ H1 cho mỗi trang (chứa từ khóa chính). Giữ cấu trúc H1 -> H2 -> H3 không bị gãy nhánh. Thiết lập Dynamic Meta Title, Description và OpenGraph cho mọi page.
* **Semantic HTML:** Sử dụng `<article>`, `<section>`, `<nav>`, `<aside>`, `<time>`, `<figure>`, và các danh sách mô tả (`<dl>`, `<dt>`, `<dd>`) đúng ngữ cảnh.
* **Schema Markup:** Bắt buộc chèn dữ liệu cấu trúc (JSON-LD) phù hợp cho từng trang:
    * Trang chủ / Liên hệ: `LocalBusiness` hoặc `Organization`.
    * Trang Đội ngũ: `Person`.
    * Trang Dịch vụ: `Service` / `BreadcrumbList`.
    * Trang Bài viết: `Article`.
* **Links:** Điều hướng trang phải dùng thẻ `<a>` (hoặc `<Link>` của Next.js). Nút bấm gọi hàm JS dùng `<button>`. Link ra ngoài phải có `target="_blank" rel="noopener noreferrer"`.

---

## 5. ACCESSIBILITY (A11Y)
Đảm bảo website thân thiện với mọi người dùng và Screen Readers.

* **ARIA Attributes:** Bổ sung `aria-hidden="true"` cho các icon trang trí hoặc phần tử bị nhân bản (như infinite logo marquee). Dùng `aria-label` cho các nút bấm không có text (icon buttons).
* **Contrast & Focus:** Đảm bảo độ tương phản màu sắc. Các input trong form và nút bấm phải có trạng thái `:focus-visible` rõ ràng.
* **Media:** Mọi thẻ `<Image>` hoặc `<img>` BẮT BUỘC phải có thuộc tính `alt` mang tính mô tả. Các video background phải có `muted`, `playsinline` và thuộc tính `poster`.