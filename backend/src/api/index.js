import { Router } from "express";
import {cart} from "./cart.js"
import {product} from "./product.js"

export const api = () => {
    const router = Router();

    router.get("/ping", (req, res) => {
        res.send("pong");
    })
    router.use("/cart", cart());
    router.use("/products", product());
    return router;
};
