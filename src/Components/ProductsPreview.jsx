"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ProductsPreview = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://eco-mart-server-lyart.vercel.app/products"
        );
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const previewProducts = products.slice(0, 3); // Show only first 3 for preview

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Featured Products
        </h2>

        {loading && <p className="text-gray-600">Loading products...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && previewProducts.length === 0 && (
          <p className="text-gray-600">No products available.</p>
        )}

        {!loading && !error && previewProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {previewProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <Link href={`/products/${product._id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-72 object-cover cursor-pointer"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 font-medium mt-2">
                    ৳ {product.price}
                  </p>
                  <Link
                    href={`/products/${product._id}`}
                    className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

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
