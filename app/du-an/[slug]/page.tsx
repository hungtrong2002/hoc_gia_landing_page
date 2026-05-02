import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import { PROJECTS, getProjectBySlug, BLUR_DATA_URL } from '@/lib/projects';
import ProjectOverview from './_components/ProjectOverview';
import ProjectGallery from './_components/ProjectGallery';
import styles from './page.module.css';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      images: [{ url: project.coverImage, alt: project.coverAlt }],
      type: 'website',
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://hocgia.vn/' },
      { '@type': 'ListItem', position: 2, name: 'Dự án', item: 'https://hocgia.vn/du-an' },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.shortTitle,
        item: `https://hocgia.vn/du-an/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className={styles.main}>
        {/* ─── Compact hero ─── */}
        <div className={styles.heroWrapper}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              priority
              sizes="100vw"
              className={styles.heroImage}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className={styles.heroOverlay} aria-hidden="true" />
          </div>

          <div className={styles.heroContent}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <ol>
                <li><Link href="/">Trang chủ</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/du-an">Dự án</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{project.shortTitle}</li>
              </ol>
            </nav>

            <h1 className={styles.heroHeading}>{project.title}</h1>
            <p className={styles.heroSapo}>{project.sapo}</p>
          </div>
        </div>

        {/* ─── Project overview — dl/dt/dd spec ─── */}
        <ProjectOverview project={project} />

        {/* ─── Gallery — asymmetric grid ─── */}
        <ProjectGallery images={project.gallery} projectTitle={project.shortTitle} />

        {/* ─── Bottom CTA ─── */}
        <section className={styles.cta} aria-labelledby="project-cta-heading">
          <div className={styles.ctaInner}>
            <h2 id="project-cta-heading" className={styles.ctaHeading}>
              Bạn có dự án tương tự?
            </h2>
            <p className={styles.ctaText}>
              Liên hệ với chúng tôi để nhận tư vấn và báo giá phù hợp nhất cho dự án của bạn.
            </p>
            <div className={styles.ctaBtnGroup}>
              <Link href="/#contact" className={styles.ctaBtnPrimary}>
                Liên hệ tư vấn
              </Link>
              <Link href="/du-an" className={styles.ctaBtnSecondary}>
                ← Tất cả dự án
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
