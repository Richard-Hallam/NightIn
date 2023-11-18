import axios from "axios";
import apiKeys from './apiKey';


function getMovieList(){
    const discoverMoviesUrl = 'https://api.themoviedb.org/3/discover/movie';
    
    try{
        const response = axios.get(discoverMoviesUrl, {
            params:{
                api_key:apiKeys.key,
                sort_by:'date.desc'
            },
        });

        const movies = response.data.results;
        return(movies);
    }
    catch (error) {
        console.log('Error getting movies', error)
    }
}


export default getMovieList()