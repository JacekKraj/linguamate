import styles from './pageHeader.module.css';

interface PageHeaderProps {
  children: string;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
  return <h1 className={styles.pageHeader}>{children}</h1>;
};
