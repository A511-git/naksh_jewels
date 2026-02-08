import { BaseRepository } from "./base-repository.js";
import { CartModel } from "../models/index.js"

class CartRepository extends BaseRepository {
    constructor() {
        super(CartModel);
    }
}

export { CartRepository };