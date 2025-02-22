import { getTsToPubDate } from '@/utils/common/getTsToPubDate';
import styles from './pageHeader.module.css';
import { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
  articleData?: {
    minsRead: number;
    publicationTimestamp: number;
  };
}

export const PageHeader = ({ children, articleData }: PageHeaderProps) => {
  return (
    <div className={styles.pageHeaderContainer}>
      {articleData && (
        <div className={styles.pageHeaderArticleData}>
          <span>{getTsToPubDate(articleData.publicationTimestamp)}</span>
          <span>&#x2022;</span>
          <span>{articleData.minsRead} min</span>
        </div>
      )}
      <h1 className={styles.pageHeader}>{children}</h1>
    </div>
  );
};
