import axios from 'axios';
import apiKeys from './apiKey';

async function getMoviesByGenre(genreId) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/discover/movie?genreId=${genreId}&api_key=${apiKeys.Key}`,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    };

  export default getMoviesByGenre