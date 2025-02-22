import styles from './articleparagraph.module.css';

interface ArticleParagraphProps {
  children: string;
}

export const ArticleParagraph = ({ children }: ArticleParagraphProps) => {
  return <p className={styles.articleParagraph}>{children}</p>;
};
