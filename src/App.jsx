import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import RatingsPage from './pages/RatingsPage';

function App() {
  const [ratings, setRatings] = useState({});

  const ratedProducts = Object.entries(ratings).map(([id, rating]) => ({
    id: parseInt(id),
    userRating: rating,
  }));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/ratings" element={<RatingsPage ratedProducts={ratedProducts} />} />
      </Routes>
    </Router>
  );
}

export default App;
