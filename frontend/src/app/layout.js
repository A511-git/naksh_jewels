import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { Navbar } from "@/components/Navbar";


export const metadata = {
  title: "Mini E-commerce"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
