import React from 'react';

import './App.css';
import request from './MovieRequest';
import Banner from './pages/Banner';
import Catagories from './pages/Catagories';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Bannar */}
      <Banner />
      <Catagories title='Highest Rate Movie' url={request.highestRateMovie} />
      <Catagories title='Most Popular' url={request.most_popular} />
      <Catagories title='Horror Films' url={request.kids_movies} />
      <Catagories title='Best Drama' url={request.best_dramas} />
      <Catagories title='Kids Movie' url={request.kids_movies} />
    </div>
  );
}

export default App;
