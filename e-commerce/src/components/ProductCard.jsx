import React, { useState } from "react";

import Star from "../Helper/Star";
import { MdCurrencyRupee } from "react-icons/md";

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [added, setAdded] = useState(false);
  const [addedWhishList, setAddedWhishList] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist(product);
    setAddedWhishList(true);
    setTimeout(() => setAddedWhishList(false), 2000);
  };

  return (
    <div className="flex flex-col h-fit bg-white shadow-lg  rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 bject-cover transition-transform hover:scale-110 duration-300 p-3 "
        />
        <div className="absolute top-10 right-6 bg-white text-black text-xs font-semibold py-1 px-2 rounded-lg  duration-300 tracking-wide ">
          {product.category}
        </div>
        <div className="absolute left-6 bottom-6 bg-white text-black text-xs font-semibold py-1 px-2 rounded-lg  duration-300  tracking-wide ">
          {product.brand}
        </div>
      </div>

      <div className="p-4">
        <div className="text-md flex justify-between items-center">
          <h2 className="text-gray-600 font-bold ">{product.title}</h2>
          <p className="text-indigo-600 font-semibold flex items-center ">
            {" "}
            <MdCurrencyRupee />
            {product.price}
          </p>
        </div>
        <div className="flex justify-center  items-center mt-4 gap-1">
          <Star star={product.rating} />
        </div>
        <button
          onClick={handleAddToCart}
          className={`mt-4 w-full font-serif ${
            added
              ? "bg-yellow-500"
              : "bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform duration-300"
          } text-white font-semibold py-2 rounded-lg`}
        >
          {added ? "Added!" : "Add to Cart"}
        </button>

        <button
          onClick={handleAddToWishlist}
          className={`mt-4 w-full font-serif ${
            addedWhishList
              ? "bg-orange-500"
              : "bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform duration-300"
          } text-white font-semibold py-2 rounded-lg`}
        >
          {addedWhishList ? "Added!" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
