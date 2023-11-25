import React, { useEffect, useState } from 'react';
import generateImageUrl from '../api/generateImageUrl';
import getMoviesByGenre from '../api/getMoviesByGenre';
import "../styles/resultFilm.css";

const ResultFilm = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getMoviesByGenre(28, 2);
        //const movies = await getMoviesByGenre()
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

  const movie = filmList[1];
  const imageUrl = generateImageUrl(movie.imageUrl);
  console.log(imageUrl)


  return (
    <div className="returned-film">
      {filmList.map((movie, index) => (
        <div className="film-container" key={index}>
          <div className="film-info">
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Overview: {movie.overview}</p>
          </div>
          <div className="film-image">
            <img src={generateImageUrl(movie.imageUrl)} alt={movie.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultFilm;