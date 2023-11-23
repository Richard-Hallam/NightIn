import axios from "axios";
import apiKeys from './apiKey';

//test film_Id: 16535

async function getMovieInfo(movie_id){
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKeys.Key}`,
        headers: { }
      };
      axios.request(config)
      .then((response) => {
        const films = response.data.results.map(movie => {
          console.log(2)
            return {
                id: movie.id,
                title: movie.title,
                releaseDate: movie.releaseDate,
                overview: movie.overview,
                voteAverage: movie.voteAverage,
                imdb_id:movie.imdb_id,
                imageUrl: movie.backdrop_path,
            }

        }
        )})
      .catch((error) => {
        console.log('error getting movie info')
        console.log(error);
      });
    
      

}

export default getMovieInfo