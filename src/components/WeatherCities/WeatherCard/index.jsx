import React from 'react';
import './WeatherCard.css';

import useFetch from '../../../hooks/useFetch';

function getImageWeatherState(stateCode, night) {
    if (stateCode < 300) return 'images/storm.svg';
    else if (stateCode < 400) return 'images/drizzle.svg';
    else if (stateCode < 600) return 'images/rain.svg';
    else if (stateCode < 700) return 'images/snow.svg';
    else if (stateCode === 800) {
      if (night.indexOf('n')) {
        return 'images/moon.svg';
      }
      return 'images/sun.svg';
    }  
    else return 'images/clouds.svg'
}

function WeatherCard({ city, darkMode }) {
  const [data] = useFetch(buildUrl(city), {});

  function buildUrl(search) {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = process.env.REACT_APP_WEATHER_API;
    return `${baseUrl}?q=${search}&appId=${apiKey}&units=metric`;
  }

  function render(cityData) {
    if (cityData.name) {
      const { humidity, temp } = cityData.main;
      const wind = cityData.wind.speed;
      const name = cityData.name;
      const { id: stateCode, icon: night } = cityData.weather[0];
      const urlImage = getImageWeatherState(stateCode, night);

      const humidityImage = darkMode ? 'images/humidity-n.svg' : 'images/humidity.svg';
      const temperatureImage = darkMode ? 'images/temperature-n.svg' : 'images/temperature.svg';
      const windImage = darkMode ? 'images/wind-n.svg' : 'images/wind.svg';

      return (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{name}</h3>
          </div>
          <div className="card-info">
            <p className="info-temperature">
              <span>{Math.round(temp)}</span>
              <img src={temperatureImage} alt="" />
            </p>
            <img className="card-img" src={urlImage} alt="" />
            <div className="card-info-extra">
              <p className="info-humidity">
                <img className="humidity-logo" src={humidityImage} alt="" />
                {humidity}%
            </p>
              <p className="info-wind">
                <img className="wind-logo" src={windImage} alt="" />
                {wind.toFixed(1)} m/s
            </p>
            </div>
          </div>
        </div>
      );
    } else if(cityData.cod === "404")  {
      return (
        <div className="card">
          <p className="card-message">Ciudad no encontrada: <span>{city}</span></p>
        </div>
      );
    } else {
      return (
        <div className="card">
          <h3 className="card-title">Cargando...</h3>
        </div>
      );
    }

  }

  return render(data);
}

export default WeatherCard;