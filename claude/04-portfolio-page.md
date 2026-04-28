# 04. DỰ ÁN (PORTFOLIO PAGE)

## 1. Trang Danh sách Dự Án (Project List & Filters)
* **SEO & Cấu trúc URL:** Trạng thái của filter bắt buộc phải được lưu trên URL dưới dạng Query Parameters (Ví dụ: `domain.com/du-an?type=cong-nghiep&status=da-hoan-thanh`). Điều này giúp người dùng có thể copy link chia sẻ và Google có thể index các trang danh mục con một cách tự nhiên.
* **UX/UI & Quản lý State:** Thay vì render lại toàn bộ component mỗi lần lọc, thiết lập một global state store (như **Zustand**) để quản lý mảng dữ liệu dự án. Khi bộ lọc thay đổi, giao diện update ngay lập tức ở Client-side, kết hợp tính năng **Shallow Routing** của Next.js để cập nhật URL mà không kích hoạt lại SSR.
* **Hiệu ứng mượt mà:** Khối lưới dự án (Grid) nên áp dụng Layout Animation (VD: Framer Motion). Khi filter, các thẻ không thuộc danh mục sẽ thu nhỏ lại (scale out) và các thẻ còn lại trượt mượt mà (slide) để lấp đầy khoảng trống.

## 2. Trang Chi tiết Dự án (Project Detail)
### A. Project Overview (Bảng thông tin)
* **SEO & Cấu trúc:** Thay vì dùng thẻ `<table>` hoặc `<div>` lồng nhau phức tạp, sử dụng thẻ HTML chuẩn cho dạng dữ liệu Key-Value: Danh sách mô tả (`<dl>`, `<dt>` cho nhãn, `<dd>` cho giá trị). Code sẽ cực kỳ semantic và nhẹ.

### B. Visual Gallery (Bố cục ảnh)
* **Hiệu năng (SSR focus):** Ảnh công trường thường có dung lượng rất lớn. Bắt buộc áp dụng kỹ thuật giải mã hình ảnh sớm (`Image.decode()`) trong luồng ngầm để "hâm nóng" bộ nhớ đệm cho các bức ảnh độ phân giải cao sắp được cuộn tới. Kết hợp cùng mã **Blurhash** làm placeholder để loại bỏ hoàn toàn hiện tượng nháy trắng hoặc khựng hình. 
* **Bố cục:** Sử dụng CSS Grid phi đối xứng để tạo sự hiện đại và phá cách cho thư viện ảnh.