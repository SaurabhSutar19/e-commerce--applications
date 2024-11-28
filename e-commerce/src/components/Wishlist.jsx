import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Wishlist = ({ wishlist, onRemove, onAddToCart }) => {
  // Maintain a per-item "added" state for feedback
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (item) => {
    onAddToCart(item);

    // Update the "added" state for the specific item
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));

    // Reset "added" state after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <div className="max-w-[1280px] max-h-[1280px] mx-auto mt-10 bg-white shadow-md rounded-lg p-10  my-auto">
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
            className="flex justify-between items-center mb-4 ml-16"
          >
            {/* Thumbnail */}
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded mr-4"
            />
            {/* Product Name */}
            <span className="flex-1 ml-10 text-gray-600 text-lg font-semibold">
              {item.title}
            </span>
            {/* "Move to Cart" Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className={`p-2  mr-16  ${
                addedItems[item.id]
                  ? "bg-yellow-500"
                  : "bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform duration-300"
              } text-white font-serif py-2 rounded-lg`}
            >
              {addedItems[item.id] ? "Added!" : "Add to Cart"}
            </button>
            {/* Remove Button */}
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 mr-16 hover:text-red-600 hover:scale-105 transition-transform duration-300"
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
