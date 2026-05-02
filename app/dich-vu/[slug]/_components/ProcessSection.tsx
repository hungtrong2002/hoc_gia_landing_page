import Image from 'next/image';
import type { ProcessStep } from '@/lib/services';
import styles from './ProcessSection.module.css';

interface Props {
  steps: ProcessStep[];
  image: string;
  imageAlt: string;
}

export default function ProcessSection({ steps, image, imageAlt }: Props) {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.container}>
        <h2 id="process-heading" className={styles.heading}>Quy Trình Làm Việc</h2>

        <div className={styles.layout}>
          {/* Sticky image — left column */}
          <div className={styles.imageCol}>
            <div className={styles.stickyImage}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.image}
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
            </div>
          </div>

          {/* Scrolling steps — right column */}
          <div className={styles.stepsCol}>
            <ol className={styles.stepList}>
              {steps.map((step) => (
                <li key={step.step} className={styles.stepItem}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
