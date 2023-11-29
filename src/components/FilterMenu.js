import React, { useState } from 'react';
import ResultFilm from './ResultFilm';
import '../styles/filterMenu.css';
import '../styles/resultFilm.css'
import HighlightButton from './highlightButton';

let genreArr = [];
let autofill = '';


const FilterMenu = () => {
  const [genre, setGenre] = useState('');
  const [genreArrState, setGenreArr] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);



  const handleButtonClick = (buttons) => {
    switch (buttons) {
      case 28:
        autofill = autofill + 'Action ';
        genreArr.push(28);
        break;
      case 12:
        autofill = autofill + 'Adventure ';
        genreArr.push(12);
        break;
      case 10749:
        autofill = autofill + 'Romance ';
        genreArr.push(10749);
        break;
      case 80:
        autofill = autofill + 'Crime ';
        genreArr.push(80);
        break;
      case 16:
        autofill = autofill + 'Animation ';
        genreArr.push(16);
        break;
      case 35:
        autofill = autofill + 'Comedy ';
        genreArr.push(35);
        break;
      case 99:
        autofill = autofill + 'Documentary ';
        genreArr.push(99);
        break;
      case 18:
        autofill = autofill + 'Drama ';
        genreArr.push(18);
        break;
      case 10751:
        autofill = autofill + 'Family ';
        genreArr.push(10751);
        break;
      case 14:
        autofill = autofill + 'Fantasy ';
        genreArr.push(14);
        break;
      case 36:
        autofill = autofill + 'History ';
        genreArr.push(36);
        break;
      case 27:
        autofill = autofill + 'Horror ';
        genreArr.push(27);
        break;
      case 10402:
        autofill = autofill + 'Music';
        genreArr.push(10402);
        break;
      case 9648:
        autofill = autofill + 'Mystery ';
        genreArr.push(9648);
        break;
      case 878:
        autofill = autofill + 'Science Fiction ';
        genreArr.push(878);
        break;
      case 10770:
        autofill = autofill + 'TV Movie ';
        genreArr.push(10770);
        break;
      case 53:
        autofill = autofill + 'Thriller ';
        genreArr.push(53);
        break;
      case 10752:
        autofill = autofill + 'War ';
        genreArr.push(10752);
        break;
      case 37:
        autofill = autofill + 'Western ';
        genreArr.push(37);
        break;
      case 'clear':
        genreArr = [];
        autofill = '';
        break;
      case 'WhittleIt':
        console.log('whittling');
        setGenreArr([...genreArr]);
        break;
       default:

    }

    setGenre(autofill);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const collapseMenu = () => {
    setIsExpanded(false);
  };

  const toggleSelectionAndHandleClick = (categoryId) => {
    setSelectedCategory(categoryId);
    handleButtonClick(categoryId);
  };

  return (
    <div className="filter-menu">
      {isExpanded ? (
        <div className="expanded-menu">
          <HighlightButton/>
     <div className="categories">
  <button className={`category-buttons ${selectedCategory === 12 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(12)}>Adventure</button>
  <button className={`category-buttons ${selectedCategory === 16 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(16)}>Animation</button>
  <button className={`category-buttons ${selectedCategory === 35 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(35)}>Comedy</button>
  <button className={`category-buttons ${selectedCategory === 80 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(80)}>Crime</button>
  <button className={`category-buttons ${selectedCategory === 99 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(99)}>Documentary</button>
  <button className={`category-buttons ${selectedCategory === 18 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(18)}>Drama</button>
  <button className={`category-buttons ${selectedCategory === 10751 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(10751)}>Family</button>
</div>

<div className="categories-line-2">
  <button className={`category-buttons ${selectedCategory === 14 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(14)}>Fantasy</button>
  <button className={`category-buttons ${selectedCategory === 36 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(36)}>History</button>
  <button className={`category-buttons ${selectedCategory === 27 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(27)}>Horror</button>
  <button className={`category-buttons ${selectedCategory === 10402 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(10402)}>Music</button>
  <button className={`category-buttons ${selectedCategory === 9648 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(9648)}>Mystery</button>
</div>

      <div className="categories-line-3">
  <button className={`category-buttons ${selectedCategory === 10749 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(10749)}>Romance</button>
  <button className={`category-buttons ${selectedCategory === 878 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(878)}>Science Fiction</button>
  <button className={`category-buttons ${selectedCategory === 10770 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(10770)}>TV Movie</button>
  <button className={`category-buttons ${selectedCategory === 53 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(53)}>Thriller</button>
  <button className={`category-buttons ${selectedCategory === 10752 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(10752)}>War</button>
  <button className={`category-buttons ${selectedCategory === 37 ? 'selected' : ''}`} onClick={() => toggleSelectionAndHandleClick(37)}>Western</button>
</div>
          <div className="categories-line-4">
      
            <button className="collapse-button" onClick={collapseMenu}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="whittleit-container">
            <button className="whittleit" onClick={() => handleButtonClick('WhittleIt')}>
              <span className="material-symbols-outlined" style={{ fontSize: '100pt' }}>arrow_circle_right</span>
            </button>
          </div>
          <div className="returned-films">
            {genreArrState.length > 0 && <ResultFilm genreArr={genreArrState} />}
          </div>
        </div>
      ) : (

        <button className="expand-button" onClick={toggleExpand}>
            <span class="material-symbols-outlined" style={{ fontSize: '100pt'}}>
              add_circle
            </span>
        </button>
      )}
    </div>
  );
};

export default FilterMenu;


