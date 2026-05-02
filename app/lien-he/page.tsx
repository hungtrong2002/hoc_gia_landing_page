import type { Metadata } from 'next';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';
import Footer from '@/components/Footer/Footer';
import ContactForm from './_components/ContactForm';
import BranchInfo from './_components/BranchInfo';
import MapSection from './_components/MapSection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Liên hệ | HỌC GIA — Kiến trúc & Kết cấu',
  description:
    'Liên hệ đội ngũ kỹ sư và kiến trúc sư HỌC GIA để được tư vấn miễn phí về thiết kế kiến trúc, kết cấu và nội thất.',
  openGraph: {
    title: 'Liên hệ tư vấn | HỌC GIA',
    description:
      'Liên hệ HỌC GIA để được tư vấn miễn phí về thiết kế kiến trúc, kết cấu và nội thất.',
    type: 'website',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CÔNG TY TNHH TM & DV XÂY DỰNG HỌC GIA',
  description: 'Chuyên thi công phần thô, hoàn thiện, ME các công trình dân dụng công nghiệp, nhà phố, biệt thự và nhà xưởng',
  url: 'https://hocgia.vn',
  telephone: '+84975434493',
  email: 'hocgia.const@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12/6 Đường 58, Khu phố 12, Phường Phước Long A',
    addressLocality: 'TP. Thủ Đức, Thành phố Hồ Chí Minh',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.8062,
    longitude: 106.7742,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://www.facebook.com/profile.php?id=61559128469237'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://hocgia.vn/' },
    { '@type': 'ListItem', position: 2, name: 'Liên hệ', item: 'https://hocgia.vn/lien-he' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main>
        {/* ─── Hero ─── */}
        <section className={styles.hero} aria-labelledby="contact-hero-heading">
          <Image
            fill
            priority
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className={styles.heroImg}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Kết Nối Với Chúng Tôi</p>
            <h1 id="contact-hero-heading" className={styles.heroTitle}>
              KẾT NỐI VỚI HỌC GIA
            </h1>
            <p className={styles.heroSubtitle}>
              Đội ngũ kỹ sư và kiến trúc sư luôn sẵn sàng lắng nghe và tư vấn miễn phí cho dự án của bạn.
            </p>
          </div>
        </section>

        {/* ─── Main content grid ─── */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.grid}>

              {/* Left: form */}
              <div className={styles.formCol}>
                <h2 className={styles.colHeading}>Gửi yêu cầu tư vấn</h2>
                <p className={styles.colSubtitle}>
                  Điền thông tin bên dưới — chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                </p>
                <ContactForm />
              </div>

              {/* Right: info + map */}
              <div className={styles.infoCol}>
                <h2 className={styles.colHeading}>Thông tin liên hệ</h2>
                <p className={styles.colSubtitle}>
                  Ghé thăm văn phòng hoặc liên hệ trực tiếp qua hotline.
                </p>
                <BranchInfo />
                <div className={styles.mapWrap}>
                  <MapSection />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Quick-contact cards ─── */}
        <section className={styles.quickCards} aria-labelledby="quick-contact-heading">
          <div className={styles.container}>
            <h2 id="quick-contact-heading" className={styles.sectionHeading}>
              Kênh liên hệ nhanh
            </h2>
            <div className={styles.cards}>
              <a href="tel:+84975434493" className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <strong>Hotline</strong>
                  <span>0975 434 493</span>
                </div>
              </a>

              <a href="mailto:hocgia.const@gmail.com" className={styles.card}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <strong>Email</strong>
                  <span>hocgia.const@gmail.com</span>
                </div>
              </a>

              <a
                href="https://zalo.me/0935146386"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="14" rx="4" />
                    <path d="M8 10h8M8 13h5" strokeLinecap="round" />
                    <path d="M9 17v4l4-3h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <strong>Zalo</strong>
                  <span>0935 146 386</span>
                </div>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61559128469237"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <strong>Facebook</strong>
                  <span>Xây dựng Học Gia</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
