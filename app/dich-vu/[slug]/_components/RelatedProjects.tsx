import Image from 'next/image';
import Link from 'next/link';
import styles from './RelatedProjects.module.css';

interface Project {
  slug: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  tag: string;
}

/* Hardcoded related projects per category */
const PROJECT_MAP: Record<string, Project[]> = {
  'cong-nghiep': [
    {
      slug: 'nha-may-abc',
      title: 'Nhà Máy ABC — Bình Dương',
      location: 'Bình Dương',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80',
      imageAlt: 'Nhà máy công nghiệp Bình Dương',
      tag: 'Công nghiệp',
    },
    {
      slug: 'kho-logistics-xyz',
      title: 'Kho Logistics XYZ — Long An',
      location: 'Long An',
      image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=700&q=80',
      imageAlt: 'Kho logistics Long An',
      tag: 'Kho xưởng',
    },
    {
      slug: 'xuong-san-xuat-mno',
      title: 'Xưởng Sản Xuất MNO — Đồng Nai',
      location: 'Đồng Nai',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
      imageAlt: 'Xưởng sản xuất Đồng Nai',
      tag: 'Công nghiệp',
    },
  ],
  'dan-dung': [
    {
      slug: 'chung-cu-the-green',
      title: 'Chung Cư The Green — Quận 9',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
      imageAlt: 'Chung cư The Green Quận 9',
      tag: 'Chung cư',
    },
    {
      slug: 'biet-thu-lavender',
      title: 'Biệt Thự Lavender — Thủ Đức',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=700&q=80',
      imageAlt: 'Biệt thự Lavender Thủ Đức',
      tag: 'Biệt thự',
    },
    {
      slug: 'toa-nha-van-phong-delta',
      title: 'Tòa Nhà Văn Phòng Delta — Quận 1',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80',
      imageAlt: 'Tòa nhà văn phòng Delta Quận 1',
      tag: 'Văn phòng',
    },
  ],
  'cai-tao': [
    {
      slug: 'cai-tao-khach-san-palm',
      title: 'Cải Tạo Khách Sạn Palm — Vũng Tàu',
      location: 'Vũng Tàu',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=700&q=80',
      imageAlt: 'Cải tạo khách sạn Palm Vũng Tàu',
      tag: 'Khách sạn',
    },
    {
      slug: 'nang-cap-van-phong-sunrise',
      title: 'Nâng Cấp Văn Phòng Sunrise — Bình Thạnh',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
      imageAlt: 'Nâng cấp văn phòng Sunrise',
      tag: 'Văn phòng',
    },
    {
      slug: 'cai-tao-truong-hoc-hoa-binh',
      title: 'Cải Tạo Trường Học Hòa Bình — Gò Vấp',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80',
      imageAlt: 'Cải tạo trường học Hòa Bình',
      tag: 'Giáo dục',
    },
  ],
  'ha-tang': [
    {
      slug: 'ha-tang-kdc-riverside',
      title: 'Hạ Tầng KDC Riverside — Cần Thơ',
      location: 'Cần Thơ',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
      imageAlt: 'Hạ tầng khu dân cư Riverside Cần Thơ',
      tag: 'Khu dân cư',
    },
    {
      slug: 'duong-noi-bo-kcn-tan-binh',
      title: 'Đường Nội Bộ KCN Tân Bình — TP.HCM',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=700&q=80',
      imageAlt: 'Đường nội bộ khu công nghiệp Tân Bình',
      tag: 'Hạ tầng',
    },
    {
      slug: 'he-thong-thoat-nuoc-phu-my',
      title: 'Hệ Thống Thoát Nước Phú Mỹ Hưng',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80',
      imageAlt: 'Hệ thống thoát nước Phú Mỹ Hưng',
      tag: 'Hạ tầng',
    },
  ],
  'tu-van': [
    {
      slug: 'tu-van-du-an-eco-park',
      title: 'Tư Vấn Dự Án Eco Park — Hưng Yên',
      location: 'Hưng Yên',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80',
      imageAlt: 'Tư vấn dự án Eco Park Hưng Yên',
      tag: 'Tư vấn',
    },
    {
      slug: 'giam-sat-benh-vien-xanh',
      title: 'Giám Sát Bệnh Viện Xanh — Đà Nẵng',
      location: 'Đà Nẵng',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80',
      imageAlt: 'Giám sát xây dựng bệnh viện Đà Nẵng',
      tag: 'Y tế',
    },
    {
      slug: 'tu-van-thiet-ke-resort-phu-quoc',
      title: 'Tư Vấn Thiết Kế Resort — Phú Quốc',
      location: 'Phú Quốc',
      image: 'https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=700&q=80',
      imageAlt: 'Tư vấn thiết kế resort Phú Quốc',
      tag: 'Du lịch',
    },
  ],
  'noi-that': [
    {
      slug: 'noi-that-penthouse-vinhomes',
      title: 'Nội Thất Penthouse Vinhomes — Quận 9',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80',
      imageAlt: 'Nội thất penthouse Vinhomes Quận 9',
      tag: 'Nội thất cao cấp',
    },
    {
      slug: 'noi-that-van-phong-google-saigon',
      title: 'Nội Thất Văn Phòng — Quận 1',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
      imageAlt: 'Nội thất văn phòng Quận 1',
      tag: 'Văn phòng',
    },
    {
      slug: 'noi-that-biet-thu-thu-duc',
      title: 'Nội Thất Biệt Thự — Thủ Đức',
      location: 'TP. Hồ Chí Minh',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80',
      imageAlt: 'Nội thất biệt thự Thủ Đức',
      tag: 'Biệt thự',
    },
  ],
};

interface Props {
  category: string;
  serviceTitle: string;
}

export default function RelatedProjects({ category, serviceTitle }: Props) {
  const projects = PROJECT_MAP[category] ?? [];
  if (projects.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="related-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="related-heading" className={styles.heading}>
            Dự Án Tiêu Biểu
          </h2>
          <p className={styles.subheading}>
            Một số công trình {serviceTitle.toLowerCase()} tiêu biểu chúng tôi đã thực hiện
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {projects.map((project) => (
            <li key={project.slug}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                  />
                  <span className={styles.tag}>{project.tag}</span>
                </div>
                <div className={styles.caption}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.location}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={styles.locationIcon}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
