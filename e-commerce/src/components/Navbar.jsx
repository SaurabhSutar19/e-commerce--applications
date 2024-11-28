import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, wishlistCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">
          Store
        </Link>
        <button className="lg:hidden p-2" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} space-x-6`}>
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/cart" className="hover:bg-gray-700 px-3 py-2 rounded-md">
            Cart ({cartCount})
          </Link>
          <Link
            to="/wishlist"
            className="hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Wishlist ({wishlistCount})
          </Link>
          <Link
            to="/checkout"
            className="hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
