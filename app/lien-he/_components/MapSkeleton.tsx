import styles from './MapSection.module.css';

export default function MapSkeleton() {
  return (
    <div className={styles.skeleton} aria-label="Đang tải bản đồ…" role="status">
      <span className="sr-only">Đang tải bản đồ…</span>
    </div>
  );
}
