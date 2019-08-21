import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div>
      <h1>1. Welcome to Chef Chu's Restaurant</h1>
      <button> 
        <Link to="/categories">Categories</Link>      
      </button>
      <div>
        <h2>LOCATION & HOURS</h2>
      </div> 
      <div>
        1067 N San Antonio Rd Los Altos, CA 94022
      </div>   
    </div>

  );
}
export default App;
