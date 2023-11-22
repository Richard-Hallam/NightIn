import axios from 'axios';
import apiKeys from './apiKey';

//this is just to get genre
async function getMovieDetails(movieId) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKeys.Key}&append_to_response=genres`,
  };

  const response = await axios.request(config);
  return response.data;
}


async function getMoviesByGenre(genreId, totalPages) {
  let i = 1;
  let moviesByGenre = [];

  try {
    while (i <= totalPages) {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${apiKeys.Key}&page=${i}`,
      };

      const response = await axios.request(config);

      const movies = await Promise.all(response.data.results.map(async movie => {
        const movieDetails = await getMovieDetails(movie.id);
        const genres = movieDetails.genres.map(genre => genre.name);

        return {
          id: movieDetails.id,
          title: movieDetails.title,
          releaseDate: movieDetails.release_date,
          overview: movieDetails.overview,
          voteAverage: movieDetails.vote_average,
          imdb_id: movieDetails.imdb_id,
          imageUrl: movieDetails.backdrop_path,
          genres: genres,
        };
      }));

      moviesByGenre.push(...movies);

      //console.log(`Fetched page ${i}`);
      i++;
    }

    //console.log(moviesByGenre);
    return moviesByGenre;
  } catch (error) {
    console.error('Error:', error);
  }
}


export default getMoviesByGenre;
