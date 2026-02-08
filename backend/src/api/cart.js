import { Router } from "express";
import { validate } from "./middlewares/validate.js";
import { CartService } from "../services/index.js"
import {CartValidator} from "../validation/index.js"
import { AsyncHandler } from "../utils/async-handler.js"
import { ApiResponse } from "../utils/api-response.js"
import { json } from "zod";


export const cart = () => {
    const router = Router();
    const cartService = new CartService();
    const cartValidator = new CartValidator();

    router.post("/", validate(cartValidator, "create", { body: true }), AsyncHandler(async (req, res) => {
        const data = await cartService.create(res.locals.data);
        res.json(new ApiResponse(200, data, "Success"));
    }));

    return router;
}