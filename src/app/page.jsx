"use client";

import { useEffect, useState } from "react";
import Banner from "@/Components/Banner";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import ProductsPreview from "@/Components/ProductsPreview";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay for demonstration or wait for all child data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay for loader
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        {/* Skeleton Loader */}
        <div className="animate-pulse space-y-6 w-full max-w-7xl p-4">
          <div className="h-64 bg-gray-300 rounded-md"></div>
          <div className="h-32 bg-gray-300 rounded-md"></div>
          <div className="h-48 bg-gray-300 rounded-md"></div>
          <div className="h-24 bg-gray-300 rounded-md"></div>
          <div className="h-48 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen max-w-7xl mx-auto items-center justify-center bg-zinc-50 font-sans rounded-2xl mt-2">
      <Hero />
      <Banner />
      <ProductsPreview />
      <Features />
      <Testimonials />
    </div>
  );
}
