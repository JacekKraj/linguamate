import styles from './articleUnorderedList.module.css';

interface ArticleUnorderedListProps {
  children: React.ReactNode;
}

export const ArticleUnorderedList = ({ children }: ArticleUnorderedListProps) => {
  return <ul className={styles.articleUnorderedList}>{children}</ul>;
};
