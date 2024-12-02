import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Wishlist = ({ wishlist, onRemove, onAddToCart }) => {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (item) => {
    onAddToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <div className="max-w-[1280px] mx-auto mt-10 bg-white shadow-md rounded-lg p-6 sm:p-10">
      <h3 className="text-2xl text-gray-700 font-semibold mb-4 text-center">
        Wishlist
      </h3>
      {wishlist.length === 0 ? (
        <p className="text-center text-xl font-semibold text-gray-600">
          Your wishlist is empty!
        </p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 sm:mb-4"
          >
            {/* Thumbnail */}
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded mb-4 sm:mb-0 sm:mr-4"
            />
            {/* Product Name */}
            <span className="flex-1 text-gray-600 text-lg font-semibold text-center sm:text-left sm:ml-6 mb-2 sm:mb-0">
              {item.title}
            </span>
            {/* "Move to Cart" Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className={`p-2 sm:mr-4 w-full sm:w-auto ${
                addedItems[item.id]
                  ? "bg-yellow-500"
                  : "bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform duration-300"
              } text-white font-serif py-2 rounded-lg mb-2 sm:mb-0`}
            >
              {addedItems[item.id] ? "Added!" : "Add to Cart"}
            </button>
            {/* Remove Button */}
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-600 hover:scale-105 transition-transform duration-300"
            >
              <FaTrashAlt className="h-5 w-5" />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
