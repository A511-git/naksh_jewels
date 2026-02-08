import {BaseValidator} from "./base-validator.js"
import {CartSchema} from "./schema/index.js"

class CartValidator extends BaseValidator {
    constructor() { super(CartSchema) }
}

export {CartValidator}