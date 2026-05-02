'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { usePortfolioStore } from '@/store/portfolioStore';
import { TYPE_OPTIONS, STATUS_OPTIONS } from '@/lib/projects';
import styles from './FilterBar.module.css';

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { type, status, setType, setStatus } = usePortfolioStore();

  const update = (key: 'type' | 'status', value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    /* Shallow routing — updates URL without triggering SSR */
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    if (key === 'type') setType(value);
    else setStatus(value);
  };

  return (
    <div className={styles.wrapper} role="group" aria-label="Bộ lọc dự án">
      {/* Type chips */}
      <div className={styles.group}>
        <span className={styles.groupLabel}>Loại dự án</span>
        <div className={styles.chips}>
          {TYPE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.chip} ${type === opt.value ? styles.chipActive : ''}`}
              onClick={() => update('type', opt.value)}
              aria-pressed={type === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status chips */}
      <div className={styles.group}>
        <span className={styles.groupLabel}>Trạng thái</span>
        <div className={styles.chips}>
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.chip} ${status === opt.value ? styles.chipActive : ''}`}
              onClick={() => update('status', opt.value)}
              aria-pressed={status === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
