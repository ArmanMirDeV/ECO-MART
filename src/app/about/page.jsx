import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Eco Mart</h1>
          <p className="text-lg">
            Eco Mart is your trusted online store for quality products at
            affordable prices.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Eco Mart, our mission is to provide a seamless online shopping
            experience. We bring you high-quality products, fast delivery, and
            secure checkout to make your life easier and smarter.
          </p>

          <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We envision Eco Mart as the go-to online marketplace for sustainable
            and affordable products. Our goal is to make shopping convenient,
            reliable, and enjoyable for everyone.
          </p>

          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>High-quality products carefully selected for our customers.</li>
            <li>Fast, reliable delivery across Bangladesh.</li>
            <li>Secure checkout and easy returns.</li>
            <li>Exceptional customer support available 24/7.</li>
          </ul>

          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
