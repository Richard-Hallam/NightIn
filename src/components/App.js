import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Title from '../components/title';
import ResultFilm from '../components/ResultFilm';
import FilterMenu from './FilterMenu';


const App = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Title />
      <div className="returned-results">
      </div>
    </div>
  );
};


export default App;
