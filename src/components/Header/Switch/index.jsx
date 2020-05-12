import React, { useRef } from 'react';
import './Switch.css';

function Switch({ checked, setDarkMode }) {
  const checkboxRef = useRef(null); 

  function handleChange() {
    setDarkMode(checkboxRef.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Modo Oscuro</p>
      <input
        ref={checkboxRef}
        checked={checked}
        type="checkbox" 
        className="checkbox" 
        id="checkbox"
        onChange={handleChange}/>
      <label className="switch" htmlFor="checkbox"></label>   
    </div>
  );
}

export default Switch;