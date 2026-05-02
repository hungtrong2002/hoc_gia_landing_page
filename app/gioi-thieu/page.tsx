import type { Metadata } from 'next';
import Image from 'next/image';
import TimelineSection, { type Milestone } from './_components/TimelineSection';
import CoreTeam, { type TeamMember } from './_components/CoreTeam';
import HSETabs from './_components/HSETabs';
import OrgChart from './_components/OrgChart';
import Credentials from './_components/Credentials';
import Commitment from './_components/Commitment';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi | HỌC GIA — Thiết Kế & Thi Công Nội Thất',
  description:
    'Tìm hiểu về hành trình, sứ mệnh, đội ngũ chuyên gia và cam kết chất lượng của CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ XÂY DỰNG HỌC GIA.',
  openGraph: {
    title: 'Về Chúng Tôi | HỌC GIA',
    description:
      'Hành trình hơn 10 năm xây dựng không gian sống đẳng cấp tại TP.HCM.',
    type: 'website',
  },
};

const milestones: Milestone[] = [
  {
    year: '2015',
    month: '01',
    title: 'Thành lập công ty',
    description:
      'HỌC GIA được thành lập với đội ngũ 10 kỹ sư và kiến trúc sư tâm huyết, bắt đầu hành trình chinh phục lĩnh vực thi công và hoàn thiện nội thất tại TP.HCM.',
  },
  {
    year: '2017',
    month: '06',
    title: 'Cột mốc 50+ dự án',
    description:
      'Hoàn thành hơn 50 dự án cải tạo và xây dựng tại TP.HCM, khẳng định vị thế uy tín và chất lượng trên thị trường.',
  },
  {
    year: '2019',
    month: '03',
    title: 'Mở rộng quy mô',
    description:
      'Phát triển đội ngũ lên 30+ chuyên gia, mở rộng năng lực thi công nhà phố, biệt thự, nhà xưởng và công trình công nghiệp.',
  },
  {
    year: '2021',
    month: '09',
    title: 'Chứng nhận ISO 9001:2015',
    description:
      'Đạt chứng chỉ quản lý chất lượng quốc tế ISO 9001:2015, cam kết duy trì tiêu chuẩn cao nhất trong từng hạng mục dự án.',
  },
  {
    year: '2023',
    month: '01',
    title: 'Ra mắt dịch vụ thiết kế cao cấp',
    description:
      'Chính thức triển khai dịch vụ tư vấn và thiết kế nội thất cao cấp, mang đến giải pháp toàn diện từ ý tưởng đến hiện thực cho từng khách hàng.',
  },
  {
    year: '2024',
    month: '06',
    title: 'Top nhà thầu uy tín TP.HCM',
    description:
      'Được vinh danh trong top nhà thầu uy tín tại TP.HCM, tiếp tục hành trình hướng đến mục tiêu trở thành nhà thầu hàng đầu Việt Nam.',
  },
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Nguyễn Học Hưng',
    title: 'Giám Đốc Điều Hành',
    description:
      'Kỹ sư xây dựng với hơn 12 năm kinh nghiệm thực chiến. Sở hữu chứng chỉ hành nghề giám sát hạng I (Bộ Xây dựng) và chứng chỉ chỉ huy trưởng công trình — người dẫn dắt Học Gia với tinh thần chính trực và kỷ luật.',
    linkedIn: '#',
  },
  {
    id: 2,
    name: 'Nguyễn Học Hậu',
    title: 'Phụ Trách Giám Sát Thi Công',
    description:
      'Kỹ sư xây dựng tốt nghiệp Đại học Mở TP.HCM. Sở hữu chứng chỉ hành nghề giám sát thi công hạng II, chuyên giám sát kỹ thuật các công trình dân dụng, công nghiệp và hạ tầng kỹ thuật.',
    linkedIn: '#',
  },
  {
    id: 3,
    name: 'Trần Nguyên Khải',
    title: 'Kỹ Sư Trưởng Thi Công',
    description:
      'Kỹ sư xây dựng dân dụng và công nghiệp, tốt nghiệp loại Khá Đại học GTVT TP.HCM. Chuyên gia kỹ thuật thi công đảm bảo tiến độ và chất lượng nghiêm ngặt trên từng công trường.',
    linkedIn: '#',
  },
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ XÂY DỰNG HỌC GIA',
  url: 'https://hocgia.com',
  foundingDate: '2015',
  description:
    'Chuyên thi công phần thô, hoàn thiện, ME các công trình dân dụng công nghiệp, nhà phố, biệt thự và nhà xưởng chuyên nghiệp và uy tín.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12/6 đường 58, khu phố 12, Phường Phước Long A',
    addressLocality: 'TP Thủ Đức',
    addressRegion: 'TP Hồ Chí Minh',
    addressCountry: 'VN',
  },
  telephone: '+840935146386',
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main id="main-content">
        {/* ── Hero ── */}
        <section className={styles.hero} aria-label="Giới thiệu công ty">
          <Image
            fill
            priority
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80"
            alt=""
            className={styles.heroImg}
            aria-hidden="true"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Về chúng tôi</p>
            <h1 className={styles.heroTitle}>
              KIẾN TẠO KHÔNG GIAN —<br />
              NÂNG TẦM CUỘC SỐNG
            </h1>
            <p className={styles.heroLead}>
              Công ty TNHH Thương Mại và Dịch Vụ Xây Dựng{' '}
              <strong>HỌC GIA</strong> là đơn vị chuyên thi công phần thô,
              hoàn thiện, ME các công trình dân dụng công nghiệp, nhà phố,
              biệt thự và nhà xưởng chuyên nghiệp và uy tín.
            </p>
            <dl className={styles.heroBadges}>
              <div className={styles.heroBadge}>
                <dt className={styles.badgeLabel}>Tôn chỉ</dt>
                <dd className={styles.badgeValue}>
                  CHÍNH TRỰC – KỶ LUẬT – CHẤT LƯỢNG
                </dd>
              </div>
              <div className={styles.heroBadge}>
                <dt className={styles.badgeLabel}>Tầm nhìn</dt>
                <dd className={styles.badgeValue}>
                  Nhà thầu uy tín hàng đầu Việt Nam
                </dd>
              </div>
              <div className={styles.heroBadge}>
                <dt className={styles.badgeLabel}>Thành lập</dt>
                <dd className={styles.badgeValue}>2015</dd>
              </div>
            </dl>
          </div>
          <div className={styles.heroDecor} aria-hidden="true" />
        </section>

        {/* ── Timeline ── */}
        <TimelineSection milestones={milestones} />

        {/* ── Vision & Mission ── */}
        <section className={styles.visionSection} aria-labelledby="vision-heading">
          <div className={styles.visionContainer}>
            <div className={styles.visionGrid}>
              <div className={styles.visionCol}>
                <h2 id="vision-heading" className={styles.visionHeading}>
                  Sứ Mệnh
                </h2>
                <blockquote className={styles.blockquote}>
                  <p>
                    Sứ mệnh của chúng tôi là mang đến cho khách hàng những
                    không gian nội thất không chỉ đẹp mắt mà còn tối ưu về
                    công năng và tiện nghi. Chúng tôi tin rằng mỗi dự án là
                    một cơ hội để tạo ra những tác phẩm độc đáo, phản ánh
                    được cá tính và mong muốn của khách hàng.
                  </p>
                </blockquote>
              </div>

              <div className={styles.visionDivider} aria-hidden="true" />

              <div className={styles.visionCol}>
                <h2 className={styles.visionHeading}>Giá Trị Cốt Lõi</h2>
                <ul className={styles.valuesList}>
                  <li className={styles.valueItem}>
                    <span className={styles.valueAccent}>01</span>
                    <div>
                      <strong>Tôn trọng</strong>
                      <p>
                        Lắng nghe từng ý kiến, nhu cầu của khách hàng —
                        coi trọng mỗi quyết định như của chính mình.
                      </p>
                    </div>
                  </li>
                  <li className={styles.valueItem}>
                    <span className={styles.valueAccent}>02</span>
                    <div>
                      <strong>Sáng tạo</strong>
                      <p>
                        Không ngừng tìm kiếm giải pháp thiết kế độc đáo,
                        theo đuổi xu hướng mới nhất trên thế giới.
                      </p>
                    </div>
                  </li>
                  <li className={styles.valueItem}>
                    <span className={styles.valueAccent}>03</span>
                    <div>
                      <strong>Tận tâm</strong>
                      <p>
                        Đồng hành từ tư vấn, thiết kế đến thi công và hậu
                        mãi — cam kết bảo hành dài hạn mọi dự án.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Team ── */}
        <CoreTeam members={teamMembers} />

        {/* ── Org Chart ── (tạm thời ẩn) */}
        <OrgChart />
       

        {/* ── HSE & Quality ── */}
        {/* <HSETabs /> */}

        {/* ── Credentials ── */}
        <Credentials />

        {/* ── Commitment / Warranty ── */}
        <Commitment />

        {/* ── Closing CTA ── */}
        <section className={styles.ctaSection} aria-labelledby="cta-heading">
          <div className={styles.ctaInner}>
            <h2 id="cta-heading" className={styles.ctaHeading}>
              Hãy cùng chúng tôi tạo nên không gian tuyệt vời
            </h2>
            <p className={styles.ctaText}>
              Đội ngũ tư vấn của HỌC GIA luôn sẵn sàng lắng nghe và mang
              đến giải pháp phù hợp nhất cho bạn.
            </p>
            <a href="/lien-he" className={styles.ctaBtn}>
              Liên hệ tư vấn miễn phí
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
