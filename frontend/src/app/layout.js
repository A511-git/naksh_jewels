import "./globals.css";
import { CartProvider } from "../context/cartContext";

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
