"use client";

import { useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import Loader from "@/components/Loader";
// import toast, { Toaster } from "react-hot-toast";

export default function AddProduct() {
  const { isLoaded, isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);

  // Redirect non-signed-in users
  if (isLoaded && !isSignedIn) return <RedirectToSignIn />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      fullDescription: e.target.fullDescription.value,
      price: Number(e.target.price.value),
      imageUrl: e.target.imageUrl.value,
      category: e.target.category.value,
      addTime: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://eco-mart-server-lyart.vercel.app/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Product Added Successfully!");
        e.target.reset();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Server error!");
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
          className="w-full bg-green-500 text-black py-2 rounded border border-black hover:bg-green-600 flex justify-center items-center gap-2"
        >
          {loading && <Loader />}
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
