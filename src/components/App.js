import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Title from './title';
import TempSearch from './TempSearch'; //temporary just for API testing, remove at a later date

function App() {
  return (
    <div className="homepage">
      <Navbar data-testid="navbar" />
      <Title data-testid="title" />
      <TempSearch/>
    </div>
  );
}

export default App;
