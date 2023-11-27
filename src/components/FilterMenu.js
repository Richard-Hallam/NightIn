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
      <button onClick={() => handleButtonClick('action')}>Action</button>
      <button onClick={() => handleButtonClick('adventure')}>Adventure</button>
      <button onClick={() => handleButtonClick('romance')}>Romance</button>
      <button onClick={() => handleButtonClick('crime')}>Crime</button>

      <div>
        <label>Genre: </label>
        <input type="text" value={genre} readOnly />
      </div>
      <button onClick={() => handleButtonClick('WhittleIt')}>WhittleIt</button>
    </div>
  );
};

export default FilterMenu;