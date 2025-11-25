"use client";

import { useEffect, useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import Link from "next/link";
import Swal from "sweetalert2";

export default function ManageProducts() {
  const { isSignedIn, isLoaded } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Clerk auth protection
  if (isLoaded && !isSignedIn) return <RedirectToSignIn />;

  // Fetch all products
  const loadProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSignedIn) loadProducts();
  }, [isSignedIn]);

  // Delete product
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          Swal.fire("Deleted!", data.message, "success");
          setProducts(products.filter((p) => p._id !== id));
        } else {
          Swal.fire("Error", data.message, "error");
        }
      } catch (error) {
        Swal.fire("Error", "Server error", "error");
      }
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Manage Products
        </h1>

        {products.length === 0 && (
          <p className="text-center text-gray-600">No products found</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {product.shortDescription}
              </p>
              <p className="text-gray-700 font-medium mt-2">
                ৳ {product.price}
              </p>

              <div className="flex justify-between mt-4">
                <Link
                  href={`/products/${product._id}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-sm flex-1 text-center mr-2"
                >
                  View
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm flex-1 text-center"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
