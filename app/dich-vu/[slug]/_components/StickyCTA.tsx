'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './StickyCTA.module.css';

interface Props {
  serviceTitle: string;
}

export default function StickyCTA({ serviceTitle }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrollPct > 0.5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${visible ? styles.visible : ''}`}
      role="complementary"
      aria-label="Liên hệ nhanh"
    >
      <div className={styles.inner}>
        <span className={styles.label}>Bạn quan tâm đến {serviceTitle}?</span>
        <Link href="/#contact" className={styles.btn}>
          Nhận báo giá miễn phí
        </Link>
      </div>
    </div>
  );
}
