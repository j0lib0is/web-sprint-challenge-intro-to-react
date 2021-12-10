import React, { useState } from 'react';
import './App.css';

import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

  useEffect(() => {
    // Fetch function
    const fetchCharacters = () => {
      // api call
        .then(res => setCharacters(res))
        .catch(err => console.log(err));
    }
    // Call
    fetchCharacters();
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(char => {
        < Character character={char} />
      })}
    </div>
  );
}

export default App;
