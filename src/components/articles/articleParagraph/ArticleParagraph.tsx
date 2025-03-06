import { ReactNode } from 'react';
import styles from './articleparagraph.module.css';

interface ArticleParagraphProps {
  children: ReactNode;
}

export const ArticleParagraph = ({ children }: ArticleParagraphProps) => {
  return <p className={styles.articleParagraph}>{children}</p>;
};
