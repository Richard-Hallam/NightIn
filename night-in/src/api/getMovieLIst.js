import axios from "axios";
import apiKeys from './apikey';

const api_key = apiKeys.key;

function getMovieList(){
    const discoverMoviesUrl = 'https://api.themoviedb.org/3/discover/movie';
    
    try{
        const response = axios.get(discoverMoviesUrl, {
            params:{
                api_key:api_key,
                sort_by:'date.desc'
            },
        });

        const movies = response.data.results;
        //console.log('List of movies', movies);
        return(movies);
    }
    catch (error) {
        console.log('Error getting movies', error)
    }
}


export default getMovieList()
