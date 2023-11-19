import React, { useState } from "react";
import getMovieList from '../api/getMovieLIst';
import getMovieInfo from "../api/getMovieInfo";
import getMoviesByGenre from "../api/getMoviesByGenre";

function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = () => {
        getMovieList();
        getMovieInfo(16535);
        getMoviesByGenre(28);
    }

    return(
        <div>
            <input type="text" value={searchTerm} onChange={handleChange}/>
            <button type="button" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default TempSearch