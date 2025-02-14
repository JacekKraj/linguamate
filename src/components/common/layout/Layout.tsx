import styles from './layout.module.css';

interface Layout {
  children: React.ReactNode;
}

export const Layout = ({ children }: Layout) => {
  return <div className={styles.layout}>{children}</div>;
};
