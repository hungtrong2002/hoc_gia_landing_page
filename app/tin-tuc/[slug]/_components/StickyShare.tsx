'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './StickyShare.module.css';

interface Props {
  title: string;
  url: string;
}

export default function StickyShare({ title, url }: Props) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  /* Show after user scrolls 200px — not at 50% to avoid being too aggressive */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available — silent fail */
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {/* dismissed */});
    } else {
      handleCopy();
    }
  };

  return (
    <aside
      className={`${styles.bar} ${visible ? styles.barVisible : ''}`}
      aria-label="Chia sẻ bài viết"
    >
      <button
        className={styles.btn}
        onClick={handleNativeShare}
        aria-label="Chia sẻ bài viết"
        title="Chia sẻ"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </button>

      <button
        className={`${styles.btn} ${copied ? styles.btnCopied : ''}`}
        onClick={handleCopy}
        aria-label={copied ? 'Đã sao chép' : 'Sao chép liên kết'}
        title={copied ? 'Đã sao chép!' : 'Sao chép liên kết'}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>

      <div className={styles.divider} aria-hidden="true" />

      {/* Light CTA — not a popup, just a gentle button */}
      <Link href="/#contact" className={styles.ctaBtn} aria-label="Liên hệ tư vấn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Link>
    </aside>
  );
}
