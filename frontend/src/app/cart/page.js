"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import {api} from "@/lib/axios";
import {CartItem} from "@/components/CartItem";

export default function CartPage() {
    const { cart, submitCart } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/products").then((res) => {
            setProducts(res.data.data);
        });
    }, []);

    const cartProducts = products.filter((p) => cart[p._id]);

    const total = cartProducts.reduce(
        (sum, p) => sum + p.price * cart[p._id],
        0
    );

    return (
        <main className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Cart</h1>

            {cartProducts.length === 0 && <p>Your cart is empty.</p>}

            {cartProducts.map((product) => (
                <CartItem
                    key={product._id}
                    product={product}
                    quantity={cart[product._id]}
                />
            ))}

            {cartProducts.length > 0 && (
                <div className="mt-6 flex justify-between items-center">
                    <span className="font-semibold">Total: ₹{total}</span>

                    <button
                        onClick={submitCart}
                        className="bg-black text-white px-6 py-2 rounded"
                    >
                        Submit Cart
                    </button>
                </div>
            )}
        </main>
    );
}
