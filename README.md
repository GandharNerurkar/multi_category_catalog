# Multi-Category Product Catalog

This project is built using Next.js and JavaScript.

## Assignment Overview

### Approach

- Data is grouped dynamically based on category
- Home page displays categorized items
- Clicking an item navigates to a dynamic detail page
- Item properties are rendered dynamically using the `itemprops` array

### Features

- Responsive UI using CSS Grid and Flexbox
- Dynamic routing using Next.js App Router
- Clean and reusable component structure

### Time Taken

Approximately 4-5 hours

## Tech Stack

- Next.js 16
- React 19
- JavaScript
- CSS Modules

## Project Structure

```text
app/
  layout.js
  page.js
  not-found.js
  item/[name]/page.js
components/
  CategorySection.js
  ItemCard.js
data/
  data.json
lib/
  catalog.js
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Implemented Functionality

- Home page shows products grouped by category
- Each product card displays an image and item name
- Detail page uses dynamic routing at `/item/[name]`
- Item details render all properties dynamically from `itemprops`
- Missing items are handled with a custom not found page

## Notes

- The app uses reusable components for category sections and item cards
- Routing follows the Next.js App Router structure
- Styling is kept simple and responsive without heavy UI libraries
