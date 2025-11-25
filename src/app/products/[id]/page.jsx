"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/products/${id}`);
        const data = await res.json();
        setProduct(data.product || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        {/* Skeleton Loader */}
        <div className="animate-pulse space-y-4 w-full max-w-4xl">
          <div className="w-full h-96 bg-gray-300 rounded-lg mx-auto"></div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-full mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    );

  if (!product)
    return <p className="text-center py-20 text-red-500">Product not found.</p>;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button
          onClick={() => router.push("/products")}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          &larr; Back to All Products
        </button>
      </div>

      {/* Product Banner */}
      <div className="max-w-7xl mx-auto px-4">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-fit h-96 object-cover rounded-lg shadow-md mx-auto"
        />
      </div>

      {/* Product Info */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

        <p className="text-gray-700 mt-4">{product.fullDescription}</p>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-start gap-6">
          <p className="text-gray-800 font-semibold">
            Price: <span className="text-green-600">৳ {product.price}</span>
          </p>

          <p className="text-gray-800 font-semibold">
            Added On:{" "}
            <span className="text-gray-600">
              {new Date(product.addTime).toLocaleDateString()}
            </span>
          </p>

          <p className="text-gray-800 font-semibold">
            Category: <span className="text-gray-600">{product.category}</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
