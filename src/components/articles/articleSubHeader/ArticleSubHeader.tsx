import styles from './articleSubHeader.module.css';

interface ArticleSubHeaderProps {
  children: string;
  tag?: 'h2' | 'h3';
}

export const ArticleSubHeader = ({ children, tag = 'h2' }: ArticleSubHeaderProps) => {
  if (tag === 'h2') return <h2 className={styles.articleSubHeaderH2}>{children}</h2>;

  return <h3 className={styles.articleSubHeaderH3}>{children}</h3>;
};
