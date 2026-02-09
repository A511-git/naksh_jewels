import { api } from "@/lib/axios";

export const fetchProducts = async () => {
    const res = await api.get("/products");
    return res.data.data;
};
