import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between">
        <Link to="/" className="text-xl">Shopping App</Link>
        <div>
          <Link to="/auth" className="mr-4">Login</Link>
          <Link to="/ratings">Your Ratings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
