export const validate = (fn) => {
    return (req, res, next) => {
        (validator) => {
            const data = validator(req.body);
            res.locals.data = data;
        }
        next();
    }
}

