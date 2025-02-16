import { ArticleLinks } from '@/components/common/articleLinks/ArticleLinks';
import styles from './homePageArticleLinks.module.css';

export const HomePageArticleLinks = () => {
  return (
    <>
      <h2 className={styles.homePageArticleLinksHeader}>Latest articles</h2>
      <ArticleLinks />
    </>
  );
};
