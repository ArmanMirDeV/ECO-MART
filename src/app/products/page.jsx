import Link from "next/link";

// Products data
export const products = [
  {
    id: 1,
    name: "Eco-Friendly Notebook",
    price: 250,
    image: "https://m.media-amazon.com/images/I/81a03ciX-dL.jpg",
    description: "A sustainable notebook made from recycled materials.",
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 500,
    image:
      "https://img.drz.lazcdn.com/static/bd/p/cc3f5519a0c7ff9aadcebeeeb5fea735.jpg_720x720q80.jpg",
    description: "Eco-friendly water bottle made of BPA-free stainless steel.",
  },
  {
    id: 3,
    name: "Organic Cotton Tote Bag",
    price: 400,
    image:
      "https://www.intelligentchange.com/cdn/shop/products/4X5-WebRes-Intelligent-Change-Tote-Bags-1_301b012d-03b9-4917-96ff-e911c5783d56.jpg?v=1671127106&width=1120",
    description: "Durable tote bag made from 100% organic cotton.",
  },
  {
    id: 4,
    name: "Bamboo Toothbrush",
    price: 150,
    image: "https://m.media-amazon.com/images/I/81Plqxp7J2S._SL1500_.jpg",
    description: "Eco-friendly bamboo toothbrush.",
  },
];

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      
          <h2 className="text-4xl text-center text-green-700 font-bold p-4" >ALL Products</h2>
          <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-fill"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-700 font-medium mt-2">
                ৳ {product.price}
              </p>
              {/* Link to dynamic route */}
              <Link
                href={`/products/${product.id}`}
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductsPage;
