import { z } from "zod";

export const CartSchema = {
    create: z.object({
        items: z.array(
            z.object({
                product: z.string("Product ID is required").min(1, "Product ID is required").max(24, "Product ID is invalid"),
                quantity: z.coerce.number("Quantity is required").min(1, "Quantity must be greater than 0")
            })
        )
    }),
} 