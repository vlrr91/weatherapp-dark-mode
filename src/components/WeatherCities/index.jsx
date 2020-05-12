import React, { useState } from 'react';
import SearchLocation from './SearchLocation';
import WeatherCard from './WeatherCard';

import './WeatherCities.css';

const defaultCities = [
  {
    id: 0,
    name: 'bogotá'
  },
  {
    id: 1,
    name: 'oymyakon'
  },
  {
    id: 2,
    name: 'barcelona',
  },
  {
    id: 3,
    name: 'tokio'
  }
];

function WeatherCities({ darkMode }) {
  const [cities, setCities] = useState(defaultCities);

  function addCity(city) {
    const newCity = { id: cities.length, name: city }
    setCities([newCity, ...cities]);
  }

  return (
    <main className="cities-container">
      <SearchLocation addCity={addCity} />
      <div className="cities-list">
        {cities.map(city => 
          <WeatherCard 
            key={city.id} 
            city={city.name}
            darkMode={darkMode}
          />
        )}
      </div>
    </main>
  );
}

export default WeatherCities;