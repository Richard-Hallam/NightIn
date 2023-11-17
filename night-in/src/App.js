import React from 'react';
import './styles/App.css';
import Navbar from './components/navbar';
import Title from './components/title';
function App() {
  return (
    <div className="homepage">
      <Navbar/>
      <Title />
    </div>
  );
}

export default App;
