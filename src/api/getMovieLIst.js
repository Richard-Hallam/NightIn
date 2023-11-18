import axios from "axios";
import apiKeys from './apiKey';

const api_key = apiKeys.key;

//returns a list of movies 
function getMovieList(){
    const axios = require('axios');

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=0992277e30f9f06c26121fc3a6165467&API Key=${apiKeys.key}`,
    headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log((response.data.results));
    })
    .catch((error) => {
    console.log(error);
    });
};


export default getMovieList
