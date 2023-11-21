import axios from 'axios';
import apiKeys from './apiKey';

//const genresList = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53 , 10752, 37];

async function getMoviesByGenre(genreId, page) {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/discover/movie?genreId=${genreId}&api_key=${apiKeys.Key}&page=${page}`,
        headers: { }
      };

      axios.request(config)
      .then((response) => {
        const movie = response.data.results.map(movie => {
          });
          console.log("beep")
            return {
                id: movie.id,
                title: movie.title,
                releaseDate: movie.release_Date,
                overview: movie.overview,
                voteAverage: movie.vote_Average,
                imdb_id:movie.imdb_id,
                imageUrl: movie.backdrop_path
            }
        })
    
    

    .catch((error) => {
    console.log(error);
    })}
      

  export default getMoviesByGenre