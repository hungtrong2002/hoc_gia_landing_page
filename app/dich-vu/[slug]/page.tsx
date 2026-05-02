import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import { SERVICES, getServiceBySlug } from '@/lib/services';
import ProcessSection from './_components/ProcessSection';
import USPSection from './_components/USPSection';
import RelatedProjects from './_components/RelatedProjects';
import StickyCTA from './_components/StickyCTA';
import styles from './page.module.css';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.fullTitle,
    description: service.sapo,
    provider: {
      '@type': 'Organization',
      name: 'Công ty TNHH Thương Mại và Dịch Vụ Xây Dựng Học Gia',
      url: 'https://hocgia.vn',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hồ Chí Minh',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://hocgia.vn/' },
      { '@type': 'ListItem', position: 2, name: 'Dịch vụ', item: 'https://hocgia.vn/dich-vu' },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://hocgia.vn/dich-vu/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className={styles.main}>
        {/* ─── Compact hero ─── */}
        <section
          className={styles.hero}
          aria-labelledby="service-heading"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <ol>
                <li><Link href="/">Trang chủ</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/dich-vu">Dịch vụ</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{service.title}</li>
              </ol>
            </nav>

            <h1 id="service-heading" className={styles.heroHeading}>
              {service.fullTitle}
            </h1>
            <p className={styles.herosapo}>{service.sapo}</p>

            <Link href="/#contact" className={styles.heroBtn}>
              Nhận tư vấn miễn phí
            </Link>
          </div>
        </section>

        {/* ─── Process (sticky scroll) ─── */}
        <ProcessSection
          steps={service.process}
          image={service.processImage}
          imageAlt={service.imageAlt}
        />

        {/* ─── USPs ─── */}
        <USPSection usps={service.usps} />

        {/* ─── Related projects ─── */}
        <RelatedProjects category={service.relatedCategory} serviceTitle={service.title} />

        {/* ─── Bottom CTA ─── */}
        <section className={styles.ctaSection} aria-labelledby="bottom-cta-heading">
          <div className={styles.ctaInner}>
            <h2 id="bottom-cta-heading" className={styles.ctaHeading}>
              Sẵn sàng bắt đầu dự án của bạn?
            </h2>
            <p className={styles.ctaText}>
              Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết từ đội ngũ kỹ sư giàu kinh nghiệm của chúng tôi.
            </p>
            <div className={styles.ctaBtnGroup}>
              <Link href="/#contact" className={styles.ctaBtnPrimary}>
                Liên hệ tư vấn
              </Link>
              <Link href="/dich-vu" className={styles.ctaBtnSecondary}>
                Xem dịch vụ khác
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky floating CTA — client component */}
      <StickyCTA serviceTitle={service.title} />
    </>
  );
}
