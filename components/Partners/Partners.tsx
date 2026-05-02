import styles from "./Partners.module.css";

const partners = [
  { name: "Fecon",        abbr: "FECON",   color: "#1a6bb5" },
  { name: "HHOME",        abbr: "HHOME",   color: "#e05c1a" },
  { name: "Phú Mỹ",      abbr: "PM",      color: "#16a34a" },
  { name: "Green VN",     abbr: "GREEN",   color: "#15803d" },
  { name: "Coteccons",    abbr: "CTD",     color: "#dc2626" },
  { name: "Hòa Bình",    abbr: "HBC",     color: "#7c3aed" },
  { name: "Vinaconex",    abbr: "VCX",     color: "#0369a1" },
  { name: "Ricons",       abbr: "RIC",     color: "#b45309" },
  { name: "Delta Corp",   abbr: "DLT",     color: "#0f766e" },
  { name: "Newtecons",    abbr: "NTC",     color: "#be185d" },
];

function LogoCard({ p }: { p: (typeof partners)[number] }) {
  return (
    <div className={styles.card}>
      <span className={styles.cardLogo} style={{ color: p.color }}>
        {p.abbr}
      </span>
      <span className={styles.cardName}>{p.name}</span>
    </div>
  );
}

export default function Partners() {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>Được tin tưởng bởi</p>
          <h2 id="partners-heading" className={styles.heading}>
            Đối Tác &amp; Khách Hàng
          </h2>
          <p className={styles.subheading}>
            Hơn 500 công trình hoàn thành cùng các đối tác và khách hàng uy tín trên toàn quốc.
          </p>
        </header>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <ul className={styles.list}>
              {partners.map((p) => (
                <li key={p.name} className={styles.item}>
                  <LogoCard p={p} />
                </li>
              ))}
            </ul>
            <ul className={styles.list} aria-hidden="true">
              {partners.map((p) => (
                <li key={`dup-${p.name}`} className={styles.item}>
                  <LogoCard p={p} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
