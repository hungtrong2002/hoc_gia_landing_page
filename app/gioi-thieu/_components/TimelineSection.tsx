'use client';

import { useEffect, useRef } from 'react';
import styles from './TimelineSection.module.css';

export interface Milestone {
  year: string;
  month: string;
  title: string;
  description: string;
}

export default function TimelineSection({ milestones }: { milestones: Milestone[] }) {
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const timelineWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean) as HTMLLIElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -60px 0px' }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wrapper = timelineWrapperRef.current;
    if (!wrapper) return;

    const updateLineProgress = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start filling once timeline enters lower viewport,
      // and complete when nearly the whole section has passed.
      const start = viewportHeight * 0.82;
      const end = -rect.height + viewportHeight * 0.22;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = Math.min(1, Math.max(0, rawProgress));

      wrapper.style.setProperty('--line-progress', progress.toFixed(4));
    };

    updateLineProgress();
    window.addEventListener('scroll', updateLineProgress, { passive: true });
    window.addEventListener('resize', updateLineProgress);

    return () => {
      window.removeEventListener('scroll', updateLineProgress);
      window.removeEventListener('resize', updateLineProgress);
    };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="timeline-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="timeline-heading" className={styles.heading}>
            Hành Trình Phát Triển
          </h2>
          <p className={styles.subheading}>
            Từng bước xây dựng niềm tin và uy tín suốt hơn một thập kỷ
          </p>
        </header>

        <div ref={timelineWrapperRef} className={styles.timelineWrapper}>
          <div className={styles.trackLine} aria-hidden="true" />

          <ol className={styles.list}>
            {milestones.map((milestone, index) => (
              <li
                key={`${milestone.year}-${index}`}
                ref={(el) => { itemsRef.current[index] = el; }}
                className={`${styles.item} ${index % 2 === 0 ? styles.itemLeft : styles.itemRight}`}
              >
                <div className={styles.dot} aria-hidden="true" />

                <article className={styles.card}>
                  <time
                    dateTime={`${milestone.year}-${milestone.month}`}
                    className={styles.year}
                  >
                    {milestone.year}
                  </time>
                  <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                  <p className={styles.milestoneDesc}>{milestone.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
