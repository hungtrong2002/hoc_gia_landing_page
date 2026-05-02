'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { BLUR_DATA_URL } from '@/lib/projects';
import styles from './ProjectGallery.module.css';

interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
  projectTitle: string;
}

/* Pre-warms image cache using Image.decode() as images near viewport */
function usePrefetchImages(images: GalleryImage[]) {
  const seen = useRef(new Set<string>());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefetch = (src: string) => {
      if (seen.current.has(src)) return;
      seen.current.add(src);
      const img = new window.Image();
      img.src = src;
      img.decode?.().catch(() => {/* silent — decode is progressive enhancement */});
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx ?? -1);
            /* Prefetch current + next two images */
            [idx, idx + 1, idx + 2].forEach((i) => {
              if (images[i]) prefetch(images[i].src);
            });
          }
        });
      },
      { rootMargin: '200px' }
    );

    const figures = document.querySelectorAll('[data-gallery-figure]');
    figures.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [images]);
}

export default function ProjectGallery({ images, projectTitle }: Props) {
  usePrefetchImages(images);

  if (images.length === 0) return null;

  const [hero, ...rest] = images;

  return (
    <section className={styles.section} aria-label={`Hình ảnh dự án ${projectTitle}`}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Hình Ảnh Công Trình</h2>

        {/* Asymmetric CSS Grid gallery */}
        <div className={styles.gallery} role="list">
          {/* Hero — spans 2 columns, 2 rows */}
          <figure
            className={`${styles.figure} ${styles.figureHero}`}
            data-gallery-figure
            data-idx={0}
            role="listitem"
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 65vw"
              className={styles.image}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <figcaption className={styles.caption}>{hero.alt}</figcaption>
          </figure>

          {/* Remaining images */}
          {rest.map((img, i) => (
            <figure
              key={img.src}
              className={`${styles.figure} ${i === 0 ? styles.figureTall : ''}`}
              data-gallery-figure
              data-idx={i + 1}
              role="listitem"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 35vw"
                className={styles.image}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <figcaption className={styles.caption}>{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
