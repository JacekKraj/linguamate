import { Link } from '@/components/common/link/Link';
import { ComponentProps } from 'react';
import styles from './headerNav.module.css';

type HeaderNavLinkProps = ComponentProps<typeof Link>;

export const HeaderNavLink = ({ children, ...props }: HeaderNavLinkProps) => {
  return (
    <Link className={styles.headerNavLink} {...props}>
      {children}
    </Link>
  );
};
