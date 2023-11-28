import React, { useState } from 'react';


let genreArr = []
let autofill = ''
const FilterMenu = () => {
  
  const [genre, setGenre] = useState('');

  const handleButtonClick = (buttons) => {
    switch (buttons) {
      case 28:
        autofill = autofill + 'Action ';
        genreArr.push(28)
        break;
      case 12:
        autofill = autofill +  'Adventure ';
        genreArr.push(12)
        break;
      case 10749:
        autofill = autofill + 'Romance ';
        genreArr.push(10749)
        break;
      case 80:
        autofill = autofill + 'Crime ';
        genreArr.push(80)
        break;
      case 16:
        autofill = autofill + 'Animation ';
        genreArr.push(16)
        break;
      case 35:
        autofill = autofill + 'Comedy ';
        genreArr.push(35)
        break;
      case 99:
        autofill = autofill + 'Documentary ';
        genreArr.push(99)
        break;
      case 18:
        autofill = autofill + 'Drama ';
        genreArr.push(18)
        break;
      case 10751:
        autofill = autofill + 'Family ';
        genreArr.push(10751)
        break;
      case 14:
        autofill = autofill + 'Fantasy ';
        genreArr.push(14)
        break;
      case 36:
        autofill = autofill + 'History ';
        genreArr.push(36)
        break;
      case 27:
        autofill = autofill + 'Horror ';
        genreArr.push(27)
        break;
      case 10402:
        autofill = autofill + 'Music';
        genreArr.push(10402)
        break;
      case 9648:
        autofill = autofill + 'Mystery ';
        genreArr.push(9648)
        break;
      case 878:
        autofill = autofill + 'Science Fiction ';
        genreArr.push(878)
        break;
      case 10770:
        autofill = autofill + 'TV Movie ';
        genreArr.push(10770)
        break;
      case 53:
        autofill = autofill + 'Thriller ';
        genreArr.push(53)
        break;
      case 10752:
        autofill = autofill + 'War ';
        genreArr.push(10752)
        break;
      case 37:
        autofill = autofill + 'Western ';
        genreArr.push(37)
        break;
      case 'WhittleIt':
        console.log('whittling');//replace with call filterFunction that calls getMoviesByGenre and shows ResultFilm react component
        break;
      default:
        autofill = '';
    }

    setGenre(autofill);

  };

  return (
    <div>
      <button onClick={() => handleButtonClick(28)}>Action</button>
      <button onClick={() => handleButtonClick(12)}>Adventure</button>
      <button onClick={() => handleButtonClick(10749)}>Romance</button>
      <button onClick={() => handleButtonClick(80)}>Crime</button>
      <button onClick={() => handleButtonClick(16)}>Animation</button>
      <button onClick={() => handleButtonClick(35)}>Comedy</button>
      <button onClick={() => handleButtonClick(99)}>Documentary</button>
      <button onClick={() => handleButtonClick(18)}>Drama</button>
      <button onClick={() => handleButtonClick(10751)}>Family</button>
      <button onClick={() => handleButtonClick(14)}>Fantasy</button>
      <button onClick={() => handleButtonClick(36)}>History</button>
      <button onClick={() => handleButtonClick(27)}>Horror</button>
      <button onClick={() => handleButtonClick(10402)}>Music</button>
      <button onClick={() => handleButtonClick(9648)}>Mystery</button>
      <button onClick={() => handleButtonClick(878)}>Science Fiction</button>
      <button onClick={() => handleButtonClick(10770)}>TV Movie</button>
      <button onClick={() => handleButtonClick(53)}>Thriller</button>
      <button onClick={() => handleButtonClick(10752)}>War</button>
      <button onClick={() => handleButtonClick(37)}>Western</button>




      <div>
        <label>Genre: </label>
        <input type="text" value={genre} readOnly />
      </div>
      <button onClick={() => handleButtonClick('WhittleIt')}>WhittleIt</button>
    </div>
  );
};

export default FilterMenu;