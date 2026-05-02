'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { CATEGORY_LABELS, BLUR_DATA_URL } from '@/lib/posts';
import type { Post, PostCategory } from '@/lib/posts';
import styles from './PostGrid.module.css';

const ALL_CATEGORIES: { value: PostCategory | ''; label: string }[] = [
  { value: '', label: 'Tất cả' },
  { value: 'kien-thuc', label: 'Kiến Thức' },
  { value: 'tin-cong-ty', label: 'Tin Công Ty' },
  { value: 'thong-cao-bao-chi', label: 'Thông Cáo Báo Chí' },
];

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/tin-tuc/${post.slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.thumbnail}>
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </time>
          </div>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.sapo}>{post.sapo}</p>
          <span className={styles.readMore}>
            Đọc tiếp · {post.readTime} phút
          </span>
        </div>
      </article>
    </Link>
  );
}

interface Props {
  posts: Post[];
}

export default function PostGrid({ posts }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = (searchParams.get('category') ?? '') as PostCategory | '';

  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  const setCategory = (cat: PostCategory | '') => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat) params.set('category', cat);
    else params.delete('category');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {/* Category filter chips */}
      <div className={styles.filterRow} role="group" aria-label="Lọc theo danh mục">
        {ALL_CATEGORIES.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.chip} ${active === opt.value ? styles.chipActive : ''}`}
            onClick={() => setCategory(opt.value as PostCategory | '')}
            aria-pressed={active === opt.value}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>Không có bài viết nào trong danh mục này.</p>
      ) : (
        <ul className={styles.grid} role="list">
          {filtered.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
