import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CheckoutForm = ({ cart }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    creditCard: "",
    expiryDate: "",
    cvv: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Name is required.";
    } else if (name === "address" && !value.trim()) {
      error = "Address is required.";
    } else if (name === "creditCard" && !/^\d{16}$/.test(value)) {
      error = "Credit Card Number must be 16 digits.";
    } else if (
      name === "expiryDate" &&
      !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)
    ) {
      error = "Expiry Date must be in MM/YY format.";
    } else if (name === "cvv" && !/^\d{3}$/.test(value)) {
      error = "CVV must be 3 digits.";
    } else if (name === "contact" && !/^\d{10}$/.test(value)) {
      error = "Contact number must be 10 digits.";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const fields = [
      "name",
      "address",
      "creditCard",
      "expiryDate",
      "cvv",
      "contact",
    ];
    let valid = true;

    fields.forEach((field) => {
      validateField(field, formData[field]);
      if (!formData[field] || errors[field]) {
        valid = false;
      }
    });

    return valid;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate order submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg max-w-lg sm:max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-xl font-semibold text-center text-gray-600 hover:text-indigo-600">
          Checkout
        </h3>

        {/* Name Field */}
        <div>
          <label className="block text-gray-600 font-bold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`border-2 rounded-lg p-2 w-full text-sm ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-indigo-500`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-gray-600 font-bold mb-1">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={`border-2 rounded-lg p-2 w-full text-sm ${
              errors.address ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-indigo-500`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* Payment Details */}
        <div>
          <h4 className="text-lg font-semibold text-center sm:text-left text-gray-700 mb-2">
            Payment Details
          </h4>
          <label className="block text-gray-600 font-bold mb-1">
            Credit Card Number
          </label>
          <input
            type="text"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleInputChange}
            className={`border-2 rounded-lg p-2 w-full text-sm ${
              errors.creditCard ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-indigo-500`}
            maxLength={16}
          />
          {errors.creditCard && (
            <p className="text-red-500 text-sm">{errors.creditCard}</p>
          )}
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 font-bold mb-1">
              Expiry Date (MM/YY)
            </label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className={`border-2 rounded-lg p-2 w-full text-sm ${
                errors.expiryDate ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-indigo-500`}
              maxLength={5}
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm">{errors.expiryDate}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 font-bold mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className={`border-2 rounded-lg p-2 w-full text-sm ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-indigo-500`}
              maxLength={3}
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>
        </div>

        {/* Contact Field */}
        <div>
          <label className="block text-gray-600 font-bold mb-1">
            Contact Number
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className={`border-2 rounded-lg p-2 w-full text-sm ${
              errors.contact ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-indigo-500`}
            maxLength={10}
          />
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact}</p>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <h4 className="text-lg font-semibold text-center sm:text-left text-gray-700">
            Order Summary
          </h4>
          <ul className="list-disc text-sm pl-5">
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} x {"\u20B9"}
                {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="text-right font-bold">
            Total: {"\u20B9"}
            {calculateTotal().toFixed(2)}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded-lg text-white ${
            isSubmitting
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          }`}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      {/* Order Confirmation */}
      {!isSubmitting && (
        <div className="mt-4 text-center">
          <NavLink
            to="/order-confirmation"
            className="text-blue-600 hover:underline"
          >
            View Order Confirmation
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
