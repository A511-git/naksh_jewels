import { BaseService } from "./base-service.js"
import { CartRepository } from "../database/repository/index.js";

class CartService extends BaseService {
    constructor() {
        super(new CartRepository());
    }
}

export { CartService };