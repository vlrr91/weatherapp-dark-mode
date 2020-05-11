import React from 'react';
import './WeatherCard.css';

function WeatherCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">CUIDAD DE MEXICO</h3>
      </div>
      <div className="card-info">
        <p className="info-temperature">
          <span>25</span>
          <img src="images/temperature.svg" alt="" />
        </p>
        <img className="card-img" src="images/sun.svg" alt="" />
        <div className="card-info-extra">
          <p className="info-humidity">
            <img className="humidity-logo" src="images/humidity.svg" alt="" />
          70%
        </p>
          <p className="info-wind">
            <img className="wind-logo" src="images/wind.svg" alt="" />
          10 m/s
        </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;