import { ArticleLink } from '@/components/common/articleLinks/ArticeLink';
import styles from './articleLinks.module.css';
import { LinkButton } from '@/components/common/linkButton/LinkButton';
import { ArticleDataType } from '@/utils/articleData/articles';
import { PATHS } from '@/utils/common/urls';

interface ArticleLinksProps {
  isSeeMore?: boolean;
  articles: ArticleDataType[];
}

export const ArticleLinks = ({ isSeeMore = true, articles }: ArticleLinksProps) => {
  return (
    <div className={styles.articleLinksContainer}>
      <div className={styles.articleLinks}>
        {articles.map((article) => (
          <ArticleLink
            key={article.url}
            href={article.url}
            title={article.name}
            publicationTimestamp={article.publicationTimestamp}
            minsRead={article.minsRead}
          />
        ))}
      </div>
      {isSeeMore && (
        <LinkButton href={PATHS.ARTICLES} variant="primary-outline">
          See more
        </LinkButton>
      )}
    </div>
  );
};
