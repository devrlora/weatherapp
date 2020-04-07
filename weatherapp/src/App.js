import React from 'react';
import './App.css';
import Days from './Days'

function App() {
  return (
    <div className="App">
      <Days 
      day='Monday'
      max={70}
      min={65}/>
      <Days 
      day='Tuesday'
      max={70}
      min={65}/>
      <Days 
      day='Wednesday'
      max={70}
      min={65}/>
      <Days 
      day='Thursday'
      max={70}
      min={65}/>
      <Days 
      day='Friday'
      max={70}
      min={65}/>      
    </div>
  );
}

export default App;
