import React from 'react';

const SearchBar = () => {
    return(
        <div className='search-bar'>
            <img src='' className='logo'></img>
            <img src='' className='name'></img>
        <input type='text' 
        placeholder='search...' 
        /> 
            <i className='fa fa-compass'/>
            <i className="fa fa-heart" />
            <i className="fa fa-user-circle" />
        </div>

    )
}

export default SearchBar