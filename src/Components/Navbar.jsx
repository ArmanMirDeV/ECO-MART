"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
  SignInButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Add Products", href: "/addProducts" },
    { name: "Manage Products", href: "/manageProducts" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full m-1 rounded-2xl max-w-7xl mx-auto bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-800">
          EcoMart
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-medium text-gray-700 transition-colors duration-300 hover:text-green-600 ${
                pathname === item.href ? "text-green-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* SignedIn: show user avatar + sign out */}
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton />
              <SignOutButton>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          </SignedIn>

          {/* SignedOut: show SignInButton modal */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
                Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 shadow" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-gray-700 hover:text-green-600 ${
                pathname === item.href ? "text-green-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* SignedIn */}
          <SignedIn>
            <div className="flex flex-col gap-2">
              <UserButton />
              <SignOutButton>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition w-full">
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          </SignedIn>

          {/* SignedOut */}
          <SignedOut>
            <SignInButton mode="modal">
              <button
                onClick={() => setOpen(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition w-full text-center"
              >
                Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
