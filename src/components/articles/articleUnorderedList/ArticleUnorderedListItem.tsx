import styles from './articleUnorderedList.module.css';

interface ArticleUnorderedListItemProps {
  children: React.ReactNode;
}

export const ArticleUnorderedListItem = ({ children }: ArticleUnorderedListItemProps) => {
  return <li className={styles.articleUnorderedListItem}>{children}</li>;
};
