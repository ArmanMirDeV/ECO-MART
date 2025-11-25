import React from "react";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Rahim H.",
    role: "Happy Customer",
    feedback:
      "EcoMart has amazing products! The delivery is fast, and the quality is top-notch.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sadia K.",
    role: "Eco Enthusiast",
    feedback:
      "I love that EcoMart focuses on eco-friendly products. Makes shopping guilt-free!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Amin R.",
    role: "Frequent Shopper",
    feedback:
      "The secure payment and quick delivery make EcoMart my go-to store for essentials.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-green-600"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-green-600 text-sm mb-2">{testimonial.role}</p>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
