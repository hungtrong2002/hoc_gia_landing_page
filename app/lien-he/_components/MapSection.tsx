'use client';

import dynamic from 'next/dynamic';
import MapSkeleton from './MapSkeleton';
import styles from './MapSection.module.css';

const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default function MapSection() {
  return (
    <section className={styles.section} aria-label="Bản đồ văn phòng">
      <MapClient />
    </section>
  );
}
