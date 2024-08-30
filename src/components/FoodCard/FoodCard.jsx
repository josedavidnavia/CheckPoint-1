import React from 'react';
import './FoodCard.css';

function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img src={food.imagen} alt={food.titulo} />
      <h3>{food.titulo}</h3>
      <p>Precio: ${food.precio}</p>
    </div>
  );
}

export default FoodCard;
