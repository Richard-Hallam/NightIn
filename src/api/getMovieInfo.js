import axios from "axios";
import apiKeys from './apiKey';

//test film_Id: 16535

function getMovieInfo(movie_id){
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKeys.Key}`,
        headers: { }
      };
      const response = axios.request(config)
      .then((response) => {
        console.log(response.data)
    
      })
      .catch((error) => {
        console.log('error getting movie info')
        console.log(error);
      });
    
      

}

export default getMovieInfo