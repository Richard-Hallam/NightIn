import React, { useEffect, useState } from 'react';
import generateImageUrl from '../api/generateImageUrl';
import getMoviesByGenre from '../api/getMoviesByGenre';
import '../styles/App.css';
import { pulsar } from 'ldrs';

pulsar.register();

const ResultFilm = ({ genreArr }) => {
  const [filmList, setFilmList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getMoviesByGenre(genreArr[0], 10);
        const genreText = {
          28: 'Action',
          12: 'Adventure',
          // ... (rest of the genre mappings)
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
          setFilmList(filteredMovies.flat());
        } else {
          setFilmList(movies);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [genreArr]);

  if (loading) {
    return (
      <div className="loading-container">
        <l-pulsar className="loading" size="150" speed="1.75" color="white"></l-pulsar>
      </div>
    );
  }


  if (!filmList || filmList.length === 0) {
    return <p></p>;
  }

  return (
    <div className="returned-films">
      {filmList.map((movie, index) => (
        <div key={movie.id} className="returned-films-item">
          <h2>{movie.title}</h2>
          <img src={generateImageUrl(movie.imageUrl)} alt={movie.title} />
          <p className="returned-films-date">Release Date: {movie.releaseDate}</p>
          <p>Overview: {movie.overview}</p>
          <div className="streaming-details">
            <button onClick={handleClick}>streaming links</button>
            {isShown && <div className="hidden-streaming-link">a link to a streaming service </div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultFilm;
