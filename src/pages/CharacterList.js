// src/pages/CharacterList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="character-list">
      <h1>Character List</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
