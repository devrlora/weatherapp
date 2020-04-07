import React from 'react';
import './App.css';
import Days from './Days'

function App() {
  return (
    <div className="App">
      <div className='weather-container'>
      <Days 
      day='Monday'/>
      <Days />
      <Days />
      <Days />
      <Days />
      </div>
      
    </div>
  );
}

export default App;
