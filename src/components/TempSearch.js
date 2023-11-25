import React, { useState } from "react";
import '../styles/tempSearch.css'
import getMoviesByGenre from "../api/getMoviesByGenre";

function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        console.log(1)
        console.log(getMoviesByGenre(28, 10));
        console.log('end')
    }

    return(
        <div className="temp-search">
        <form>
        <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="What 'ya fancy?"
        />
        {/* <button onClick={handleSearch} className="button">Search</button> */}
        <button type="button" onClick={handleSearch}>Search</button>
        </form>
            
        </div>
    )
}

export default TempSearch
