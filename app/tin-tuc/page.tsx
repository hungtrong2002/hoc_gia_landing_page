import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import { POSTS } from '@/lib/posts';
import PostGrid from './_components/PostGrid';
import styles from './page.module.css';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Tin Tức & Kiến Thức Xây Dựng | HỌC GIA',
  description:
    'Cập nhật tin tức ngành xây dựng, chia sẻ kiến thức kỹ thuật và thông báo mới nhất từ HỌC GIA — nhà thầu xây dựng uy tín tại TP.HCM.',
  openGraph: {
    title: 'Tin Tức & Kiến Thức | HỌC GIA',
    description: 'Kiến thức thực tiễn từ đội ngũ kỹ sư HỌC GIA.',
    type: 'website',
  },
};

const featuredPost = POSTS[0];

export default function BlogHubPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className={styles.hero} aria-labelledby="blog-heading">
          <Image
            fill
            priority
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt=""
            className={styles.heroImg}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Tin Tức & Kiến Thức</p>
            <h1 id="blog-heading" className={styles.heroHeading}>
              KIẾN THỨC & CẢM HỨNG XÂY DỰNG
            </h1>
            <p className={styles.heroSubheading}>
              Kiến thức thực tiễn từ đội ngũ kỹ sư — cập nhật xu hướng xây dựng, nội thất và công nghệ mới nhất.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className={styles.featuredSection} aria-label="Bài viết nổi bật">
          <div className={styles.container}>
            <Link href={`/tin-tuc/${featuredPost.slug}`} className={styles.featuredCard}>
              <div
                className={styles.featuredImage}
                style={{ backgroundImage: `url(${featuredPost.coverImage})` }}
                aria-hidden="true"
              >
                <div className={styles.featuredOverlay} />
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.featuredEyebrow}>Nổi bật</span>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredSapo}>{featuredPost.sapo}</p>
                <div className={styles.featuredMeta}>
                  <time dateTime={featuredPost.publishedAt}>
                    {new Date(featuredPost.publishedAt).toLocaleDateString('vi-VN', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.readTime} phút đọc</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Posts grid with category filter */}
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <Suspense>
              <PostGrid posts={POSTS.slice(1)} />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
