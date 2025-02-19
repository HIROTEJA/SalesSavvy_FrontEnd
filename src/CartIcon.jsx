import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/styles.css';

export function CartIcon({ count }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/UserCartPage'); // Navigate to the cart page
  };

  return (
    <button onClick={handleCartClick} className="cart-icon">
      🛒 Cart ({count}) {/* Display the count inside a button */}
    </button>
  );
}