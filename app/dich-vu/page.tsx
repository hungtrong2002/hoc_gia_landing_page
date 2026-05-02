import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import { SERVICES } from '@/lib/services';
import styles from './page.module.css';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Dịch Vụ Xây Dựng & Thi Công | HỌC GIA',
  description:
    'HỌC GIA cung cấp dịch vụ xây dựng công nghiệp, dân dụng, cải tạo, hạ tầng kỹ thuật, tư vấn thiết kế và nội thất cao cấp tại TP.HCM.',
  openGraph: {
    title: 'Dịch Vụ | HỌC GIA',
    description: 'Giải pháp tổng thầu xây dựng toàn diện từ thiết kế đến bàn giao.',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://hocgia.vn/' },
    { '@type': 'ListItem', position: 2, name: 'Dịch vụ', item: 'https://hocgia.vn/dich-vu' },
  ],
};

export default function ServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* Hero */}
        <section className={styles.hero} aria-labelledby="hub-heading">
          <Image
            fill
            priority
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt=""
            className={styles.heroImg}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Dịch Vụ Xây Dựng</p>
            <h1 id="hub-heading" className={styles.heroHeading}>
              GIẢI PHÁP XÂY DỰNG TOÀN DIỆN
            </h1>
            <p className={styles.heroSubheading}>
              Từ thiết kế kỹ thuật đến bàn giao và bảo hành — chúng tôi đồng hành cùng bạn trên từng hành trình công trình.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className={styles.gridSection} aria-label="Danh sách dịch vụ">
          <div className={styles.container}>
            <header className={styles.gridHeader}>
              <p className={styles.gridEyebrow}>Danh mục triển khai</p>
              <h2 className={styles.gridHeading}>LĨNH VỰC DỊCH VỤ CHUYÊN SÂU</h2>
              <p className={styles.gridLead}>
                Từ công nghiệp đến dân dụng, từ tư vấn đến thi công hoàn thiện
                - mỗi hạng mục đều có quy trình rõ ràng và đội ngũ chuyên trách.
              </p>
            </header>
            <ul className={styles.grid} role="list">
              {SERVICES.map((service, index) => (
                <li key={service.slug}>
                  <article className={styles.card}>
                    <span className={styles.cardBadge} aria-hidden="true">
                      Dịch vụ {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                        className={styles.cardImage}
                      />
                      <div className={styles.cardOverlay} aria-hidden="true" />
                    </div>
                    <div className={styles.cardBody}>
                      <h2 className={styles.cardTitle}>{service.title}</h2>
                      <p className={styles.cardSapo}>{service.sapo}</p>
                      <Link
                        href={`/dich-vu/${service.slug}`}
                        className={styles.cardCta}
                        aria-label={`Tìm hiểu thêm về ${service.title}`}
                      >
                        <span>Tìm hiểu thêm</span>
                        <span className={styles.ctaArrow} aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA banner */}
        <section className={styles.ctaBanner} aria-labelledby="hub-cta-heading">
          <div className={styles.container}>
            <h2 id="hub-cta-heading" className={styles.ctaHeading}>
              Bạn cần tư vấn giải pháp phù hợp?
            </h2>
            <p className={styles.ctaText}>
              Đội ngũ kỹ sư của chúng tôi sẵn sàng lắng nghe và đề xuất phương án tối ưu cho dự án của bạn.
            </p>
            <Link href="/#contact" className={styles.ctaBtn}>
              Liên hệ ngay
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
