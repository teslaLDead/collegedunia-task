import React from 'react';
import './App.css';
import CollegeList from './components/CollegeList/CollegeList'
import colleges from './colleges.json';

function App() {

  return (
    <div className="App">
      <div className="container">
        <CollegeList colleges={colleges.colleges}/>
      </div>
      
    </div>
  );
}

export default App;
