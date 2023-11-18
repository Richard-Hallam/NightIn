import axios from "axios";
import apiKeys from './apiKey';


async function getMovieInfo(movie_id){


    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.themoviedb.org/3/movie/16535?api_key=0992277e30f9f06c26121fc3a6165467',
        headers: { }
      };
      console.log(1)
      const response = await axios.request(config)
      console.log(2)
      .then((response) => {
        console.log(response)
    
      })
      .catch((error) => {
        console.log('error!')
        console.log(error);
      });
    
      return response


    // const movieInfoUrl = `https://api.themoviedb.org/3/movie/${movie_id}`;
    
    // try{
    //     const response = await axios.get(movieInfoUrl, {
    //         params:{
    //             api_key: apiKeys.key,
    //         },
    //     });
    //     const movieInfo = response;
    //     console.log('Movie information:', movieInfo);
    // } catch (error) {
    //     console.error('Error getting movie info', error);
    // }
}

export default getMovieInfo