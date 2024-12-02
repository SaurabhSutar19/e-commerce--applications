import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, wishlistCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  const menuItems = [
    { name: "Home", path: "/" },
    { name: `Cart (${cartCount})`, path: "/cart" },
    { name: `Wishlist (${wishlistCount})`, path: "/wishlist" },
    { name: "Checkout", path: "/checkout" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold">
          Store
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
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
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          id="mobile-menu"
          className={`absolute top-0 left-0 w-full bg-gray-800 p-6 space-y-4 z-40 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:transform-none lg:relative lg:top-auto lg:left-auto lg:w-auto lg:bg-transparent lg:flex lg:space-x-6 transition-transform duration-300`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={closeMenu} // Close the menu on link click
              className="block lg:inline hover:bg-gray-700 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
