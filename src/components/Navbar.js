import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Replace this URL with your actual company logo URL
  const logoUrl = "https://i.postimg.cc/t421DGzN/Chat-GPT-Image-Mar-26-2026-02-14-09-PM.png";

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 sm:py-3 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logoUrl} 
              alt="DR Gifted Team" 
              className="h-8 sm:h-10 w-auto rounded-full border border-gray-200 shadow-sm"
            />
            <span className="text-xl sm:text-2xl font-bold text-indigo-600 hidden sm:inline">
              DR Gifted Team
            </span>
          </Link>

          {/* Navigation Links & Cart */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link to="/" className="text-sm sm:text-base hover:text-indigo-600 transition">
              Home
            </Link>
            <Link to="/products" className="text-sm sm:text-base hover:text-indigo-600 transition">
              Products
            </Link>
            <Link to="/contact" className="text-sm sm:text-base hover:text-indigo-600 transition">
              Contact
            </Link>
            <Link to="/about" className="text-sm sm:text-base hover:text-indigo-600 transition">
              About
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;