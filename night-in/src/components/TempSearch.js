import React, { useState } from "react";
import '../styles/tempSearch.css'
import getMovieList from '../api/getMovieLIst';

function TempSearch() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = () => {
          console.log(1)
          //axios.get('https://cmd-shift-weather-app.onrender.com/forecast')
          axios.get('https://api.themoviedb.org/3/movie/16535?api_key=0992277e30f9f06c26121fc3a6165467')
          .then((response) => {
            console.log(2)
            console.log(response)
            console.log(3)
        
          })
          .catch((error) => {
            console.log(error);
          });
        
          return}

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

