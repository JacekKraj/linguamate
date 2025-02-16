import styles from './layout.module.css';

interface Layout {
  children: React.ReactNode;
}

export const Layout = ({ children }: Layout) => {
  return (
    <main className={styles.layout}>
      <div className={styles.layoutContent}>{children}</div>
    </main>
  );
};
