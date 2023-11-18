import React, { useState } from "react";
import '../styles/tempSearch.css';
import getMovieList from '../api/getMovieLIst';
import getMovieInfo from '../api/getMovieInfo';


function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        const movieList = getMovieList();
        const filmDetails = getMovieInfo(16535);

        console.log(filmDetails)
          }

    return(
        <div>
                <input type="text" value={searchTerm} onChange={handleChange}/>
                <button type="button" onClick={handleSearch}>Search</button>
            
        </div>
    )
}

export default TempSearch

