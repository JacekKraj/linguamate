import Image from 'next/image';
import styles from './articleImage.module.css';
import { ComponentProps } from 'react';

type ArticleImageProps = ComponentProps<typeof Image>;

export const ArticleImage = (props: ArticleImageProps) => {
  return (
    <div className={styles.articleImageContainer}>
      <Image {...props} className={styles.articleImage} fill priority />
    </div>
  );
};
