import React, { useEffect, useState } from 'react';
import generateImageUrl from '../api/generateImageUrl';
import getMoviesByGenre from '../api/getMoviesByGenre';
import '../styles/resultFilm.css'

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

  //if there is no films in the list return an empty paragraph
  if (!filmList || filmList.length === 0) {
    return <p></p>; 
  }


  return (
    <div>
    {filmList.map((movie, index) => (
      <div>
        <h2>{movie.title}</h2>
        <img src={generateImageUrl(movie.imageUrl)} alt={movie.title} />
        <p>Release Date: {movie.releaseDate}</p>
        <p>Overview: {movie.overview}</p>
      </div>
    ))}
  </div>
);
}

export default ResultFilm;