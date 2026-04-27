import CategorySection from '../components/CategorySection';
import { getCatalogByCategory } from '../lib/catalog';
import styles from './page.module.css';

export default function HomePage() {
  const categories = getCatalogByCategory();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Responsive Product Catalog</p>
        <h1 className={styles.title}>Explore products by category</h1>
        <p className={styles.description}>
          Browse cars, phones, bikes, computers, and more from a single
          organized catalog.
        </p>
      </section>

      <div className={styles.sections}>
        {categories.map(([categoryName, items]) => (
          <CategorySection
            key={categoryName}
            categoryName={categoryName}
            items={items}
          />
        ))}
      </div>
    </main>
  );
}
