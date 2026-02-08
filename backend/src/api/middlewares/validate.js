import { APIError, STATUS_CODES} from "../../utils/app-errors.js";

export const validate = (
    validator,
    method,
    sources = { body: true }
) => {
    return (req, res, next) => {
        let payload = {};
        for (const key of Object.keys(sources)) {
            if (!(key in req))
                throw new APIError(
                    "INVALID_VALIDATION_SOURCE",
                    STATUS_CODES.INTERNAL_ERROR,
                    `Validation source "${key}" does not exist`,
                    false
                );
            payload = req[key];
        }
        const parsed = validator[method](payload);
        res.locals.data = parsed;
        next();
    };
};
