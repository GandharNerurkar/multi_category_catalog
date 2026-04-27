import items from '../data/data.json';

function normalizeValue(value) {
  return decodeURIComponent(value).trim().toLowerCase();
}

export function getAllItems() {
  return items;
}

export function getCatalogByCategory() {
  const groupedItems = items.reduce((catalog, item) => {
    if (!catalog[item.category]) {
      catalog[item.category] = [];
    }

    catalog[item.category].push(item);
    return catalog;
  }, {});

  return Object.entries(groupedItems).sort(([left], [right]) =>
    left.localeCompare(right)
  );
}

export function getItemByName(name) {
  const normalizedName = normalizeValue(name);

  return (
    items.find((item) => normalizeValue(item.itemname) === normalizedName) ||
    null
  );
}

export function getItemHref(itemName) {
  return `/item/${encodeURIComponent(itemName)}`;
}
