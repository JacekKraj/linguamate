import styles from './articleWrapper.module.css';

interface ArticleWrapperProps {
  children: React.ReactNode;
}

export const ArticleWrapper = ({ children }: ArticleWrapperProps) => {
  return <article className={styles.articleWrapper}>{children}</article>;
};
