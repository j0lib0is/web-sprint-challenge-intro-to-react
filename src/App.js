import { rest } from 'msw';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err));
  }, [])

  console.log(characters);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(char => {
        return < Character character={char} key={char.id} />
      })}
    </div>
  );
}

export default App;
