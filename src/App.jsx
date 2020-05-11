import React from 'react';
import './App.css';
import Header from './components/Header';
import ListLocations from './components/CitiesList';
import Switch from './components/Header/Switch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header>
        <Switch />
      </Header>
      <ListLocations />
      <Footer />
    </div>
  );
}

export default App;
