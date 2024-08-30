import React from 'react';
import './DestinationCard.css';

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.imagen} alt={destination.nombre} />
      <h3>{destination.nombre}</h3>
      <p>Precio: ${destination.precio}</p>
    </div>
  );
}

export default DestinationCard;
