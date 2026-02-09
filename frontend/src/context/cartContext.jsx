import { useState, createContext, useContext } from "react";
import { api } from "../lib/axios.js";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    //frontend only
    const addToCart = (productId, qty = 1) => {
        setCart((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 0) + qty
        }));
    };

    const updateQuantity = (productId, qty) => {
        if (qty <= 0) {
            removeItem(productId);
            return;
        }
        setCart((prev) => ({ ...prev, [productId]: qty }));
    };

    const removeItem = (productId) => {
        setCart((prev) => {
            const next = { ...prev };
            delete next[productId];
            return next;
        });
    };

    // for final backend submission
    const submitCart = async () => {
        const items = Object.entries(cart).map(
            ([product, quantity]) => ({
                product,
                quantity
            })
        );
        await api.post("/cart", { items });

        // Frontend erases cart
        setCart({});
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeItem,
                submitCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);