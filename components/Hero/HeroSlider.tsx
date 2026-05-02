"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    tag: "Xây dựng công nghiệp",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80",
    gradient: "linear-gradient(135deg, #0d1117 0%, #1a2744 100%)",
  },
  {
    id: 2,
    tag: "Dân dụng cao cấp",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    gradient: "linear-gradient(135deg, #111827 0%, #1c2e1c 100%)",
  },
  {
    id: 3,
    tag: "Hạ tầng kỹ thuật",
    image: "https://images.unsplash.com/photo-1590611934720-54f7cb29e0e1?w=1600&q=80",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
  },
];

const SLIDE_INTERVAL = 5000;
const LERP_NORMAL = 0.038;
const LERP_SNAP   = 0.12;

export default function HeroSlider() {
  const [current,   setCurrent]   = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [btnFilled, setBtnFilled] = useState(false);

  const sectionRef  = useRef<HTMLElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const btnRef      = useRef<HTMLAnchorElement>(null);
  const rafRef      = useRef<number>(0);

  const curPos      = useRef({ x: -400, y: -400 });
  const targetPos   = useRef({ x: -400, y: -400 });
  const lerpFactor  = useRef(LERP_NORMAL);
  const isInside    = useRef(false);
  const isBtnHover  = useRef(false);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(id);
  }, [isHovered]);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      curPos.current.x = lerp(curPos.current.x, targetPos.current.x, lerpFactor.current);
      curPos.current.y = lerp(curPos.current.y, targetPos.current.y, lerpFactor.current);

      const el = followerRef.current;
      if (el) {
        el.style.left = `${curPos.current.x}px`;
        el.style.top  = `${curPos.current.y}px`;
        el.style.opacity = isInside.current ? "1" : "0";
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (isBtnHover.current) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseEnter = useCallback(() => { isInside.current = true; }, []);
  const handleMouseLeave = useCallback(() => { isInside.current = false; }, []);

  const handleBtnEnter = useCallback(() => {
    const btn     = btnRef.current;
    const section = sectionRef.current;
    const el      = followerRef.current;
    if (!btn || !section || !el) return;

    const bRect = btn.getBoundingClientRect();
    const sRect = section.getBoundingClientRect();

    targetPos.current = {
      x: bRect.left - sRect.left + bRect.width  / 2,
      y: bRect.top  - sRect.top  + bRect.height / 2,
    };
    isBtnHover.current = true;
    lerpFactor.current = LERP_SNAP;

    el.style.width        = `${bRect.width  + 6}px`;
    el.style.height       = `${bRect.height + 6}px`;
    el.style.borderRadius = "var(--radius-sm)";
    el.style.background   = "rgba(255,255,255,0.12)";
    el.style.border       = "1.5px solid rgba(255,255,255,0.75)";

    setBtnFilled(true);
  }, []);

  const handleBtnLeave = useCallback(() => {
    isBtnHover.current = false;
    lerpFactor.current = LERP_NORMAL;

    const el = followerRef.current;
    if (el) {
      el.style.width        = "";
      el.style.height       = "";
      el.style.borderRadius = "";
      el.style.background   = "";
      el.style.border       = "none";
    }

    setBtnFilled(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Giới thiệu công ty"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}
          style={{ background: slide.gradient }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={styles.slideImg}
          />
        </div>
      ))}

      <div className={styles.overlay} aria-hidden="true" />
      <div ref={followerRef} className={styles.follower} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            Tổng Thầu
            <br />
            Xây Dựng
            <br />
            <span className={styles.titleAccent}>Công Nghiệp</span>
            <br />
            <span className={styles.titleAccent}>&amp; Dân Dụng.</span>
          </h1>
        </div>

        <div className={styles.ctaBlock}>
          <p className={styles.ctaLabel}>HƠN 500+ CÔNG TRÌNH ĐÃ HOÀN THÀNH</p>

          <Link
            ref={btnRef}
            href="/lien-he"
            className={`${styles.btnCta} ${btnFilled ? styles.btnCtaFilled : ""}`}
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
          >
            Nhận tư vấn ngay&nbsp;&nbsp;→
          </Link>

          <div className={styles.dots} role="tablist" aria-label="Chọn slide">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1}: ${slide.tag}`}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => { setCurrent(i); setIsHovered(false); }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
