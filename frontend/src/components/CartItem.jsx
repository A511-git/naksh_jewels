"use client";
import { useCart } from "@/context/CartContext";

export const CartItem = ({ product, quantity }) => {
    const { updateQuantity, removeItem } = useCart();

    return (
        <div className="flex justify-between items-center bg-white p-4 mb-3 rounded">
            <div>
                <h3 className="font-medium">{product.name}</h3>
                <p>₹{product.price}</p>
            </div>

            <div className="flex items-center gap-3">
                <input
                    className="w-16 border px-2 py-1"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => updateQuantity(product._id, Number(e.target.value))}
                />
                <button className="text-red-500" onClick={() => removeItem(product._id)}>
                    Remove
                </button>
            </div>
        </div>
    );
}
