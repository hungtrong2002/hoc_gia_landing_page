# 01. TRANG CHỦ (HOME PAGE)

## 1. Hero Section (Visual & Hook)
* **SEO & Cấu trúc:** Bắt buộc chứa thẻ `<h1>` với từ khóa chính của doanh nghiệp (VD: "Tổng Thầu Xây Dựng Công Nghiệp & Dân Dụng"). Nút CTA cần dùng thẻ `<a>` thay vì `<button>` (nếu điều hướng trang) để Google Bot có thể crawl được trang đích.
* **UX/UI & Animation:** * Sử dụng hàm `clamp()` trong CSS cho kích thước chữ của `H1` và `H2` để Typography nội suy mượt mà, co giãn linh hoạt theo mọi tỷ lệ màn hình mà không cần viết quá nhiều breakpoint.
    * Animation chữ xuất hiện nên dùng hiệu ứng Fade-up hoặc Reveal mask nhẹ nhàng.
* **Hiệu năng (SSR focus):** Việc xử lý video background ở phần này là điểm "chí mạng" của LCP (Largest Contentful Paint).
    * Cần có thuộc tính `poster` cho thẻ `<video>`. Để tối ưu UX trong lúc chờ video tải, sử dụng một chuỗi mã Blurhash siêu nhẹ hoặc ảnh WebP nén mức tối đa làm background placeholder.
    * Thiết lập video: `<video autoplay muted loop playsinline preload="none">` để trình duyệt không bị nghẽn luồng render ban đầu.

## 2. Quick Stats (Trust Building)
* **SEO & Cấu trúc:** Sử dụng danh sách `<ul>` và `<li>` để đánh dấu ngữ nghĩa, giúp Screen Reader và Bot hiểu đây là một tập hợp dữ liệu.
* **UX/UI & Animation:** Bố cục CSS Grid là hoàn hảo. Khi cuộn trang đến vùng này, sử dụng Intersection Observer để kích hoạt hiệu ứng số chạy (Counter).
* **Hiệu năng (SSR focus):** Tránh render các component chứa logic animation nặng ở phía Server. Render sẵn các con số đích ở dạng text tĩnh trên HTML để bot SEO đọc được ngay, sau đó mới hydrate logic chạy số ở phía Client.

## 3. Dịch vụ cốt lõi (Core Services)
* **SEO & Cấu trúc:** Tiêu đề section là `<h2>`. Tên mỗi dịch vụ nằm trong thẻ `<h3>`. Gói mỗi Card trong thẻ `<article>`.
* **UX/UI & Animation:** Thiết kế Card UI tối giản với tỷ lệ khoảng trống (padding) lớn. Khi hover, nhích nhẹ thẻ lên (`transform: translateY(-5px)`) và tăng cường độ đổ bóng (`box-shadow`) để tạo cảm giác chạm (tactile) chân thực.

## 4. Dự án tiêu biểu (Featured Projects)
* **SEO & Cấu trúc:** Tiêu đề `<h2>`. Bọc các Card dự án bằng thẻ `<a>` chứa `href` trỏ về trang chi tiết. Cân nhắc thêm Schema Markup `ItemList` để Google hiển thị Rich Snippet.
* **UX/UI & Animation:** Masonry layout đem lại cảm giác tự do, phá cách. Hover card sẽ kích hoạt overlay tối màu dần và text trượt từ dưới lên.
* **Hiệu năng (SSR focus):** Ưu tiên dùng CSS Grid/Columns cho Masonry thay vì các thư viện JS tính toán tọa độ tuyệt đối để tránh lỗi CLS (giật bố cục) rất nặng khi quá trình Hydration diễn ra. Ảnh dự án phải có thuộc tính `loading="lazy"`, `decoding="async"` và áp dụng kỹ thuật giải mã hình ảnh sớm (`Image.decode()`) trong luồng ngầm cho những ảnh sắp cuộn tới để tránh hiện tượng nháy trắng.

## 5. Đối tác & Khách hàng (Partners)
* **SEO & Cấu trúc:** Thêm `aria-hidden="true"` vào các block logo bị nhân bản để tránh Screen Reader đọc lặp đi lặp lại trong băng chuyền vô tận.
* **Hiệu năng (SSR focus):** Thay vì dùng các thư viện Slider nặng nề (như Swiper hay Slick), sử dụng kỹ thuật CSS-only infinite marquee (dùng `@keyframes` và `transform: translateX`). Giải pháp này nhẹ hơn gấp nhiều lần và chạy cực kỳ mượt trên main thread.

## 6. Footer (Information Hub)
* **SEO & Cấu trúc:** Bọc toàn bộ trong thẻ `<footer>`. Các nhóm link dùng thẻ `<nav>`. Thông tin liên hệ bọc trong `<address>`, các số điện thoại/email cần đúng định dạng link `tel:` và `mailto:`.
* **UX/UI:** Tổ chức theo dạng cột (CSS Grid). Form đăng ký nhận tin cần tối giản (chỉ cần 1 trường email và nút Submit có loading state rõ ràng).