import React from 'react';
import '../src/styles/App.css'
import Navbar from '../src/components/Navbar.js'
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
