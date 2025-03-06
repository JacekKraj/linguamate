import { Link } from '@/components/common/link/Link';
import styles from './articleParagraphLink.module.css';

interface ArticleParagraphLinkProps {
  children: string;
  href: string;
}

export const ArticleParagraphLink = ({ children, href }: ArticleParagraphLinkProps) => (
  <Link href={href} className={styles.articleParagraphLink}>
    {children}
  </Link>
);
