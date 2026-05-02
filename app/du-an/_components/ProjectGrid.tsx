'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePortfolioStore } from '@/store/portfolioStore';
import { PROJECTS, BLUR_DATA_URL } from '@/lib/projects';
import type { Project } from '@/lib/projects';
import styles from './ProjectGrid.module.css';

const STATUS_LABELS: Record<string, string> = {
  'da-hoan-thanh': 'Đã hoàn thành',
  'dang-thi-cong': 'Đang thi công',
};

const TYPE_LABELS: Record<string, string> = {
  'cong-nghiep': 'Công nghiệp',
  'dan-dung': 'Dân dụng',
  'cai-tao': 'Cải tạo',
  'ha-tang': 'Hạ tầng',
  'noi-that': 'Nội thất',
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/du-an/${project.slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={project.coverImage}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
            className={styles.image}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.badges}>
            <span className={`${styles.badge} ${project.status === 'dang-thi-cong' ? styles.badgeProgress : styles.badgeDone}`}>
              {STATUS_LABELS[project.status]}
            </span>
          </div>
        </div>
        <div className={styles.body}>
          <span className={styles.typeTag}>{TYPE_LABELS[project.type]}</span>
          <h2 className={styles.title}>{project.shortTitle}</h2>
          <p className={styles.meta}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={styles.metaIcon}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location}
          </p>
          <p className={styles.area}>{project.area}</p>
          <span className={styles.cta} aria-hidden="true">Xem chi tiết →</span>
        </div>
      </article>
    </Link>
  );
}

export default function ProjectGrid() {
  const { type, status } = usePortfolioStore();

  const filtered = PROJECTS.filter((p) => {
    if (type && p.type !== type) return false;
    if (status && p.status !== status) return false;
    return true;
  });

  return (
    <>
      <p className={styles.resultCount} role="status" aria-live="polite">
        {filtered.length} công trình
      </p>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p>Không có dự án nào phù hợp với bộ lọc hiện tại.</p>
        </div>
      ) : (
        <ul className={styles.grid} role="list">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </>
  );
}
