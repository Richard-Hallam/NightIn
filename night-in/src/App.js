import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar';
import Title from './components/title';
import Results from './components/Results';

function App() {
  return (
    <div className="homepage">
      <Navbar/>
      <Title />
      <Results/>
    </div>
  );
}

export default App;
