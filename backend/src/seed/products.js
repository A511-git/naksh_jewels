import { ProductModel } from "../database/models/index.js"

export const seedProducts = async () => {
    const existingCount = await ProductModel.countDocuments();
    if (existingCount > 0) {
        console.log("Products already exist, skipping seed");
        return;
    }
    await ProductModel.insertMany(
        [
            { name: "Essence Mascara Lash Princess", price: 10, image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" },
            { name: "Eyeshadow Palette with Mirror", price: 20, image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp" },
            { name: "Powder Canister", price: 15, image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp" },
            { name: "Red Lipstick", price: 13, image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp" },
            { name: "Red Nail Polish", price: 9, image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp" },

            { name: "Calvin Klein CK One", price: 50, image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp" },
            { name: "Chanel Coco Noir Eau De", price: 130, image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp" },
            { name: "Dior J'adore", price: 90, image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp" },
            { name: "Dolce Shine Eau de", price: 70, image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp" },
            { name: "Gucci Bloom Eau de", price: 80, image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp" },

            { name: "Annibale Colombo Bed", price: 1900, image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp" },
            { name: "Annibale Colombo Sofa", price: 2500, image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp" },
            { name: "Bedside Table African Cherry", price: 300, image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp" },
            { name: "Knoll Saarinen Executive Conference Chair", price: 500, image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp" },
            { name: "Wooden Bathroom Sink With Mirror", price: 800, image: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp" },

            { name: "Apple", price: 2, image: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp" },
            { name: "Beef Steak", price: 13, image: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp" },
            { name: "Cat Food", price: 9, image: "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp" },
            { name: "Chicken Meat", price: 10, image: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp" },
            { name: "Cooking Oil", price: 5, image: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp" },

            { name: "Cucumber", price: 1, image: "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp" },
            { name: "Dog Food", price: 11, image: "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp" },
            { name: "Eggs", price: 3, image: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp" },
            { name: "Fish Steak", price: 15, image: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp" },
            { name: "Green Bell Pepper", price: 1, image: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp" },

            { name: "Green Chili Pepper", price: 1, image: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp" },
            { name: "Honey Jar", price: 7, image: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp" },
            { name: "Ice Cream", price: 5, image: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp" },
            { name: "Juice", price: 4, image: "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp" },
            { name: "Kiwi", price: 2, image: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp" }
        ]
    );
    console.log("Products seeded");
};
