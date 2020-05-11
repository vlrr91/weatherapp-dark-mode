import React from 'react';
import './SearchCard.css';

function SearchCard() {
  return (
    <div  className="search-container"> 
      <div className="search-card">
        <form>
          <div className="search-form">
            <input className="search-input" type="text" placeholder="busca tu ciudad"/>
            <button className="search-button">Buscar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchCard;