import "./globals.css";

export const metadata = {
  title: "Tally Admin",
  description: "Admin: inventory and sales for POS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-stone-50 text-stone-900 font-sans">
        {children}
      </body>
    </html>
  );
}
