'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Credentials.module.css';

interface License {
  label: string;
  rank?: string;
  year?: string;
}

interface Person {
  id: number;
  name: string;
  initials: string;
  degree: string;
  field: string;
  university: string;
  year: string;
  licenses?: License[];
}

const PEOPLE: Person[] = [
  {
    id: 1,
    name: 'Nguyễn Học Hưng',
    initials: 'NHH',
    degree: 'Kỹ sư',
    field: 'Công nghệ kỹ thuật xây dựng',
    university: 'Đại học Quang Trung',
    year: '2012',
    licenses: [
      { label: 'Giám sát thi công xây dựng công trình', rank: 'Hạng I' },
      { label: 'Chỉ huy trưởng công trình xây dựng', year: '2024' },
    ],
  },
  {
    id: 2,
    name: 'Nguyễn Học Hậu',
    initials: 'NHH',
    degree: 'Kỹ sư',
    field: 'Xây dựng dân dụng & công nghiệp',
    university: 'Đại học Mở TP. Hồ Chí Minh',
    year: '2015',
    licenses: [
      { label: 'Giám sát thi công xây dựng DD – CN – HTKT', rank: 'Hạng II' },
    ],
  },
  {
    id: 3,
    name: 'Trần Nguyên Khải',
    initials: 'TNK',
    degree: 'Kỹ sư',
    field: 'Xây dựng dân dụng & công nghiệp',
    university: 'Đại học GTVT TP. Hồ Chí Minh',
    year: '2018',
  },
  {
    id: 4,
    name: 'Nguyễn Thành Khương',
    initials: 'NTK',
    degree: 'Kỹ sư',
    field: 'Xây dựng công trình cầu đường',
    university: 'Đại học GTVT TP. Hồ Chí Minh',
    year: '2020',
  },
  {
    id: 5,
    name: 'Đinh Văn Hiếu',
    initials: 'DVH',
    degree: 'Cao đẳng',
    field: 'Công nghệ kỹ thuật giao thông',
    university: 'Đại học Xây dựng Miền Trung',
    year: '2016',
  },
  {
    id: 6,
    name: 'Phạm Quốc Thảo',
    initials: 'PQT',
    degree: 'Kỹ sư',
    field: 'Kỹ thuật điện công nghiệp',
    university: 'Đại học GTVT TP. Hồ Chí Minh',
    year: '2018',
  },
];

export default function Credentials() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="creds-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Đội ngũ kỹ thuật</p>
        <h2 id="creds-heading" className={styles.heading}>
          NĂNG LỰC NHÂN SỰ
        </h2>
        <p className={styles.lead}>
          Đội ngũ kỹ sư và kỹ thuật viên của Học Gia được đào tạo bài bản,
          sở hữu bằng cấp chuyên ngành và chứng chỉ hành nghề được cấp bởi
          cơ quan Nhà nước có thẩm quyền.
        </p>

        <div
          ref={gridRef}
          className={`${styles.grid} ${visible ? styles.gridVisible : ''}`}
        >
          {PEOPLE.map((person) => (
            <article key={person.id} className={styles.card}>
              {/* Avatar */}
              <div className={styles.cardTop}>
                <span className={styles.avatar}>{person.initials}</span>
                <div className={styles.nameBlock}>
                  <p className={styles.personName}>{person.name}</p>
                  <span className={styles.degreeBadge}>{person.degree}</span>
                </div>
              </div>

              {/* Degree info */}
              <div className={styles.cardBody}>
                <p className={styles.field}>{person.field}</p>
                <ul className={styles.metaList}>
                  <li className={styles.metaItem}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className={styles.metaIcon}
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    {person.university}
                  </li>
                  <li className={styles.metaItem}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className={styles.metaIcon}
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Tốt nghiệp {person.year}
                  </li>
                </ul>
              </div>

              {/* Licenses */}
              {person.licenses && person.licenses.length > 0 && (
                <div className={styles.licenseBlock}>
                  {person.licenses.map((lic) => (
                    <div key={lic.label} className={styles.licenseItem}>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className={styles.licenseIcon}
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {lic.label}
                        {lic.rank && (
                          <strong className={styles.rank}> — {lic.rank}</strong>
                        )}
                        {lic.year && (
                          <span className={styles.licYear}> ({lic.year})</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
