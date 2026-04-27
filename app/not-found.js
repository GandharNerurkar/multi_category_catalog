import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p className={styles.label}>Not Found</p>
        <h1 className={styles.title}>The requested item could not be found.</h1>
        <p className={styles.description}>
          The product may have been removed or the URL may be incorrect.
        </p>
        <Link href="/" className={styles.link}>
          Return to catalog
        </Link>
      </div>
    </main>
  );
}
