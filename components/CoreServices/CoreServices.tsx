import Image from "next/image";
import Link from "next/link";
import styles from "./CoreServices.module.css";

const services = [
  {
    slug: "xay-dung-cong-nghiep",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    imageAlt: "Thi công nhà máy khu công nghiệp",
    title: "Xây Dựng Công Nghiệp",
    description:
      "Thiết kế và thi công nhà máy, kho xưởng, khu công nghiệp đáp ứng tiêu chuẩn quốc tế.",
  },
  {
    slug: "xay-dung-dan-dung",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    imageAlt: "Tòa nhà chung cư dân dụng cao tầng",
    title: "Xây Dựng Dân Dụng",
    description:
      "Chung cư, biệt thự, văn phòng thương mại với thiết kế hiện đại và bền vững.",
  },
  {
    slug: "cai-tao-sua-chua",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=700&q=80",
    imageAlt: "Cải tạo và sửa chữa công trình",
    title: "Cải Tạo & Sửa Chữa",
    description:
      "Nâng cấp và cải tạo công trình cũ, tăng tuổi thọ và giá trị công trình.",
  },
  {
    slug: "ha-tang-ky-thuat",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    imageAlt: "Hạ tầng kỹ thuật đường nội bộ khu đô thị",
    title: "Hạ Tầng Kỹ Thuật",
    description:
      "Đường nội bộ, hệ thống thoát nước, điện, nước và viễn thông trong khu đô thị.",
  },
  {
    slug: "tu-van-thiet-ke",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
    imageAlt: "Tư vấn và thiết kế bản vẽ công trình",
    title: "Tư Vấn & Thiết Kế",
    description:
      "Lập dự toán, giám sát thi công và tư vấn quản lý dự án chuyên nghiệp.",
  },
  {
    slug: "noi-that-cao-cap",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80",
    imageAlt: "Thi công nội thất không gian sống cao cấp",
    title: "Nội Thất Cao Cấp",
    description:
      "Thiết kế và thi công nội thất không gian sống và văn phòng theo phong cách riêng.",
  },
];

export default function CoreServices() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Lĩnh vực hoạt động</p>
          <h2 id="services-heading" className={styles.heading}>
            Dịch Vụ Cốt Lõi
          </h2>
          <p className={styles.subheading}>
            Chúng tôi cung cấp giải pháp tổng thầu toàn diện từ thiết kế,
            thi công đến bàn giao và bảo hành công trình.
          </p>
        </header>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li key={service.slug}>
              <article className={styles.card}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  loading="lazy"
                  decoding="async"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay} aria-hidden="true" />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <Link
                    href={`/dich-vu/${service.slug}`}
                    className={styles.cardLink}
                    aria-label={`Tìm hiểu thêm về ${service.title}`}
                  >
                    <span>Tìm hiểu thêm</span>
                    <span className={styles.cardLinkArrow} aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
