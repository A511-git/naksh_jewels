"use client";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";


export default function Home() {
  const { products, loading } = useProducts();
  if (loading) return <p className="p-4">Loading…</p>;

  return (
    <main className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
}
