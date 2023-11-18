import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar';
import Title from './components/title';
import TempSearch from './components/TempSearch';

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
