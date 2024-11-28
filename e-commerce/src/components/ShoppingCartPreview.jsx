import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
const ShoppingCartPreview = ({ cart, setCart }) => {
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-[1280px] max-h-[1280px] mx-auto mt-10 bg-white shadow-md rounded p-10 my-auto">
      <h2 className="text-2xl text-center font-bold mb-4 text-gray-800 tracking-wide ">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg font-semibold text-gray-600 ">
          Your cart is empty!
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <div className="mt-4 border-t pt-4 flex justify-between items-center">
            <span className="text-lg font-semibold">Total :</span>
            <span className="text-lg font-semibold flex items-center">
              <MdCurrencyRupee />
              {calculateTotal()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// CartItem Component
const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex items-center border-b py-2">
      <img
        src={item.image}
        alt={item.name}
        className="w-14 h-14 rounded object-cover ml-20"
      />
      <div className="ml-16 flex-grow">
        <h3 className="font-semibold">{item.title}</h3>
        <p className=" flex items-center  text-sm text-gray-500">
          <MdCurrencyRupee />
          {item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center space-x-2 mr-16">
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 hover:scale-105 transition-transform duration-300 "
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 hover:scale-105 transition-transform duration-300  "
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:text-red-600 hover:scale-105 transition-transform duration-300 mr-20"
      >
        <FaTrashAlt className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ShoppingCartPreview;
