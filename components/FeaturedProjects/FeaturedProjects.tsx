import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedProjects.module.css";

const projects = [
  {
    slug: "khu-cong-nghiep-binh-duong",
    title: "Khu Công Nghiệp Bình Dương",
    category: "Công nghiệp",
    location: "Bình Dương",
    year: "2023",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    imageAlt: "Khu công nghiệp Bình Dương sau khi hoàn thành thi công",
    featured: true,
  },
  {
    slug: "chung-cu-the-sky",
    title: "Chung Cư The Sky",
    category: "Dân dụng",
    location: "TP. HCM",
    year: "2023",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    imageAlt: "Tòa chung cư The Sky tại TP. HCM",
    featured: false,
  },
  {
    slug: "toa-nha-van-phong-harbor",
    title: "Tòa Nhà Văn Phòng Harbor",
    category: "Thương mại",
    location: "Đà Nẵng",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
    imageAlt: "Tòa nhà văn phòng Harbor nhìn từ mặt tiền",
    featured: false,
  },
  {
    slug: "nha-may-che-bien-thuc-pham",
    title: "Nhà Máy Chế Biến Thực Phẩm",
    category: "Công nghiệp",
    location: "Long An",
    year: "2022",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80",
    imageAlt: "Nhà máy chế biến thực phẩm khu vực Long An",
    featured: false,
  },
  {
    slug: "biet-thu-the-palm",
    title: "Biệt Thự The Palm",
    category: "Dân dụng",
    location: "Hà Nội",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    imageAlt: "Khu biệt thự The Palm tại Hà Nội",
    featured: true,
  },
  {
    slug: "trung-tam-thuong-mai-nova",
    title: "Trung Tâm Thương Mại Nova",
    category: "Thương mại",
    location: "Đồng Nai",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
    imageAlt: "Trung tâm thương mại Nova tại Đồng Nai",
    featured: false,
  },
  {
    slug: "nha-may-dien-tu-samsung",
    title: "Nhà Máy Điện Tử Samsung",
    category: "Công nghiệp",
    location: "Thái Nguyên",
    year: "2023",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80",
    imageAlt: "Nhà máy điện tử Samsung tại Thái Nguyên",
    featured: false,
  },
  {
    slug: "resort-nha-trang-pearl",
    title: "Resort Nha Trang Pearl",
    category: "Du lịch",
    location: "Nha Trang",
    year: "2024",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
    imageAlt: "Resort Nha Trang Pearl nhìn từ trên cao",
    featured: false,
  },
  {
    slug: "van-phong-viettel-tower",
    title: "Viettel Tower",
    category: "Thương mại",
    location: "Hà Nội",
    year: "2022",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    imageAlt: "Tòa nhà văn phòng Viettel Tower tại Hà Nội",
    featured: false,
  },
];

export default function FeaturedProjects() {
  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Thành tích thực tế</p>
          <h2 id="projects-heading" className={styles.heading}>
            Dự Án Tiêu Biểu
          </h2>
          <p className={styles.subheading}>
            Mỗi công trình là một minh chứng cho cam kết chất lượng và sự tận
            tâm của chúng tôi.
          </p>
        </header>

        <ul className={styles.masonry}>
          {projects.map((project) => (
            <li
              key={project.slug}
              className={`${styles.masonryItem} ${project.featured ? styles.masonryItemFeatured : ""}`}
            >
              <a
                href={`/du-an/${project.slug}`}
                className={styles.card}
                aria-label={`Xem chi tiết dự án ${project.title}`}
              >
                <figure className={styles.cardFigure}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    decoding="async"
                    className={styles.cardImage}
                  />
                </figure>
                <div className={styles.cardOverlay} aria-hidden="true" />
                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardMeta}>
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={project.year}>{project.year}</time>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <Link href="/du-an" className={styles.ctaBtn}>
            Xem tất cả dự án
            <span className={styles.ctaBtnArrow} aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
