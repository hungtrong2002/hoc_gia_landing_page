import type { Project } from '@/lib/projects';
import styles from './ProjectOverview.module.css';

const STATUS_MAP = {
  'da-hoan-thanh': 'Đã hoàn thành',
  'dang-thi-cong': 'Đang thi công',
};

const TYPE_MAP = {
  'cong-nghiep': 'Công nghiệp',
  'dan-dung': 'Dân dụng',
  'cai-tao': 'Cải tạo',
  'ha-tang': 'Hạ tầng',
  'noi-that': 'Nội thất',
};

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <section className={styles.section} aria-labelledby="overview-heading">
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left — description */}
          <div className={styles.descCol}>
            <h2 id="overview-heading" className={styles.heading}>Về Dự Án</h2>
            <p className={styles.description}>{project.description}</p>
            {project.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {project.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right — spec table using semantic <dl> */}
          <aside className={styles.specCol} aria-label="Thông tin dự án">
            <h3 className={styles.specHeading}>Thông Tin Dự Án</h3>
            <dl className={styles.dl}>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Chủ đầu tư</dt>
                <dd className={styles.dd}>{project.client}</dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Địa điểm</dt>
                <dd className={styles.dd}>{project.location}</dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Quy mô</dt>
                <dd className={styles.dd}>{project.area}</dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Thời gian thi công</dt>
                <dd className={styles.dd}>{project.duration}</dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Năm hoàn thành</dt>
                <dd className={styles.dd}>{project.completedYear}</dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Loại công trình</dt>
                <dd className={styles.dd}>{TYPE_MAP[project.type]}</dd>
              </div>
              <div className={styles.dlRow}>
                <dt className={styles.dt}>Trạng thái</dt>
                <dd className={`${styles.dd} ${project.status === 'dang-thi-cong' ? styles.statusProgress : styles.statusDone}`}>
                  {STATUS_MAP[project.status]}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
