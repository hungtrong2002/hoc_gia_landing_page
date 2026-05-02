import CounterItem from "./CounterItem";
import styles from "./QuickStats.module.css";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Năm kinh nghiệm",
    description: "Hoạt động trong ngành xây dựng từ năm 2004",
  },
  {
    value: 500,
    suffix: "+",
    label: "Công trình hoàn thành",
    description: "Trải dài từ Bắc vào Nam trên khắp Việt Nam",
  },
  {
    value: 350,
    suffix: "+",
    label: "Chuyên gia & kỹ sư",
    description: "Đội ngũ có chứng chỉ hành nghề đầy đủ",
  },
  {
    value: 98,
    suffix: "%",
    label: "Khách hàng hài lòng",
    description: "Theo khảo sát sau bàn giao công trình",
  },
];

export default function QuickStats() {
  return (
    <section className={styles.section} aria-labelledby="stats-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Về Chúng Tôi</p>
          <h2 id="stats-heading" className={styles.heading}>
            Hơn 20 năm kiến tạo<br />những công trình bền vững
          </h2>
        </header>

        <ul className={styles.grid}>
          {stats.map((stat) => (
            <CounterItem key={stat.label} {...stat} />
          ))}
        </ul>
      </div>
    </section>
  );
}
