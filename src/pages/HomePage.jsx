import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState({});
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  const handleRate = (id, rating) => {
    setRatings({ ...ratings, [id]: rating });
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'asc') return a.price - b.price;
    if (sort === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <select onChange={(e) => setSort(e.target.value)} className="mb-4 border p-2 rounded">
        <option value="">Sort By</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{ ...product, userRating: ratings[product.id] }}
            onRate={handleRate}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
