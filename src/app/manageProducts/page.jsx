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
      setLoading(true);
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to load products", "error");
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

    if (!confirm.isConfirmed) return;

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
    } catch (err) {
      Swal.fire("Error", "Server error", "error");
    }
  };

  // Update product
  const handleUpdate = async (product) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Product",
      html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" value="${
          product.title
        }">
        <input id="swal-short" class="swal2-input" placeholder="Short Description" value="${
          product.shortDescription
        }">
        <input id="swal-full" class="swal2-input" placeholder="Full Description" value="${
          product.fullDescription
        }">
        <input id="swal-price" type="number" class="swal2-input" placeholder="Price" value="${
          product.price
        }">
        <input id="swal-image" class="swal2-input" placeholder="Image URL" value="${
          product.imageUrl
        }">
        <select id="swal-category" class="swal2-input">
          <option value="smartphones" ${
            product.category === "smartphones" ? "selected" : ""
          }>Smartphones</option>
          <option value="laptops" ${
            product.category === "laptops" ? "selected" : ""
          }>Laptops</option>
          <option value="accessories" ${
            product.category === "accessories" ? "selected" : ""
          }>Accessories</option>
          <option value="home" ${
            product.category === "home" ? "selected" : ""
          }>Home</option>
        </select>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => ({
        title: document.getElementById("swal-title").value,
        shortDescription: document.getElementById("swal-short").value,
        fullDescription: document.getElementById("swal-full").value,
        price: Number(document.getElementById("swal-price").value),
        imageUrl: document.getElementById("swal-image").value,
        category: document.getElementById("swal-category").value,
      }),
    });

    if (!formValues) return;

    try {
      const res = await fetch(`http://localhost:5000/products/${product._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire("Updated!", "Product has been updated.", "success");
        setProducts(
          products.map((p) =>
            p._id === product._id ? { ...p, ...formValues } : p
          )
        );
      } else {
        Swal.fire("Error", data.message, "error");
      }
    } catch (err) {
      Swal.fire("Error", "Server error", "error");
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

              <div className="flex justify-between mt-4 gap-2">
                <Link
                  href={`/products/${product._id}`}
                  className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition text-sm flex-1 text-center"
                >
                  View
                </Link>
                <button
                  onClick={() => handleUpdate(product)}
                  className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition text-sm flex-1 text-center"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition text-sm flex-1 text-center"
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
