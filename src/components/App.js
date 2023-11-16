import React from 'react';
import '../styles/App.css';
import Navbar from './navbar';
import Title from './title';
import TempSearch from './TempSearch'; //temporary just for API testing, remove at a later date

function App() {
  return (
    <div className="homepage">
      <Navbar/>
      <Title />
      <TempSearch/>
    </div>
  );
}

export default App;
