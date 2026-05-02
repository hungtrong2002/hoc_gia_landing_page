import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import { POSTS, getPostBySlug, getRelatedPosts, extractTOC, CATEGORY_LABELS, BLUR_DATA_URL } from '@/lib/posts';
import PostBody from './_components/PostBody';
import TOC from './_components/TOC';
import RelatedPosts from './_components/RelatedPosts';
import StickyShare from './_components/StickyShare';
import styles from './page.module.css';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const tocItems = extractTOC(post.content);
  const related = getRelatedPosts(slug, post.category);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.sapo,
    image: post.coverImage,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HỌC GIA',
      url: 'https://hocgia.vn',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://hocgia.vn/' },
      { '@type': 'ListItem', position: 2, name: 'Tin tức', item: 'https://hocgia.vn/tin-tuc' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://hocgia.vn/tin-tuc/${post.slug}`,
      },
    ],
  };

  const canonicalUrl = `https://hocgia.vn/tin-tuc/${post.slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className={styles.main}>
        {/* ─── Hero cover image ─── */}
        <div className={styles.coverWrapper}>
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            priority
            sizes="100vw"
            className={styles.coverImg}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className={styles.coverOverlay} aria-hidden="true" />
          <div className={styles.coverContent}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <ol>
                <li><Link href="/">Trang chủ</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/tin-tuc">Tin tức</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{CATEGORY_LABELS[post.category]}</li>
              </ol>
            </nav>

            <span className={styles.categoryBadge}>{CATEGORY_LABELS[post.category]}</span>
            <h1 className={styles.coverTitle}>{post.title}</h1>
            <div className={styles.coverMeta}>
              <span className={styles.author}>{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} phút đọc</span>
            </div>
          </div>
        </div>

        {/* ─── Article layout: content + sticky TOC ─── */}
        <div className={styles.articleWrapper}>
          <div className={styles.articleContainer}>
            {/* Sapo */}
            <p className={styles.sapo}>{post.sapo}</p>

            {/* Two-column: body + TOC */}
            <div className={styles.columns}>
              <article className={styles.articleCol} aria-label="Nội dung bài viết">
                <PostBody blocks={post.content} />
              </article>

              {/* Sticky TOC sidebar */}
              {tocItems.length > 0 && (
                <aside className={styles.tocCol}>
                  <TOC items={tocItems} />
                </aside>
              )}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className={styles.tags} aria-label="Tags">
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─── Related posts — CSS scroll-snap slider ─── */}
        <RelatedPosts posts={related} />

        {/* ─── CTA ─── */}
        <section className={styles.cta} aria-labelledby="blog-cta-heading">
          <div className={styles.ctaInner}>
            <h2 id="blog-cta-heading" className={styles.ctaHeading}>
              Cần tư vấn cho dự án của bạn?
            </h2>
            <p className={styles.ctaText}>
              Đội ngũ kỹ sư HỌC GIA sẵn sàng tư vấn miễn phí và đưa ra giải pháp phù hợp nhất.
            </p>
            <Link href="/#contact" className={styles.ctaBtn}>
              Liên hệ ngay
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky share pill — client component, no popup */}
      <StickyShare title={post.title} url={canonicalUrl} />
    </>
  );
}
