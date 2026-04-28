# 05. TIN TỨC & KIẾN THỨC (BLOG HUB)

Việc bổ sung mục Tin tức & Kiến thức là quyết định chiến lược để kéo Organic Traffic và xây dựng Topical Authority. Tiêu chuẩn UI/UX ở đây chuyển trọng tâm sang "sự tĩnh lặng, rõ ràng và tập trung".

## 1. Phân loại & Trang danh mục (Blog Hub)
* **SEO & Kiến trúc dữ liệu:** Phân loại rõ ràng (Tin công ty, Kiến thức, Thông cáo báo chí). Cấu hình cơ chế **ISR** (Incremental Static Regeneration) trong Next.js để bài viết mới tự động đưa vào cache nền, đảm bảo Google index nhanh và TTFB luôn ở mức thấp nhất mà không cần build lại toàn hệ thống.
* **UX/UI Cấu trúc Grid:** Sử dụng bố cục dạng Card/List, tối giản metadata (chỉ giữ Ngày tháng và Danh mục). Thumbnail bài viết bọc trong thẻ tối ưu hình ảnh kết hợp Blurhash làm nền để tạo hiệu ứng chuyển đổi mượt mà khi ảnh thật tải xong.

## 2. Giao diện Đọc bài (Typography & Fluid Layout)
* **Fluid Typography:** Tuyệt đối không dùng kích thước font cố định (px) hay viết hàng loạt Media Queries. Thiết lập Fluid Design bằng hàm `clamp()` và CSS variables cho `font-size`, `line-height`, `margin` của `<p>`, `<h2>`, `<h3>`. Khung text sẽ nội suy và co giãn mượt mà, chống mỏi mắt trên mọi thiết bị.
* **Chiều rộng dòng (Line length):** Để tối ưu skimming, giới hạn chiều rộng cột nội dung ở mức 65-75 ký tự (`max-width: 65ch;` đến `75ch;` trong CSS) để tránh lỗi nhảy dòng khi đọc.
* **Font chữ:** Dùng font Sans-serif (Inter, Roboto) cho body text để đảm bảo độ sắc nét. Font Serif (Merriweather, Playfair) dùng làm điểm nhấn cho Headings hoặc Blockquote để tạo cảm giác báo chí, chuyên nghiệp.

## 3. Cấu trúc bài viết (Table of Contents & Formatting)
* **SEO & Điều hướng nội dung:** Bài viết dài bắt buộc có Table of Contents (Mục lục). Link trong mục lục là Anchor links (`#heading-id`) để Google tạo sitelinks trên kết quả tìm kiếm.
* **UX/UI Tương tác:** Tạo Sticky Table of Contents chạy dọc màn hình. Dùng Intersection Observer lắng nghe vị trí cuộn và kết nối với State Manager (**Zustand**) để cập nhật trạng thái "Active" (đổi màu, in đậm) cho mục lục ngay lập tức.

## 4. Giữ chân người dùng (Retention & Time-on-site)
* **Bài viết liên quan (Related Posts):** Đặt dưới bài viết, hiển thị dựa trên chung danh mục/tag. Thiết kế dạng Slider dùng **CSS scroll-snap** (thay vì thư viện JS) để tiết kiệm diện tích và tăng hiệu năng.
* **Sticky Share & CTA:** Thanh công cụ nhỏ ghim cố định cạnh màn hình hoặc đuôi bài viết chứa nút Share và CTA nhẹ nhàng. Tuyệt đối tránh Pop-up che khuất nội dung (tránh lỗi Intrusive Interstitials làm giảm điểm SEO).

## 5. Tối ưu Hiệu năng nội dung (Content Performance)
* **Hình ảnh nội dung:** Mọi thẻ `<img>` trong bài viết đều phải gắn `loading="lazy"` và `decoding="async"` (hoặc áp dụng giải mã sớm cho ảnh đầu tiên) để duy trì Core Web Vitals. Mọi khung ảnh phải được cấp sẵn thuộc tính `width` và `height` nội tại để tránh lỗi giật layout (CLS).