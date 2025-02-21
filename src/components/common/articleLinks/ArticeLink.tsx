import { Link } from '@/components/common/link/Link';
import styles from './articleLinks.module.css';
import { getTsToPubDate } from '@/utils/common/getTsToPubDate';
import { PATHS } from '@/utils/common/urls';

interface ArticleLinkProps {
  href: string;
  minsRead: number;
  publicationTimestamp: number;
  title: string;
}

export const ArticleLink = ({ href, minsRead, publicationTimestamp, title }: ArticleLinkProps) => {
  return (
    <Link href={`${PATHS.ARTICLES}/${href}`} className={styles.articleLink}>
      <span>{getTsToPubDate(publicationTimestamp)}</span>
      <h3>{title}</h3>
      <span>{minsRead} min</span>
    </Link>
  );
};
