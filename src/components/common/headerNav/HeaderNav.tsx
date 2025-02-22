import { PATHS } from '@/utils/common/urls';
import styles from './headerNav.module.css';
import { HeaderNavLink } from '@/components/common/headerNav/HeaderNavLink';

export const Header = () => {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavContent}>
        <div>Logo</div>
        <div className={styles.headerNavLinks}>
          <HeaderNavLink href={PATHS.HOME}>Home</HeaderNavLink>
          <HeaderNavLink href={PATHS.ARTICLES}>Articles</HeaderNavLink>
        </div>
      </div>
    </nav>
  );
};
