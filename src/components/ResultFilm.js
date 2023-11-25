import React, { useEffect, useState } from 'react';
import generateImageUrl from '../api/generateImageUrl';
import getMoviesByGenre from '../api/getMoviesByGenre';

const ResultFilm = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getMoviesByGenre(28, 2);
        setFilmList(movies);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  // Check if the movie data is available
  if (!filmList || filmList.length === 0) {
    return <p>Loading...</p>; // or display an appropriate loading message
  }

  const movie = filmList[1];
  const imageUrl = generateImageUrl(movie.imageUrl);
  console.log(imageUrl)

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={imageUrl} alt={movie.title} />
      <p>Release Date: {movie.releaseDate}</p>
      <p>Overview: {movie.overview}</p>
    </div>
  );
}

export default ResultFilm;