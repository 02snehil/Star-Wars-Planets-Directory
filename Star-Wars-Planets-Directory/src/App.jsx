import React from 'react';
import PageDirectory from './components/PlanetsDirectory';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <h1>Star Wars Planets Directory</h1>
      <PageDirectory />
    </div>
  );
};

export default App;
