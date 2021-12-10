// import { rest } from 'msw';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedChar, setSelectedChar] = useState('Luke Skywalker');

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err));
  }, [])

  const openDetails = name => {
    setSelectedChar(name);
  }

  const closeDetails = () => {
    setSelectedChar(null);
  }

  return (
    <div className='App'>
      <div className='Container'>
        <h1 className='Header'>Characters</h1>
        {characters.map(char => {
          return < Character character={char} selected={selectedChar} open={openDetails} close={closeDetails} key={char.name} />
        })}
      </div>
    </div>
  );
}

export default App;
