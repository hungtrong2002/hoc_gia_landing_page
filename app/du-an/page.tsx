import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import FilterBar from './_components/FilterBar';
import ProjectGrid from './_components/ProjectGrid';
import PortfolioInit from './_components/PortfolioInit';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Dự Án — Portfolio Công Trình | HỌC GIA',
  description:
    'Khám phá hơn 100 công trình tiêu biểu của HỌC GIA: nhà máy, chung cư, cải tạo, hạ tầng và nội thất cao cấp tại TP.HCM và các tỉnh lân cận.',
  openGraph: {
    title: 'Portfolio Công Trình | HỌC GIA',
    description: 'Hơn 100 dự án thành công — xây dựng niềm tin từng công trình.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className={styles.hero} aria-labelledby="portfolio-heading">
          <Image
            fill
            priority
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt=""
            className={styles.heroImg}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Portfolio Công Trình</p>
            <h1 id="portfolio-heading" className={styles.heroHeading}>
              CÔNG TRÌNH TIÊU BIỂU
            </h1>
            <p className={styles.heroSubheading}>
              Hơn 100 dự án hoàn thành xuất sắc — minh chứng cho cam kết chất lượng và uy tín của chúng tôi.
            </p>
          </div>
        </section>

        {/* Filter + Grid — wrapped in Suspense for useSearchParams */}
        <Suspense>
          <PortfolioInit />
          <section className={styles.content}>
            <div className={styles.container}>
              <FilterBar />
              <ProjectGrid />
            </div>
          </section>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
