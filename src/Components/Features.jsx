import React from "react";
import { Truck, Shield, Award } from "lucide-react";

const featuresData = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Get your products delivered quickly and reliably anywhere in Bangladesh.",
    icon: (
      <Truck className="w-10 h-10 text-green-600 transition-colors duration-300" />
    ),
  },
  {
    id: 2,
    title: "Secure Payment",
    description:
      "Your transactions are safe with our secure and encrypted payment system.",
    icon: (
      <Shield className="w-10 h-10 text-green-600 transition-colors duration-300" />
    ),
  },
  {
    id: 3,
    title: "Top Quality Products",
    description:
      "We carefully select products to ensure high quality and customer satisfaction.",
    icon: (
      <Award className="w-10 h-10 text-green-600 transition-colors duration-300" />
    ),
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Why Choose EcoMart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:shadow-xl hover:scale-105 hover:bg-green-50"
            >
              <div className="mb-4 group-hover:text-green-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-green-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
