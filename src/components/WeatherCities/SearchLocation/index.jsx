import React, { useRef, useState } from 'react';
import './SearchLocation.css';

function SearchLocation({ addCity }) {
  const searchInput = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let searchText = searchInput.current.value.trim();

    if (searchText) {
      addCity(searchText);
      setErrorMessage(null);
    } else {
      setErrorMessage('Ingresa el nombre de la ciudad');
    }

    searchInput.current.value = '';
  }

  return (
    <div  className="search-container"> 
      <div className="search-card">
        <form onSubmit={handleSubmit}>
          <div className="search-form">
            <input
              ref={searchInput}
              className="search-input"
              type="text"
              placeholder="busca tu ciudad"
            />
            <button className="search-button">Buscar</button>
          </div>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default SearchLocation;