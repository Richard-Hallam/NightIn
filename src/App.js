import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar';
import Title from './components/title';
import TempSearch from './components/TempSearch'; //temporary just for API testing, remove at a later date

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
