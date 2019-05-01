import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img src='iglogo.jpg' className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;