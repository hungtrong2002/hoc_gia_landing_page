"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./QuickStats.module.css";

interface CounterItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export default function CounterItem({
  value,
  suffix,
  label,
  description,
}: CounterItemProps) {
  const [displayed, setDisplayed] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          observer.disconnect();

          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setDisplayed(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasRun]);

  return (
    <li ref={ref} className={styles.stat}>
      <span className={styles.statValue} aria-live="polite">
        {displayed.toLocaleString("vi-VN")}
        <span className={styles.statSuffix}>{suffix}</span>
      </span>
      <strong className={styles.statLabel}>{label}</strong>
      <p className={styles.statDesc}>{description}</p>
    </li>
  );
}
