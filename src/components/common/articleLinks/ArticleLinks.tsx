import { ArticleLink } from '@/components/common/articleLinks/ArticeLink';
import styles from './articleLinks.module.css';
import { LinkButton } from '@/components/common/linkButton/LinkButton';

export const ArticleLinks = () => {
  return (
    <div className={styles.articleLinksContainer}>
      <div className={styles.articleLinks}>
        <ArticleLink
          href=""
          title="How to get british accent?"
          publicationTimestamp={Date.now()}
          minsRead={5}
        />
        <ArticleLink
          href=""
          title="How to improve your vocabulary and even more?"
          publicationTimestamp={Date.now()}
          minsRead={5}
        />
        <ArticleLink
          href=""
          title="How to get british accent?"
          publicationTimestamp={Date.now()}
          minsRead={5}
        />
      </div>
      <LinkButton href="/articles" variant="primary-outline">
        See more
      </LinkButton>
    </div>
  );
};
