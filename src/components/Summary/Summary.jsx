import React from 'react';
import './Summary.css';

function Summary({ selectedFood, selectedHotel, selectedDestination }) {
  const totalPrice =
    (selectedFood?.precio || 0) +
    (selectedHotel?.costo || 0) +
    (selectedDestination?.precio || 0);

  return (
    <div className="summary">
      <h2>Resumen del Viaje</h2>
      <div className="summary-item">
        <h3>Alimentación:</h3>
        {selectedFood ? (
          <p>{selectedFood.titulo} - ${selectedFood.precio}</p>
        ) : (
          <p>No seleccionado</p>
        )}
      </div>
      <div className="summary-item">
        <h3>Hotel:</h3>
        {selectedHotel ? (
          <p>{selectedHotel.nombre} - ${selectedHotel.costo}</p>
        ) : (
          <p>No seleccionado</p>
        )}
      </div>
      <div className="summary-item">
        <h3>Destino:</h3>
        {selectedDestination ? (
          <p>{selectedDestination.nombre} - ${selectedDestination.precio}</p>
        ) : (
          <p>No seleccionado</p>
        )}
      </div>
      <div className="summary-total">
        <h3>Total del Viaje: ${totalPrice}</h3>
      </div>
    </div>
  );
}

export default Summary;
