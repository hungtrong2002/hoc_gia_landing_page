'use client';

import { useEffect, useRef } from 'react';
import { useBlogStore } from '@/store/blogStore';
import type { TOCItem } from '@/lib/posts';
import styles from './TOC.module.css';

interface Props {
  items: TOCItem[];
}

export default function TOC({ items }: Props) {
  const { activeTocId, setActiveTocId } = useBlogStore();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    /* Track last visible heading above the fold */
    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headingEls.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        /* Find the topmost heading that's currently intersecting */
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveTocId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px', /* trigger just below header */
      }
    );

    headingEls.forEach((el) => observerRef.current!.observe(el));

    return () => observerRef.current?.disconnect();
  }, [items, setActiveTocId]);

  if (items.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="Mục lục bài viết">
      <h3 className={styles.tocHeading}>Mục lục</h3>
      <ol className={styles.tocList}>
        {items.map((item) => (
          <li key={item.id} className={`${styles.tocItem} ${item.level === 'h3' ? styles.tocItemH3 : ''}`}>
            <a
              href={`#${item.id}`}
              className={`${styles.tocLink} ${activeTocId === item.id ? styles.tocLinkActive : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveTocId(item.id);
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
