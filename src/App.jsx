import React, { useState } from 'react';
import './App.css';
import FoodCard from './components/FoodCard/FoodCard';
import HotelCard from './components/HotelCard/HotelCard';
import DestinationCard from './components/DestinationCard/DestinationCard';
import Summary from './components/Summary/Summary';
import planDeViajes from './data'; 

function App() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="app">
      <div className="selection-section">
        <h2>Seleccione su Alimentación</h2>
        <div className="cards">
          {planDeViajes.alimentacion.map((food, index) => (
            <div
              key={index}
              onClick={() => setSelectedFood(food)}
              className={`card ${selectedFood === food ? 'selected' : ''}`}
            >
              <FoodCard food={food} />
            </div>
          ))}
        </div>

        <h2>Seleccione su Hotel</h2>
        <div className="cards">
          {planDeViajes.hoteles.map((hotel, index) => (
            <div
              key={index}
              onClick={() => setSelectedHotel(hotel)}
              className={`card ${selectedHotel === hotel ? 'selected' : ''}`}
            >
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>

        <h2>Seleccione su Destino</h2>
        <div className="cards">
          {Object.values(planDeViajes.destinosdla).map((destination, index) => (
            <div
              key={index}
              onClick={() => setSelectedDestination(destination)}
              className={`card ${selectedDestination === destination ? 'selected' : ''}`}
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>

      <div className="summary-section">
        <Summary
          selectedFood={selectedFood}
          selectedHotel={selectedHotel}
          selectedDestination={selectedDestination}
        />
      </div>
    </div>
  );
}

export default App;
