import Image from 'next/image';
import styles from './Commitment.module.css';

const FEATURES = [
  {
    id: 'accompany',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Cam kết đồng hành',
    text: 'Sau khi bàn giao dự án, Học Gia cam kết vẫn tiếp tục đồng hành cùng khách hàng trong suốt quá trình sử dụng công trình.',
  },
  {
    id: 'warranty',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Bảo hành tận tình',
    text: 'Chúng tôi cam kết thực hiện công tác bảo hành và hậu mãi một cách tận tình cho tất cả các dự án, đảm bảo quyền lợi tối đa cho quý khách.',
  },
  {
    id: 'support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Hỗ trợ kỹ thuật nhanh chóng',
    text: 'Nếu có bất kỳ vấn đề nào phát sinh trong quá trình sử dụng, đội ngũ kỹ thuật sẽ nhanh chóng có mặt để kiểm tra và giải quyết triệt để.',
  },
  {
    id: 'goal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Không gian sống an tâm',
    text: 'Mục tiêu của chúng tôi là giúp quý khách hoàn toàn yên tâm sử dụng và tận hưởng không gian sống tuyệt vời đã được tạo ra.',
  },
];

export default function Commitment() {
  return (
    <section className={styles.section} aria-labelledby="commitment-heading">
      {/* Background image */}
      <Image
        fill
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
        alt=""
        aria-hidden="true"
        className={styles.bgImage}
        quality={80}
      />
      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <p className={styles.eyebrow}>Hậu mãi &amp; Hỗ trợ</p>
        <h2 id="commitment-heading" className={styles.heading}>
          CAM KẾT BẢO HÀNH
        </h2>
        <p className={styles.lead}>
          Trách nhiệm của Học Gia không kết thúc ở ngày bàn giao —
          chúng tôi đồng hành cùng quý khách trong từng giai đoạn của công trình.
        </p>

        {/* Feature grid */}
        <div className={styles.grid}>
          {FEATURES.map((feat, i) => (
            <div
              key={feat.id}
              className={styles.featureCard}
              style={{ '--stagger': i } as React.CSSProperties}
            >
              <span className={styles.featureIcon}>{feat.icon}</span>
              <h3 className={styles.featureTitle}>{feat.title}</h3>
              <p className={styles.featureText}>{feat.text}</p>
            </div>
          ))}
        </div>

        {/* Thank-you note */}
        <div className={styles.thankYou} aria-label="Lời cảm ơn">
          <span className={styles.quoteIcon} aria-hidden="true">
            <svg viewBox="0 0 40 32" fill="currentColor">
              <path d="M0 32V19.556C0 8.148 6.222 2.074 18.667 0L20 3.555C13.778 5.037 10.37 8.593 9.778 14.222H17.778V32H0zm22.222 0V19.556C22.222 8.148 28.444 2.074 40.889 0L42.222 3.555C36 5.037 32.593 8.593 32 14.222H40V32H22.222z" />
            </svg>
          </span>
          <p className={styles.thankYouText}>
            Công ty gửi lời cảm ơn chân thành đến quý khách hàng và đối tác
            đã tin tưởng lựa chọn{' '}
            <strong>Xây dựng Học Gia</strong> — cùng chúng tôi tạo nên những
            không gian tuyệt vời cho tương lai.
          </p>
          <p className={styles.thankYouSig}>
            — Ban Lãnh đạo Công ty TNHH TM &amp; DV Xây dựng Học Gia
          </p>
        </div>
      </div>
    </section>
  );
}
