import axios from "axios";
import apiKeys from './apiKey';

//test film_Id: 16535

function getMovieInfo(movie_id){


    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKeys.key}`,
        headers: { }
      };
      const response = axios.request(config)
      .then((response) => {
        console.log(response.data)
    
      })
      .catch((error) => {
        console.log('error!')
        console.log(error);
      });
    
      return response


}

export default getMovieInfo