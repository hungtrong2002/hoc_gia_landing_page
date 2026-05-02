import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const company = [
  { label: "Trang Chủ",   href: "/" },
  { label: "Giới Thiệu",  href: "/gioi-thieu" },
  { label: "Dịch Vụ",    href: "/dich-vu" },
  { label: "Dự Án",      href: "/du-an" },
  { label: "Tin Tức",    href: "/tin-tuc" },
  { label: "Tuyển Dụng", href: "/tuyen-dung" },
  { label: "Liên Hệ",   href: "/lien-he" },
];

const services = [
  { label: "Xây Dựng Công Nghiệp",  href: "/dich-vu/xay-dung-cong-nghiep" },
  { label: "Xây Dựng Dân Dụng",     href: "/dich-vu/xay-dung-dan-dung" },
  { label: "Cải Tạo & Sửa Chữa",   href: "/dich-vu/cai-tao-sua-chua" },
  { label: "Hạ Tầng Kỹ Thuật",     href: "/dich-vu/ha-tang-ky-thuat" },
  { label: "Tư Vấn & Thiết Kế",    href: "/dich-vu/tu-van-thiet-ke" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.main}`}>

        {/* ── Left: Logo ── */}
        <div className={styles.brand}>
          <Link href="/" aria-label="HocGia — Trang chủ">
            <Image
              src="/logo.png"
              alt="HocGia Architect & Construction"
              width={1060}
              height={370}
              className={styles.brandLogo}
            />
          </Link>
          <p className={styles.brandFull}>
            CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ XÂY DỰNG HỌC GIA
          </p>
        </div>

        {/* ── Right: 2×2 grid ── */}
        <div className={styles.rightGrid}>

          <div className={`${styles.cell} ${styles.cellTopLeft}`}>
            <p className={styles.colTitle}>CÔNG TY</p>
            <nav aria-label="Điều hướng chính">
              <ul className={styles.navInline}>
                {company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={`${styles.cell} ${styles.cellTopRight}`}>
            <p className={styles.colTitle}>DỊCH VỤ</p>
            <nav aria-label="Dịch vụ của chúng tôi">
              <ul className={styles.navGrid}>
                {services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={`${styles.cell} ${styles.cellBottomLeft}`}>
            <p className={styles.colTitle}>LIÊN HỆ</p>
            <address className={styles.address}>
              <ul className={styles.contactList}>
                <li>
                  <a href="tel:+84975434493" className={styles.contactLink}>
                    <PhoneIcon /> 0975 434 493
                    <span className={styles.person}>(Mr Hậu)</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+84934939497" className={styles.contactLink}>
                    <PhoneIcon /> 0934 939 497
                    <span className={styles.person}>(Mr Hưng)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559128469237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    <FbIcon /> Xây dựng Học Gia
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hocgia.const@gmail.com"
                    className={styles.contactLink}
                  >
                    <MailIcon /> hocgia.const@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <div className={`${styles.cell} ${styles.cellBottomRight}`}>
            <p className={styles.colTitle}>ĐỊA CHỈ</p>
            <div className={styles.officeRow}>
              <div className={styles.officeBlock}>
                <p className={styles.officeLabel}>Văn phòng HCM</p>
                <p className={styles.officeAddr}>
                  12/6 Đường 58, Khu phố 12,<br />
                  P. Phước Long A, TP. Thủ Đức,<br />
                  TP. Hồ Chí Minh
                </p>
              </div>
              <div className={styles.officeBlock}>
                <p className={styles.officeLabel}>Chi nhánh Đắk Lắk</p>
                <p className={styles.officeAddr}>
                  Số 10, Đường 1A, Thôn 2, xã EaTu,<br />
                  TP. Buôn Ma Thuột, tỉnh Đắk Lắk
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copyright}>
            Copyright © {year} HocGia Trading &amp; Construction Services Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
