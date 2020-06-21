import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <Dinner dishName='Nihaari' sweetDish='Kheer'/>
      <hr/>
      <Dinner dishName='chicken karahi' sweetDish='Gajar halwa'/>
      <hr/>
      <Dinner dishName='karahi beef' sweetDish='Mango'/>
      </div>
  );
}

export default App;
