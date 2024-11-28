import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Store. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-3 text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="mx-3 text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="mx-3 text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
