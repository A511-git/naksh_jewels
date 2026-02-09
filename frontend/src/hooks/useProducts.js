"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/product.service";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .finally(() => setLoading(false));
    }, []);
    return { products, loading };
};
