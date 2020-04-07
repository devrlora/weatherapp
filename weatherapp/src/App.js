import React from 'react';
import './App.css';
import Days from './Days'

function App() {
  return (
    <div className="App">
      <Days 
        day='Mon'
        max={70}
        min={65}/>
      <Days 
        day='Tues'
        max={70}
        min={65}/>
      <Days 
        day='Wed'
        max={70}
        min={65}/>
      <Days 
        day='Thurs'
        max={70}
        min={65}/>
      <Days 
        day='Fri'
        max={70}
        min={65}/>      
    </div>
  );
}

export default App;
