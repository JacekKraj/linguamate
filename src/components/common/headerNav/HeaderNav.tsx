import { PATHS } from '@/utils/common/urls';
import styles from './headerNav.module.css';
import { HeaderNavLink } from '@/components/common/headerNav/HeaderNavLink';
import { FullLogo } from '@/components/common/logo/FullLogo';

export const Header = () => {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavContent}>
        <FullLogo />
        <div className={styles.headerNavLinks}>
          <HeaderNavLink href={PATHS.HOME}>Home</HeaderNavLink>
          <HeaderNavLink href={PATHS.ARTICLES}>Articles</HeaderNavLink>
        </div>
      </div>
    </nav>
  );
};
