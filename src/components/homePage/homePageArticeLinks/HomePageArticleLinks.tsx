import { ArticleLinks } from '@/components/common/articleLinks/ArticleLinks';
import styles from './homePageArticleLinks.module.css';
import { articlesData } from '@/utils/articleData/articles';

export const HomePageArticleLinks = () => {
  return (
    <>
      <h2 className={styles.homePageArticleLinksHeader}>Latest articles</h2>
      <ArticleLinks articles={Object.values(articlesData).slice(0, 3)} />
    </>
  );
};
