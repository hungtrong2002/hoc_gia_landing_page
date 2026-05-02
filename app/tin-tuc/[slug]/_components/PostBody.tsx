import Image from 'next/image';
import type { Block } from '@/lib/posts';
import styles from './PostBody.module.css';

interface Props {
  blocks: Block[];
}

export default function PostBody({ blocks }: Props) {
  return (
    <div className={styles.body}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={block.id} id={block.id} className={styles.h2}>
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={block.id} id={block.id} className={styles.h3}>
                {block.text}
              </h3>
            );
          case 'p':
            return (
              <p key={i} className={styles.p}>
                {block.text}
              </p>
            );
          case 'quote':
            return (
              <blockquote key={i} className={styles.quote}>
                <p>{block.text}</p>
                {block.cite && <cite className={styles.cite}>— {block.cite}</cite>}
              </blockquote>
            );
          case 'ul':
            return (
              <ul key={i} className={styles.ul}>
                {block.items.map((item) => (
                  <li key={item} className={styles.li}>{item}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className={styles.ol}>
                {block.items.map((item) => (
                  <li key={item} className={styles.li}>{item}</li>
                ))}
              </ol>
            );
          case 'img':
            return (
              <figure key={i} className={styles.figure}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding={i < 2 ? 'sync' : 'async'}
                  className={styles.img}
                />
                {block.caption && (
                  <figcaption className={styles.figcaption}>{block.caption}</figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
