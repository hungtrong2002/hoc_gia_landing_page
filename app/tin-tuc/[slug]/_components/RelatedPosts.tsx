import Image from 'next/image';
import Link from 'next/link';
import { BLUR_DATA_URL, CATEGORY_LABELS } from '@/lib/posts';
import type { Post } from '@/lib/posts';
import styles from './RelatedPosts.module.css';

interface Props {
  posts: Post[];
}

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="related-heading">
      <div className={styles.container}>
        <h2 id="related-heading" className={styles.heading}>Bài Viết Liên Quan</h2>

        {/* CSS scroll-snap slider — no JS library */}
        <div className={styles.track} role="list">
          {posts.map((post) => (
            <div key={post.slug} className={styles.slide} role="listitem">
              <Link href={`/tin-tuc/${post.slug}`} className={styles.cardLink}>
                <article className={styles.card}>
                  <div className={styles.thumbnail}>
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      sizes="(max-width: 640px) 80vw, 360px"
                      className={styles.thumbImg}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <span className={styles.category}>{CATEGORY_LABELS[post.category]}</span>
                      <time dateTime={post.publishedAt} className={styles.date}>
                        {new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </time>
                    </div>
                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.sapo}>{post.sapo}</p>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
