import React from 'react';
import './HotelCard.css';

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img src={hotel.imagen} alt={hotel.nombre} />
      <h3>{hotel.nombre}</h3>
      <p>Costo: ${hotel.costo}</p>
      <p>Ubicación: {hotel.ubicacion}</p>
    </div>
  );
}

export default HotelCard;
