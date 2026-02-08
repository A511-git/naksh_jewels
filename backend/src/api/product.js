import { Router } from "express";
import {ProcuctService} from "../services/index.js"
import {AsyncHandler} from "../utils/async-handler.js"
import {ApiResponse} from "../utils/api-response.js"


export const product = () => {
    const router = Router();
    const productService = new ProcuctService();

    router.get("/", AsyncHandler(async (req, res) => {
        const data = productService.findAll();
        res.json(new ApiResponse(200, data, "Success"));
    }));

    return router;
}