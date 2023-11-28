import React, { useState } from 'react';


let autofill = '';
const FilterMenu = () => {
  
  const [genre, setGenre] = useState('');

  const handleButtonClick = (buttons) => {
    
    

    switch (buttons) {
      case 'action':
        autofill = autofill + ' Action';
        break;
      case 'adventure':
        autofill = autofill +  ' Adventure';
        break;
      case 'romance':
        autofill = autofill + ' Romance';
        break;
      case 'crime':
        autofill = autofill + ' Crime';
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
      <button onClick={() => handleButtonClick(10752)}>comedy</button>
      <button onClick={() => handleButtonClick(37)}>comedy</button>




      <div>
        <label>Genre: </label>
        <input type="text" value={genre} readOnly />
      </div>
      <button onClick={() => handleButtonClick('WhittleIt')}>WhittleIt</button>
    </div>
  );
};

export default FilterMenu;