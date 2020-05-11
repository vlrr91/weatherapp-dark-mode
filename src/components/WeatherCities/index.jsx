import React from 'react';
import LocationSearch from './SearchCard';
import WeatherCard from './WeatherCard';

import './WeatherCities.css';

function WeatherCities() {
  return (
    <main className="cities-container">
      <LocationSearch />
      <div className="cities-list">
        <WeatherCard city={'bogota'}/>
        <WeatherCard city={'oymyakon'}/>
        <WeatherCard city={'barcelona'}/>
        <WeatherCard city={'tokio'}/>
      </div>
    </main>
  );
}

export default WeatherCities;