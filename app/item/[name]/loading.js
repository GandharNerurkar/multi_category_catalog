import styles from './page.module.css';

export default function Loading() {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.imageFrame} />
          <div className={styles.content}>
            <p className={styles.category}>Loading item</p>
            <h1 className={styles.title}>Preparing details...</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
