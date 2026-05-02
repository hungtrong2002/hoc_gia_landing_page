'use client';

import { useState } from 'react';
import styles from './BranchInfo.module.css';

interface Branch {
  id: string;
  label: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  hours: string;
}

const BRANCHES: Branch[] = [
  {
    id: 'hcm',
    label: 'TP. Hồ Chí Minh',
    address: '12/6 Đường 58, Khu phố 12, P. Phước Long A, TP. Thủ Đức, TP. Hồ Chí Minh',
    phone: '+84975434493',
    phoneDisplay: '0975 434 493',
    email: 'hocgia.const@gmail.com',
    hours: 'Thứ 2 – Thứ 7: 08:00 – 18:00',
  },
  {
    id: 'daklak',
    label: 'Đắk Lắk',
    address: 'Số 10, Đường 1A, Thôn 2, Xã Ea Tu, TP. Buôn Ma Thuột, tỉnh Đắk Lắk',
    phone: '+84934939497',
    phoneDisplay: '0934 939 497',
    email: 'hocgia.const@gmail.com',
    hours: 'Thứ 2 – Thứ 7: 08:00 – 17:30',
  },
];

export default function BranchInfo() {
  const [active, setActive] = useState(BRANCHES[0].id);
  const branch = BRANCHES.find((b) => b.id === active)!;

  return (
    <div className={styles.wrapper}>
      {/* Tab switcher */}
      <div className={styles.tabs} role="tablist" aria-label="Chi nhánh">
        {BRANCHES.map((b) => (
          <button
            key={b.id}
            role="tab"
            aria-selected={active === b.id}
            aria-controls={`branch-panel-${b.id}`}
            id={`branch-tab-${b.id}`}
            className={`${styles.tab} ${active === b.id ? styles.tabActive : ''}`}
            onClick={() => setActive(b.id)}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Branch details */}
      <div
        id={`branch-panel-${branch.id}`}
        role="tabpanel"
        aria-labelledby={`branch-tab-${branch.id}`}
        className={styles.panel}
      >
        <address className={styles.address}>
          <dl className={styles.dl}>
            {/* Address */}
            <div className={styles.row}>
              <dt className={styles.dt}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="sr-only">Địa chỉ</span>
              </dt>
              <dd className={styles.dd}>{branch.address}</dd>
            </div>

            {/* Phone */}
            <div className={styles.row}>
              <dt className={styles.dt}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="sr-only">Điện thoại</span>
              </dt>
              <dd className={styles.dd}>
                <a href={`tel:${branch.phone}`} className={styles.link}>
                  {branch.phoneDisplay}
                </a>
              </dd>
            </div>

            {/* Email */}
            <div className={styles.row}>
              <dt className={styles.dt}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="sr-only">Email</span>
              </dt>
              <dd className={styles.dd}>
                <a href={`mailto:${branch.email}`} className={styles.link}>
                  {branch.email}
                </a>
              </dd>
            </div>

            {/* Hours */}
            <div className={styles.row}>
              <dt className={styles.dt}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="sr-only">Giờ làm việc</span>
              </dt>
              <dd className={styles.dd}>{branch.hours}</dd>
            </div>
          </dl>
        </address>

        {/* Social links */}
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=61559128469237"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Facebook HỌC GIA"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Facebook
          </a>
          <a
            href="https://zalo.me/0975434493"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Zalo HỌC GIA"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <text x="5" y="16" fontSize="9" fill="#fff" fontWeight="bold" fontFamily="sans-serif">Zalo</text>
            </svg>
            Zalo
          </a>
        </div>
      </div>
    </div>
  );
}
