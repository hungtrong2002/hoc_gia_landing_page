'use client';

import { useState } from 'react';
import styles from './HSETabs.module.css';

interface Commitment {
  standard: string;
  description: string;
  points: string[];
}

interface TabData {
  id: string;
  label: string;
  icon: string;
  commitments: Commitment[];
}

const TABS: TabData[] = [
  {
    id: 'quality',
    label: 'Chất Lượng',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    commitments: [
      {
        standard: 'ISO 9001:2015',
        description: 'Hệ thống quản lý chất lượng quốc tế được áp dụng xuyên suốt trong mọi quy trình thi công và hoàn thiện.',
        points: [
          'Kiểm soát chất lượng nguyên vật liệu đầu vào',
          'Quy trình nghiệm thu từng hạng mục công trình',
          'Hồ sơ hoàn công chi tiết và minh bạch',
          'Cải tiến liên tục dựa trên phản hồi khách hàng',
        ],
      },
      {
        standard: 'TCVN 9377 — Hoàn thiện',
        description: 'Tuân thủ tiêu chuẩn Việt Nam về thi công hoàn thiện công trình xây dựng dân dụng và công nghiệp.',
        points: [
          'Độ phẳng tường ≤ 3mm trên chiều dài 2m',
          'Sử dụng vật liệu đạt tiêu chuẩn TCVN',
          'Thợ thi công được đào tạo và chứng nhận',
        ],
      },
    ],
  },
  {
    id: 'health',
    label: 'Sức Khỏe',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    commitments: [
      {
        standard: 'ISO 45001:2018',
        description: 'Tiêu chuẩn quốc tế về hệ thống quản lý an toàn sức khỏe nghề nghiệp, bảo vệ toàn bộ đội ngũ lao động.',
        points: [
          'Khám sức khỏe định kỳ cho toàn bộ nhân viên',
          'Trang bị đầy đủ thiết bị bảo hộ lao động (PPE)',
          'Chương trình phúc lợi và bảo hiểm sức khỏe',
          'Môi trường làm việc trong lành, không độc hại',
        ],
      },
    ],
  },
  {
    id: 'safety',
    label: 'An Toàn',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    commitments: [
      {
        standard: 'QCVN 18:2021 — An toàn xây dựng',
        description: 'Quy chuẩn kỹ thuật quốc gia về an toàn trong xây dựng công trình, áp dụng bắt buộc cho mọi công trường.',
        points: [
          'Đào tạo an toàn lao động bắt buộc trước khi thi công',
          'Hệ thống biển báo, rào chắn an toàn công trường',
          'Quy trình xử lý sự cố khẩn cấp rõ ràng',
          'Kiểm tra định kỳ an toàn điện, giàn giáo',
        ],
      },
      {
        standard: 'TCVN 5308 — Quy phạm KTAT xây dựng',
        description: 'Quy phạm kỹ thuật an toàn áp dụng trong thi công xây dựng công trình.',
        points: [
          'Sử dụng đúng chủng loại thiết bị nâng hạ',
          'Nghiệm thu an toàn trước khi đưa vào sử dụng',
        ],
      },
    ],
  },
  {
    id: 'environment',
    label: 'Môi Trường',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><path d="M2 22c1.25-1.25 2.5-2 4-2 1.5 0 2.75.75 4 1.5S12.5 23 14 23c1.5 0 2.75-.75 4-1.5"/><path d="M22 4c-1.25 1.25-2.5 2-4 2-1.5 0-2.75-.75-4-1.5S12.5 3 11 3c-1.5 0-2.75.75-4 1.5"/><line x1="12" y1="22" x2="12" y2="2"/></svg>`,
    commitments: [
      {
        standard: 'ISO 14001:2015',
        description: 'Hệ thống quản lý môi trường giúp kiểm soát và giảm thiểu tác động tiêu cực đến môi trường trong quá trình thi công.',
        points: [
          'Phân loại và xử lý chất thải xây dựng đúng quy định',
          'Giảm thiểu tiếng ồn và bụi trong quá trình thi công',
          'Sử dụng vật liệu thân thiện môi trường khi có thể',
          'Tái sử dụng và tái chế vật liệu thừa',
        ],
      },
    ],
  },
];

export default function HSETabs() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id);

  const currentTab = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <section className={styles.section} aria-labelledby="hse-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="hse-heading" className={styles.heading}>
            Cam Kết Chất Lượng & An Toàn
          </h2>
          <p className={styles.subheading}>
            Tiêu chuẩn quốc tế — Thực hành nghiêm túc — Công trình bền vững
          </p>
        </header>

        <div className={styles.tabsWrapper}>
          <div className={styles.tabList} role="tablist" aria-label="Danh mục cam kết">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span
                  className={styles.tabIcon}
                  dangerouslySetInnerHTML={{ __html: tab.icon }}
                />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${currentTab.id}`}
            aria-labelledby={`tab-${currentTab.id}`}
            className={styles.panel}
          >
            <ul className={styles.commitmentList}>
              {currentTab.commitments.map((item) => (
                <li key={item.standard} className={styles.commitmentItem}>
                  <div className={styles.badgeRow}>
                    <span className={styles.badge}>
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M12 1l2.39 5.26L20 7.27l-4.5 4.38 1.06 6.2L12 15.27l-4.56 2.58L8.5 11.65 4 7.27l5.61-1.01L12 1z" />
                      </svg>
                      {item.standard}
                    </span>
                  </div>
                  <h3 className={styles.commitmentStandard}>{item.standard}</h3>
                  <p className={styles.commitmentDesc}>{item.description}</p>
                  <ul className={styles.pointList}>
                    {item.points.map((point) => (
                      <li key={point} className={styles.point}>
                        <span className={styles.pointDot} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
