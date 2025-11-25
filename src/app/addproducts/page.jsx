"use client";

import { useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";

export default function AddProduct() {
  const { isLoaded, isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Redirect non-signed-in users
  if (isLoaded && !isSignedIn) return <RedirectToSignIn />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = {
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      fullDescription: e.target.fullDescription.value,
      price: Number(e.target.price.value),
      imageUrl: e.target.imageUrl.value,
      category: e.target.category.value, // added category
      addTime: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Product Added Successfully!");
        e.target.reset();
      } else {
        setMsg("Something went wrong!");
      }
    } catch (error) {
      setMsg("Server error!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-black">
      <h1 className="text-2xl font-semibold mb-4 text-black">
        Add New Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          className="w-full px-4 py-2 border border-black rounded text-black"
          required
        />

        <input
          type="text"
          name="shortDescription"
          placeholder="Short Description"
          className="w-full px-4 py-2 border border-black rounded text-black"
          required
        />

        <textarea
          name="fullDescription"
          placeholder="Full Description"
          className="w-full px-4 py-2 border border-black rounded text-black"
          rows={4}
        ></textarea>

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full px-4 py-2 border border-black rounded text-black"
          required
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          className="w-full px-4 py-2 border border-black rounded text-black"
          required
        />

        {/* Category Dropdown */}
        <select
          name="category"
          className="w-full px-4 py-2 border border-black rounded text-black"
          required
        >
          <option value="">Select Category</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="accessories">Accessories</option>
          <option value="home">Home</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-black py-2 rounded border border-black hover:bg-green-600"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {msg && <p className="mt-4 text-black font-medium">{msg}</p>}
    </div>
  );
}
