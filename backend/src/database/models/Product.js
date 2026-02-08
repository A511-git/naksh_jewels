import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            max: [120, "Name cannot be more than 120 characters"]
        },
        price: {
            type: Number,
            required: true,
            min: [0, "Price cannot be negative"]
        },
        image: {
            type: String,
            required: true,
            trim: true,
            max: [500, "Image URL cannot be more than 500 characters"]
        }
    },
    { timestamps: true }
);

export const ProductModel = mongoose.model("Product", ProductSchema);
