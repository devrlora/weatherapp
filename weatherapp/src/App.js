import React from 'react';
import './App.css';
import Days from './Days'

function App() {
  return (
    <div className="App">
      <div className='weather-container'>
      <Days 
      day='Monday'
      max={70}
      min={65}/>
      <Days 
      day='Monday'
      max={70}
      min={65}/>
      <Days 
      day='Monday'
      max={70}
      min={65}/>
      <Days 
      day='Monday'
      max={70}
      min={65}/>
      <Days 
      day='Monday'
      max={70}
      min={65}/>
      </div>
      
    </div>
  );
}

export default App;
