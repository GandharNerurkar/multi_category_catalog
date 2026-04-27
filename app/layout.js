import './globals.css';

export const metadata = {
  title: 'Multi-Category Catalog',
  description: 'Browse products grouped by category.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
