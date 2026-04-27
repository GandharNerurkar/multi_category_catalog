import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllItems, getItemByName } from '../../../lib/catalog';
import styles from './page.module.css';

export async function generateStaticParams() {
  return getAllItems().map((item) => ({
    name: item.itemname,
  }));
}

export async function generateMetadata({ params }) {
  const { name } = await params;
  const item = getItemByName(name);

  if (!item) {
    return {
      title: 'Item Not Found',
    };
  }

  return {
    title: `${item.itemname} | Multi-Category Catalog`,
    description: `View the details for ${item.itemname} in the ${item.category} category.`,
  };
}

export default async function ItemDetailPage({ params }) {
  const { name } = await params;
  const item = getItemByName(name);

  if (!item) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.backLink}>
          Back to catalog
        </Link>

        <article className={styles.card}>
          <div className={styles.imagePanel}>
            <div className={styles.imageFrame}>
              <Image
                src={item.image}
                alt={item.itemname}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.category}>{item.category}</p>
            <h1 className={styles.title}>{item.itemname}</h1>

            <section className={styles.propertiesSection}>
              <h2 className={styles.propertiesHeading}>Specifications</h2>
              <div className={styles.propertiesList}>
                {/* Render every property from itemprops so fields stay data-driven. */}
                {item.itemprops.map((property) => (
                  <div
                    key={`${item.itemname}-${property.label}`}
                    className={styles.propertyCard}
                  >
                    <span className={styles.propertyLabel}>{property.label}</span>
                    <span className={styles.propertyValue}>{property.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
