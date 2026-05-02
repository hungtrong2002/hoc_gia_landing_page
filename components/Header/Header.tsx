"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Trang Chủ",  href: "/" },
  { label: "Giới Thiệu", href: "/gioi-thieu" },
  { label: "Dịch Vụ",   href: "/dich-vu" },
  { label: "Dự Án",     href: "/du-an" },
  { label: "Tin Tức",   href: "/tin-tuc" },
  { label: "Liên Hệ",   href: "/lien-he" },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>

        {/* ── Logo ── */}
        <Link href="/" className={styles.logo} aria-label="HocGia — Trang chủ">
          <Image
            src="/logo.png"
            alt="HocGia Architect & Construction"
            width={1060}
            height={370}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className={styles.nav} aria-label="Điều hướng chính">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Phone CTA ── */}
        <a href="tel:+84935146386" className={styles.phone} aria-label="Gọi ngay 0935 146 386">
          <svg
            width="16" height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
          </svg>
          <span>0935 146 386</span>
        </a>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Điều hướng mobile">
          <ul className={styles.drawerList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.drawerLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="tel:+84935146386" className={styles.drawerPhone}>
          0935 146 386
        </a>
      </div>
    </header>
  );
}
