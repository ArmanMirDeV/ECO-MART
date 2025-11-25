"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full m-1 rounded-2xl max-w-7xl mx-auto bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          EcoMart
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-black text-gray-700">
            Home
          </Link>
          <Link href="/products" className="hover:text-black text-gray-700">
            Products
          </Link>
          <Link href="/about" className="hover:text-black text-gray-700">
            About
          </Link>
          <Link href="/contact" className="hover:text-black text-gray-700">
            Contact
          </Link>
          <Link href="/login" className="hover:text-black text-gray-700">
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 shadow" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-black"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
