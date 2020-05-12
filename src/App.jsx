import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherCities from './components/WeatherCities';
import Switch from './components/Header/Switch';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const appClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  function changeMode(mq) {
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-colors-scheme: dark)');
    mq.addListener(changeMode);
    setDarkMode(mq.matches);

    return () => {
      mq.removeListener(changeMode);
    }
  }, []);

  return (
    <div className={`app ${appClass}`}>
      <Header>
        <Switch
          checked={darkMode} 
          setDarkMode={setDarkMode} />
      </Header>
      <WeatherCities darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
