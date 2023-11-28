import React, { useEffect, useState } from 'react';
import generateImageUrl from '../api/generateImageUrl';
import getMoviesByGenre from '../api/getMoviesByGenre';
import '../styles/resultFilm.css';

const ResultFilm = ({ genreArr }) => {
  const [filmList, setFilmList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getMoviesByGenre(genreArr[0], 10);
        const genreText = {
          28: 'Action',
          12: 'Adventure',
          16: 'Animation',
          35: 'Comedy',
          80: 'Crime',
          99: 'Documentary',
          18: 'Drama',
          10751: 'Family',
          14: 'Fantasy',
          36: 'History',
          27: 'Horror',
          10402: 'Music',
          9648: 'Mystery',
          10749: 'Romance',
          878: 'Science Fiction',
          10770: 'TV Movie',
          53: 'Thriller',
          10752: 'War',
          37: 'Western',
        };

        let filteredMovies = [];

        if (genreArr.length > 1) {
          let i = 1;
          while (i <= genreArr.length) {
            filteredMovies.push(
              movies.filter((movie) => movie.genres.includes(genreText[genreArr[i]]))
            );
            i++;
          }
          setFilmList(filteredMovies.flat()); // Use flat() to flatten the array of arrays
        } else {
          setFilmList(movies);
        }

        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, [genreArr]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator while data is being fetched
  }

  // If there are no films in the list, return an empty paragraph
  if (!filmList || filmList.length === 0) {
    return <p>No movies found for the selected genres.</p>;
  }

  return (
    <div>
      {filmList.map((movie, index) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={generateImageUrl(movie.imageUrl)} alt={movie.title} />
          <p>Release Date: {movie.releaseDate}</p>
          <p>Overview: {movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultFilm;
