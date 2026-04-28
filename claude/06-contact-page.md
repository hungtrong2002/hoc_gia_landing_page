# 06. LIÊN HỆ (CONTACT PAGE)

## 1. Form Liên hệ (Frictionless UX)
* **Chiến thuật tối ưu:** Mục tiêu là giảm thiểu "ma sát". Chỉ yêu cầu những thông tin thực sự cần thiết (Họ tên, Số điện thoại, Email, Nội dung cần tư vấn).
* **UX/UI & Animation:** Sử dụng Floating Labels (nhãn nổi) để tiết kiệm diện tích và tạo hiệu ứng chuyển động mượt mà khi focus vào ô input. Thiết lập hệ thống thông báo trạng thái (Validation) ngay lập tức (Real-time). Tránh việc bấm Submit mới hiện lỗi. Xử lý thông báo thành công/thất bại bằng các toast message hoặc micro-interaction tinh tế.
* **Fluid Design:** Áp dụng triệt để bằng cách sử dụng `clamp()` cho khoảng cách giữa các trường (gap) và độ dày của padding trong input. Điều này đảm bảo form không bị quá to trên desktop hay quá chật trên mobile, giữ vững tính "intrinsic" của layout.
* **Hiệu năng & Quản lý State:** Sử dụng thư viện nhẹ như React Hook Form kết hợp với Zod để xử lý validation. Đồng bộ hóa trạng thái gửi form (Idle, Loading, Success, Error) qua store (Zustand) nếu muốn hiển thị trạng thái ở các component khác (ví dụ: thanh tiến trình nhỏ ở Header).

## 2. Thông tin liên hệ trực tiếp (Trust & E-E-A-T)
* **SEO & Cấu trúc:** Nơi quan trọng nhất để củng cố Local SEO. Sử dụng thẻ `<address>` cho toàn bộ khối địa chỉ. Bắt buộc triển khai Schema `LocalBusiness` hoặc `Organization` với đầy đủ thuộc tính `address`, `telephone`, `email`, và `openingHours`. 
* **Liên kết:** Hotline phải dùng định dạng `tel:+84...`, email dùng `mailto:...` để thiết bị di động có thể gọi điện/gửi mail chỉ bằng một cú chạm.
* **UX/UI:** Bố cục rõ ràng, sử dụng icon SVG tối giản thay cho hình ảnh để đảm bảo độ sắc nét trên màn hình Retina. Nếu có nhiều chi nhánh, sử dụng bố cục Accordion hoặc Tabs để chuyển đổi mượt mà, tránh làm trang quá dài.

## 3. Custom Google Maps (Brand Integration)
* **Tối ưu thẩm mỹ:** Thay vì dùng iframe mặc định, sử dụng Google Maps JS API (hoặc Mapbox) để áp dụng Custom Map Style (JSON). Chỉnh sửa màu sắc đường xá, khu dân cư về tông màu thương hiệu (VD: tông xanh đen hoặc xám kiến trúc) để tạo cảm giác chuyên nghiệp.
* **Điểm nhấn công nghệ (Advanced UX):** Tích hợp nút "Xem thực tế" trên bản đồ. Khi click, dẫn người dùng tới không gian Street View tùy chỉnh hoặc cảnh quay drone 360 độ về hội sở/công trường để tạo ấn tượng mạnh về quy mô.
* **Hiệu năng (SSR focus):** Bản đồ là thành phần cực kỳ nặng. Tuyệt đối không để tải bản đồ làm chậm FCP (First Contentful Paint). Sử dụng kỹ thuật Dynamic Import trong Next.js để bản đồ chỉ được tải ở phía Client sau khi trang đã hydrate xong.
* **UX lúc tải (Loading State):** Trong lúc bản đồ tải ngầm, hiển thị một Skeleton Screen hoặc một ảnh chụp bản đồ tĩnh (Static Map Image) dung lượng siêu nhẹ để tránh khoảng trắng chết trên giao diện.