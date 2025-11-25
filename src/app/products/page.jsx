"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://eco-mart-server-lyart.vercel.app/products"
        );
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filtered products based on search & category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter
      ? product.category === categoryFilter
      : true;

    return matchesSearch && matchesCategory;
  });

  // Skeleton Loader
  const skeletonArray = Array.from({ length: 8 });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Title & Short Description */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-700">ALL PRODUCTS</h1>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Explore our wide range of products. Use the search and filter options
          to quickly find what you need.
        </p>
      </header>

      {/* Search Bar & Category Filter */}
      <section className="max-w-7xl mx-auto px-4 mb-8 flex flex-col sm:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-black rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full sm:w-1/4 px-4 py-2 border border-black rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">All Categories</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="accessories">Accessories</option>
          <option value="home">Home</option>
        </select>
      </section>

      {/* Products Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          skeletonArray.map((_, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-5 shadow-sm animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
              <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          ))
        ) : filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-600">
            No products found
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white border rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {product.shortDescription}
                </p>

                <p className="text-gray-700 font-medium mt-2">
                  ৳ {product.price}
                </p>

                <Link
                  href={`/products/${product._id}`}
                  className="mt-4 bg-green-600 text-white w-32 h-12 flex items-center justify-center rounded-md font-semibold hover:bg-green-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default ProductsPage;
