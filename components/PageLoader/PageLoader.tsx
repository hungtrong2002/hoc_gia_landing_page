"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const [phase, setPhase] = useState<"enter" | "hold" | "leave" | "done">("enter");

  useEffect(() => {
    if (sessionStorage.getItem("hg-loaded")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("hg-loaded", "1");

    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("leave"), 2000);
    const t3 = setTimeout(() => setPhase("done"), 2700);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`${styles.overlay} ${phase === "leave" ? styles.leave : ""}`}
      aria-hidden="true"
    >
      <div className={`${styles.logoWrap} ${phase !== "enter" ? styles.logoVisible : ""}`}>
        <Image
          src="/logo.png"
          alt="HocGia"
          width={1060}
          height={370}
          className={styles.logo}
          priority
        />
        <span className={styles.bar} />
      </div>
    </div>
  );
}
