import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        
      </div>

      <div>
        <input type="text" placeholder="🔎             Search" onKeyDown={props.searchPosts} />
      </div>
    </div>
  );
};

export default SearchBar;