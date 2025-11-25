"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const ProductDetailsPage = () => {
  const { id } = useParams(); 
  console.log(id);
  
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
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

  if (loading) return <p className="text-center py-20">Loading...</p>;
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
          className="w-96 h-96 object-cover rounded-lg shadow-md"
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
