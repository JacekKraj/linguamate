import { Link } from '@/components/common/link/Link';
import styles from './footer.module.css';
import { ArticleNames, ArticleURLS } from '@/utils/articleData/articles';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 LinguoLog</p>
      <div className={styles.footerLinksSection}>
        <div className={styles.footerLinkGroup}>
          <p className={styles.footerLinkGroupHeader}>Useful language tools</p>
          <a className={styles.footerLinkItem} href="https://www.espanolconlama.com/">
            Espanolconlama.com – Learn Spanish in 5 minutes a day
          </a>
        </div>
        <div className={styles.footerLinkGroup}>
          <p className={styles.footerLinkGroupHeader}>Trending articles</p>
          <Link className={styles.footerLinkItem} href={ArticleURLS.BRITISH_ACCENT}>
            {ArticleNames.BRITISH_ACCENT}
          </Link>
          <Link className={styles.footerLinkItem} href={ArticleURLS.IMPROVE_SPELLING}>
            {ArticleNames.IMPROVE_SPELLING}
          </Link>
          <Link className={styles.footerLinkItem} href={ArticleURLS.FEAR_OF_SPEAKING}>
            {ArticleNames.FEAR_OF_SPEAKING}
          </Link>
        </div>
      </div>
    </footer>
  );
};
