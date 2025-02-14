import styles from './headerNav.module.css';
import { HeaderNavLink } from '@/components/common/headerNav/HeaderNavLink';

export const Header = () => {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavContent}>
        <div>Logo</div>
        <div className={styles.headerNavLinks}>
          <HeaderNavLink href="/">Home</HeaderNavLink>
          <HeaderNavLink href="/articles">Articles</HeaderNavLink>
        </div>
      </div>
    </nav>
  );
};
