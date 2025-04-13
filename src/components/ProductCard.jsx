import React from 'react';
import StarRating from './StarRating';

const ProductCard = ({ product, onRate, addToCart }) => {
  return (
    <div className="border p-4 rounded-xl shadow-md">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <StarRating rating={product.userRating || 0} onRate={(r) => onRate(product.id, r)} />
      <button onClick={() => addToCart(product.id)} className="bg-green-500 text-white mt-2 w-full py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
