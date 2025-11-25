"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full bg-[#fdf1e6] rounded-2xl flex items-center justify-between px-12 py-10">
      {/* Left Section */}
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-green-900 leading-snug">
          Grab Upto 50% Off On <br /> Selected Products
        </h2>

        <Link
          href={"/products"}
          className="mt-6 px-6 py-2 bg-green-900 text-white rounded-md hover:bg-green-800 transition"
        >
          <button className="mt-5" >Buy Now</button>
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="w-[400px] h-auto">
        <img
          src="/banner-girl.png" // Update path based on your file
          alt="Headphone Girl"
          className="object-contain"
        />
      </div>
    </div>
  );
}
