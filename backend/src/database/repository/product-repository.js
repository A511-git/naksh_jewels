import { BaseRepository } from "./base-repository.js";
import { ProductModel } from "../models/index.js"

class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductModel);
    }
}

export { ProductRepository };