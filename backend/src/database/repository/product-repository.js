import { BaseRepository } from "./base-repository.js";
import { ProductRepository } from "../models/index.js"

class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductRepository);
    }
}

export { ProductRepository };