# 03. DỊCH VỤ (SERVICES PAGE)

## 1. Trang Tổng hợp Dịch vụ (Service Hub)
* **SEO & Cấu trúc:** Trang này đóng vai trò là một "ngã tư" điều hướng. Cấu trúc URL cần nông và phẳng. Bắt buộc phải triển khai Breadcrumbs (ví dụ: Trang chủ > Dịch vụ) và sử dụng schema `BreadcrumbList` để Google hiển thị đường dẫn đẹp mắt trên kết quả tìm kiếm.
* **UX/UI & Animation:** Giao diện lưới (Grid) mạch lạc. Không cần nhồi nhét quá nhiều text ở trang này. Thay vào đó, tập trung vào hình ảnh đại diện sắc nét và tiêu đề dịch vụ rõ ràng. Hiệu ứng hover lên Card có thể làm nổi bật nút "Tìm hiểu thêm" để thúc đẩy hành vi click.

## 2. Trang Chi tiết Dịch vụ (Service Detail)
*Ví dụ: /dich-vu/tong-thau-epc. Đây là trang mục tiêu phục vụ cho việc thuyết phục và chuyển đổi.*

### A. Tiêu đề & Giới thiệu chung
* **SEO:** Thẻ `<h1>` chứa chính xác từ khóa ngách (Vd: "Tổng Thầu EPC Công Trình Công Nghiệp"). Thiết lập Dynamic Meta Title và Description riêng biệt cho mỗi slug. Khai báo Schema `Service` chi tiết (bao gồm provider, areaServed, hasOfferCatalog).
* **UX/UI:** Phần Hero của trang chi tiết không cần quá lớn như trang chủ, tập trung vào tiêu đề và một đoạn mô tả ngắn (Sapo) tóm tắt giá trị lớn nhất mang lại cho khách hàng.

### B. Quy trình làm việc (Step-by-step)
* **SEO & Cấu trúc:** Sử dụng thẻ `<ol>` và `<li>` để nhấn mạnh tính tuần tự của quy trình.
* **UX/UI & Animation:** Sử dụng bố cục **Sticky Scrolling** để tránh nhàm chán. Dùng CSS `position: sticky` để giữ một hình ảnh/video minh họa cố định ở một nửa màn hình, trong khi nửa kia cuộn qua text của từng bước. Kỹ thuật này đảm bảo luồng render mượt mà mà không cần JavaScript tính toán tọa độ.

### C. Điểm mạnh / USPs (Unique Selling Propositions)
* **Cấu trúc Layout:** Sử dụng các icon SVG kết hợp text. Tận dụng các hàm CSS như `clamp()` để các block text và icon tự động "chảy" (fluid) và nội suy kích thước theo mọi giới hạn màn hình thay vì dùng Media Queries truyền thống. Điều này giữ vững tính "intrinsic" (thuận tự nhiên) cho layout.

### D. Dự án liên quan (Related Projects)
* **Hiệu năng (SSR focus):** Tái sử dụng lại component **Card Dự án** từ trang chủ. 
* **Quản lý State:** Nếu người dùng cần lọc/phân loại dự án ngay tại đây, sử dụng một store tập trung (**Zustand**) để tách bạch logic UI. Việc này giúp các component không bị re-render thừa thãi trong quá trình client-side hydration, duy trì chỉ số Core Web Vitals ở mức cao.

### E. Nút CTA & Chuyển đổi
* **UX/UI:** Đặt một vùng CTA lớn ở cuối trang với độ tương phản màu sắc cao. 
* **Sticky CTA:** Triển khai một nút bấm bám dính (Sticky CTA) ở mép dưới hoặc trên cùng màn hình, xuất hiện tinh tế khi người dùng cuộn qua 50% chiều dài trang để không bỏ lỡ "điểm rơi" cảm xúc của khách hàng.