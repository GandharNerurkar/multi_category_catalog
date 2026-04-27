import Image from 'next/image';
import Link from 'next/link';
import { getItemHref } from '../lib/catalog';
import styles from './ItemCard.module.css';

export default function ItemCard({ item }) {
  return (
    <Link href={getItemHref(item.itemname)} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={item.itemname}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{item.category}</p>
        <h3 className={styles.name}>{item.itemname}</h3>
      </div>
    </Link>
  );
}
