import ItemCard from './ItemCard';
import styles from './CategorySection.module.css';

export default function CategorySection({ categoryName, items }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{categoryName}</h2>
        <span className={styles.count}>
          {items.length} item{items.length === 1 ? '' : 's'}
        </span>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <ItemCard key={item.itemname} item={item} />
        ))}
      </div>
    </section>
  );
}
