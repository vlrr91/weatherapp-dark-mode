import React from 'react';
import LocationSearch from './SearchCard';
import WeatherCard from './WeatherCard';

import './CitiesList.css';

function CitiesList() {
  return (
    <main className="cities-container">
      <LocationSearch />
      <div className="cities-list">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </main>
  );
}

export default CitiesList;