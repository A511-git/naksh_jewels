import { BaseService } from "./base-service.js"
import { ProductRepository } from "../database/repository/index.js";

class ProcuctService extends BaseService {
    constructor() {
        super(new ProductRepository());
    }
}

export { ProcuctService };