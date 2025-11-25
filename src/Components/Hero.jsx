import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[600px] rounded-2xl mb-5  flex items-start"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-e-commerce-aesthetics-mobile-friendly-shopping-carts-promotional-banners-more-image_3904563.jpg')",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 pt-16 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-black drop-shadow-lg transform transition duration-500 hover:scale-105 hover:text-green-600">
          Welcome to EcoMart
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-black drop-shadow-md transform transition duration-500 hover:scale-102 hover:text-green-500">
          Your one-stop shop for eco-friendly and sustainable products
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
