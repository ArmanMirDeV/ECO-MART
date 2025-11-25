import React from "react";
import Link from "next/link";

// Sample product data (you can import from a shared products file)
const products = [
  {
    id: 1,
    name: "Eco-Friendly Notebook",
    price: 250,
    image: "https://m.media-amazon.com/images/I/81a03ciX-dL.jpg",
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 500,
    image:
      "https://img.drz.lazcdn.com/static/bd/p/cc3f5519a0c7ff9aadcebeeeb5fea735.jpg_720x720q80.jpg",
  },
  {
    id: 3,
    name: "Organic Cotton Tote Bag",
    price: 400,
    image:
      "https://www.intelligentchange.com/cdn/shop/products/4X5-WebRes-Intelligent-Change-Tote-Bags-1_301b012d-03b9-4917-96ff-e911c5783d56.jpg?v=1671127106&width=1120",
  },
  {
    id: 4,
    name: "Bamboo Toothbrush",
    price: 150,
    image: "https://m.media-amazon.com/images/I/81Plqxp7J2S._SL1500_.jpg",
  },
];

const ProductsPreview = () => {
  // Show only the first 3 items for preview
  const previewProducts = products.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {previewProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <Link href={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-fill cursor-pointer"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-700 font-medium mt-2">
                  ৳ {product.price}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className="mt-12">
          <Link
            href="/products"
            className="text-green-600 font-semibold hover:underline"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
