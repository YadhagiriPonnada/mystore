import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, onRate }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          onClick={() => onRate(i)}
          className={`w-5 h-5 cursor-pointer ${i <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
