import React from 'react';
import './Switch.css';

function Switch() {
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Modo Oscuro</p>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox"></label>   
    </div>
  );
}

export default Switch;