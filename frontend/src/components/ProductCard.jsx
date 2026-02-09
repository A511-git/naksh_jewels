"use client";

import { useCart } from "@/context/cartContext"

export const ProductCard = () => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white p-4 rounded shadow">
            <img className="h-40 w-full object-cover mb-4" src={product.image} alt={product.name} />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-3">₹{product.price}</p>
            <button className="w-full bg-black text-white py-2 rounded" onClick={() => addToCart(product._id, 1)} >
                Add to Cart
            </button>
        </div>
    );
}