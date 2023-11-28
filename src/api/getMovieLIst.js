import apiKeys from './apiKey';

const api_key = apiKeys.key;

function getMovieList(){
    const axios = require('axios');

    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/discover/movie?api_key=0992277e30f9f06c26121fc3a6165467&API Key=${apiKeys.Key}`,
    headers: { }
    };

    axios.request(config)
    .then((response) => {
        const films = response.data.results.map(movie => {
            return {
                id: movie.id,
                title: movie.title,
                releaseDate: movie.releaseDate,
                overview: movie.overview,
                voteAverage: movie.voteAverage,
            }
        })
    console.log((films));
    })
    .catch((error) => {
    console.log(error);
    });
};


export default getMovieList
