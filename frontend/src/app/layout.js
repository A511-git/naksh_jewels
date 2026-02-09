import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Mini E-commerce"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
