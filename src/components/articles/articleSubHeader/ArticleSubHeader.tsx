import styles from './articleSubHeader.module.css';

interface ArticleSubHeaderProps {
  children: string;
}

export const ArticleSubHeader = ({ children }: ArticleSubHeaderProps) => {
  return <h2 className={styles.articleSubHeader}>{children}</h2>;
};
