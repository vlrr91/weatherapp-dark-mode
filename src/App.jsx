import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherCities from './components/WeatherCities';
import Switch from './components/Header/Switch';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  return (
    <div className={`app ${appClass}`}>
      <Header>
        <Switch setDarkMode={setDarkMode}/>
      </Header>
      <WeatherCities darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
