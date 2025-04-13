import React from 'react';
import ProductCard from '../components/ProductCard';

const RatingsPage = ({ ratedProducts }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Ratings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ratedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onRate={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default RatingsPage;
