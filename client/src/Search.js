import React from "react";
import './Search.css';

function Search({ handleSearch }){

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        handleSearch(searchText);

    }

    return(
        <div className="search">
            <input onChange={handleChange} id="search" type="text" placeholder="Search visual cards..."></input>
        </div>
    )
}

export default Search;