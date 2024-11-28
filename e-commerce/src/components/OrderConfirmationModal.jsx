import React from "react";
import { NavLink } from "react-router-dom";

const OrderConfirmationModal = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate estimated delivery date
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5); // Add 5 days

  // Format the date for better readability
  const formattedDeliveryDate = estimatedDelivery.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl text-center">
        <h3 className="text-2xl text-gray-700 font-bold mb-4">
          Order Confirmed!
        </h3>
        <p className="mb-4 text-gray-700 text-md font-semibold">
          Thank you for your purchase.
        </p>
        <p className="mb-4 text-md text-gray-600 ">
          Estimated Delivery: <strong>{formattedDeliveryDate}</strong>
        </p>
        <h4 className="text-lg font-semibold mb-2 text-gray-700">
          Order Summary
        </h4>
        <ul className="list-disc pl-5 mb-4 ml-12 text-left text-gray-600">
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity} x {"\u20B9"}
              {item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p className="font-bold">
          Total: {"\u20B9"}
          {calculateTotal().toFixed(2)}
        </p>

        {/* Navigation Button */}
        <NavLink
          to="/"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 font-serif"
        >
          Close
        </NavLink>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
