import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">All Gift Cards</h1>
      <p className="text-center text-gray-600 mb-8">
        Shop our collection of Amazon and Binance gift cards with 25% profit margin.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;