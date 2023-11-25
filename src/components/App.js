import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Title from '../components/title';
import ResultFilm from '../components/ResultFilm';

function App() {
  return (
    <div className="homepage">
      <Navbar/>
      <Title />
      <ResultFilm/>
    </div>
  );
}

export default App;
