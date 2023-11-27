import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Title from '../components/title';
import ResultFilm from '../components/ResultFilm';
import FilterMenu from './FilterMenu';

function App() {
  return (
    <div className="homepage">
      <Navbar/>
      <Title />
      <FilterMenu />
      <ResultFilm/>
    </div>
  );
}

export default App;
