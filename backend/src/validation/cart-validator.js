import {BaseValidator} from "./base-validator.js"
import {AlertSchema} from "./schema/index.js"

class CartValidator extends BaseValidator {
    constructor() { super(AlertSchema) }
}

export {CartValidator}