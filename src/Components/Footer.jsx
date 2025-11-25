import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">EcoMart</h2>
          <p className="text-gray-400">
            EcoMart is your trusted online store for quality products at
            affordable prices. We offer a smooth shopping experience with fast
            delivery, secure checkout, and top-notch customer service.{" "}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Email: support@ecomart.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} EcoMart — All rights reserved.
      </div>
    </footer>
  );
}
