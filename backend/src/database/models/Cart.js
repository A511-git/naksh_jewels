import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});
const CartSchema = new mongoose.Schema(
    {
        items:{
            type: [CartItemSchema],
            required: true,
            default: []
        }
    },
    { timestamps: true }
);


export const CartModel = mongoose.model("Cart", CartSchema);
