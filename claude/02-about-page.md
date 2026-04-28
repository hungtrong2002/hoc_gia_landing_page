# 02. VỀ CHÚNG TÔI (ABOUT PAGE)

## 1. Câu chuyện lịch sử (Interactive Timeline)
* **SEO & Cấu trúc:** Sử dụng thẻ `<time>` cho các cột mốc năm/tháng, lồng trong một danh sách có thứ tự `<ol>`. Điều này giúp Google Bot hiểu chính xác chuỗi sự kiện theo trình tự thời gian.
* **UX/UI & Animation:** Một đường line chạy dọc hoặc ngang màn hình, tự động fill màu (tô màu) khi người dùng cuộn trang (Scroll-linked animation). Khi điểm cuộn chạm đến mốc thời gian nào, text và hình ảnh của mốc đó sẽ Fade-in hoặc Slide-up.
* **Hiệu năng (SSR focus):** Timeline tương tác rất dễ gây nặng trang nếu lạm dụng JavaScript. Hãy thiết kế sao cho layout tổng thể (chiều cao, khoảng cách) được render cố định từ phía Server. Chỉ sử dụng Intersection Observer ở phía Client để thêm/bớt class CSS kích hoạt animation, tuyệt đối không dùng JS để tính toán tọa độ (`top`, `left`) nhằm tránh lỗi CLS.

## 2. Tầm nhìn & Sứ mệnh (Vision & Mission)
* **SEO & Cấu trúc:** Các câu tuyên ngôn nên đặt trong thẻ `<blockquote>` (nếu là trích dẫn từ Ban Lãnh Đạo) hoặc dùng thẻ `<h2>` đi kèm `<p>`.
* **UX/UI & Animation:** Đây là vùng không gian hoàn hảo để áp dụng tư duy thiết kế Fluid Design. Hãy sử dụng hàm `clamp()` và CSS variables cho Typography để những thông điệp cốt lõi này tự động co giãn, dàn trang mượt mà trên mọi tỷ lệ màn hình mà không cần phụ thuộc vào các media queries truyền thống. Tạo nhiều khoảng trắng (Negative Space) để nội dung "thở" và toát lên vẻ sang trọng.

## 3. Đội ngũ nòng cốt (Core Team / Leadership)
* **SEO & Cấu trúc:** Cấu trúc mỗi nhân sự bằng thẻ `<figure>` (chứa ảnh) và `<figcaption>` (chứa tên, chức vụ). Bắt buộc phải cài đặt dữ liệu cấu trúc (Schema Markup) loại `Person` hoặc `Organization` để tăng E-E-A-T (Kinh nghiệm, Chuyên môn, Thẩm quyền, Độ tin cậy) cho trang. Link LinkedIn phải có thuộc tính `target="_blank"` và `rel="noopener noreferrer"`.
* **UX/UI & Animation:** Card thiết kế phẳng, lịch sự. Hiệu ứng hover có thể chuyển ảnh từ đen trắng sang ảnh màu (grayscale to color), đồng thời trượt nhẹ icon LinkedIn từ dưới lên.
* **Hiệu năng (SSR focus):** Ảnh chân dung lãnh đạo cần độ nét cao nhưng không được làm chậm trang. Trong môi trường như Next.js, hãy tận dụng component `<Image>` để tự động serve định dạng WebP/AVIF. Đồng thời, sử dụng kỹ thuật Blurhash để tạo một lớp nền mờ (placeholder) đồng màu với ảnh thật tải lên trước, mang lại cảm giác loading cực kỳ mượt mà.

## 4. Cam kết An toàn (HSE) & Chất lượng (Commitments)
* **SEO & Cấu trúc:** Tiêu đề `<h2>`. Các chứng chỉ (ISO 9001, ISO 45001...) dùng thẻ `<h3>`. Nội dung diễn giải nên để dưới dạng Bullet Points `<ul>` `<li>` để dễ đọc.
* **UX/UI & Animation:** Các huy hiệu/chứng chỉ nên được thiết kế dưới dạng file vector (SVG) để hiển thị sắc nét tuyệt đối trên màn hình Retina mà dung lượng lại siêu nhẹ.
* **Quản lý State:** Nếu bạn thiết kế khu vực này dạng Tabs (Chuyển đổi qua lại giữa Health - Safety - Environment) để tiết kiệm diện tích, hãy cấu trúc component thật module. Việc quản lý trạng thái của Tab có thể dùng local state, hoặc nếu dự án phức tạp đã có sẵn các global state như Zustand, bạn có thể lưu trữ trạng thái người dùng đang quan tâm đến tiêu chuẩn nào để điều hướng nội dung liên quan ở các section sau.