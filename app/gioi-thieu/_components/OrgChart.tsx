import styles from './OrgChart.module.css';

export default function OrgChart() {
  return (
    <section className={styles.section} aria-labelledby="org-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Cơ cấu tổ chức</p>
        <h2 id="org-heading" className={styles.heading}>SƠ ĐỒ TỔ CHỨC CÔNG TY</h2>

        <div className={styles.chartWrap}>
          <ul className={styles.tree}>
            <li>
              <span className={`${styles.node} ${styles.rootNode}`}>Giám đốc</span>
              <ul>
                <li>
                  <span className={styles.node}>
                    P. Kế toán<br />Nhân sự, Tổng hợp
                  </span>
                </li>
                <li>
                  <span className={`${styles.node} ${styles.midNode}`}>Phòng Dự Án</span>
                  <ul>
                    <li>
                      <span className={`${styles.node} ${styles.midNode}`}>
                        Ban Quản lý<br />các Dự án
                      </span>
                      <ul>
                        <li><span className={styles.node}>Bộ phận<br />An toàn</span></li>
                        <li><span className={styles.node}>Bộ phận Kỹ thuật<br />Thi công</span></li>
                        <li><span className={styles.node}>Tổ Đội<br />thi công</span></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className={styles.node}>
                    Phòng Kỹ thuật<br />Đấu thầu
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
