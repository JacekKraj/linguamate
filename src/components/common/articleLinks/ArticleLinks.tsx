import { ArticleLink } from '@/components/common/articleLinks/ArticeLink';
import styles from './articleLinks.module.css';
import { LinkButton } from '@/components/common/linkButton/LinkButton';
import { ArticleNames, articlesData, ArticleURLS } from '@/utils/articleData/articles';
import { PATHS } from '@/utils/common/urls';

interface ArticleLinksProps {
  isSeeMore?: boolean;
}

export const ArticleLinks = ({ isSeeMore = true }: ArticleLinksProps) => {
  return (
    <div className={styles.articleLinksContainer}>
      <div className={styles.articleLinks}>
        <ArticleLink
          href={ArticleURLS.BRITISH_ACCENT}
          title={ArticleNames.BRITISH_ACCENT}
          publicationTimestamp={articlesData[ArticleURLS.BRITISH_ACCENT].publicationTimestamp}
          minsRead={articlesData[ArticleURLS.BRITISH_ACCENT].minsRead}
        />
      </div>
      {isSeeMore && (
        <LinkButton href={PATHS.ARTICLES} variant="primary-outline">
          See more
        </LinkButton>
      )}
    </div>
  );
};
