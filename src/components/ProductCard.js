import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const discountPercent = Math.round(
    ((product.faceValue - product.price) / product.faceValue) * 100
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      {/* Image Section */}
      <div className="h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
      </div>
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
            {product.brand}
          </span>
          <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
            {discountPercent}% OFF
          </span>
        </div>
        <h3 className="text-xl font-bold mt-3">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">
          Face value: ${product.faceValue.toLocaleString()}
        </p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-indigo-600">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-gray-400 line-through ml-2">
            ${product.faceValue.toLocaleString()}
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;