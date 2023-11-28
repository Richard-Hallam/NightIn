import React, { useState } from 'react';
import ResultFilm from './ResultFilm';


let genreArr = [];
let vote_base = 0;
let autofill = '';
const FilterMenu = () => {
  
  const [genre, setGenre] = useState('');
  const [genreArrState, setGenreArr] = useState([]);
  const [voteBase, setVoteBase] = useState()

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
      case 1.0:
        vote_base = 1;
        setVoteBase(1)
        break;
      case 2.0:
        vote_base = 2;
        setVoteBase(2)
        break;
      case 3.0:
        vote_base = 3;
        setVoteBase(3)
        break;
      case 4.0:
        vote_base = 4;
        setVoteBase(4)
        break;
      case 5.0:
        vote_base = 5;
        setVoteBase(5)
        break;
      case 6.0:
        vote_base = 6;
        setVoteBase(6)
        break;
      case 7.0:
        vote_base = 7;
        setVoteBase(7)
        break;
      case 8.0:
        vote_base = 8;
        setVoteBase(8)
        break;
      case 9.0:
        vote_base = 9;
        setVoteBase(9)
        break;
      case 10.0:
        vote_base = 10;
        setVoteBase(1)
        break;
      case 'clear':
        genreArr = []
        autofill = ''
        break;
      case 'WhittleIt':
        console.log('whittling');
        setGenreArr([...genreArr]);
        setVoteBase([vote_base])
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
      <button onClick={() => handleButtonClick(16)}>Animation</button>
      <button onClick={() => handleButtonClick(35)}>Comedy</button>
      <button onClick={() => handleButtonClick(80)}>Crime</button>
      <button onClick={() => handleButtonClick(99)}>Documentary</button>
      <button onClick={() => handleButtonClick(18)}>Drama</button>
      <button onClick={() => handleButtonClick(10751)}>Family</button>
      <button onClick={() => handleButtonClick(14)}>Fantasy</button>
      <button onClick={() => handleButtonClick(36)}>History</button>
      <button onClick={() => handleButtonClick(27)}>Horror</button>
      <button onClick={() => handleButtonClick(10402)}>Music</button>
      <button onClick={() => handleButtonClick(9648)}>Mystery</button>
      <button onClick={() => handleButtonClick(10749)}>Romance</button>
      <button onClick={() => handleButtonClick(878)}>Science Fiction</button>
      <button onClick={() => handleButtonClick(10770)}>TV Movie</button>
      <button onClick={() => handleButtonClick(53)}>Thriller</button>
      <button onClick={() => handleButtonClick(10752)}>War</button>
      <button onClick={() => handleButtonClick(37)}>Western</button>
      <button onClick={() => handleButtonClick('clear')}>Clear</button>
      <div>
        <label>Genre: </label>
        <input type="text" value={genre} readOnly />
      </div>
        <button onClick={() => handleButtonClick(1.0)}>1</button>
        <button onClick={() => handleButtonClick(2.0)}>2</button>
        <button onClick={() => handleButtonClick(3.0)}>3</button>
        <button onClick={() => handleButtonClick(4.0)}>4</button>
        <button onClick={() => handleButtonClick(5.0)}>5</button>
        <button onClick={() => handleButtonClick(6.0)}>6</button>
        <button onClick={() => handleButtonClick(7.0)}>7</button>
        <button onClick={() => handleButtonClick(8.0)}>8</button>
        <button onClick={() => handleButtonClick(9.0)}>9</button>
        <button onClick={() => handleButtonClick(10.0)}>10</button>
        <button onClick={() => handleButtonClick('<')}>less than</button>
        <button onClick={() => handleButtonClick('>')}>greater than</button>

      <div>
      </div>
      <button onClick={() => handleButtonClick('WhittleIt')}>WhittleIt</button>
      {genreArrState.length > 0 && <ResultFilm genreArr={genreArrState} />}
    </div>
  );
};

export default FilterMenu;