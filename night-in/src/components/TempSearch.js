import React, { useState } from "react";
import '../styles/tempSearch.css';
import getMovieList from '../api/getMovieLIst';
import getMovieInfo from '../api/getMovieInfo';


function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = () => {
          }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={searchTerm} onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
            
        </div>
    )
}

export default TempSearch

