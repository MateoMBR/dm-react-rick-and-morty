// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);

        // Les perso en random
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomCharacter(data.results[randomIndex]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const getRandomCharacter = () => {
    if (characters.length > 0) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      setRandomCharacter(characters[randomIndex]);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <button onClick={getRandomCharacter}>Get Random Character</button>
      {randomCharacter && (
        <Link to={`/character-list/${randomCharacter.id}`}>
        <div className="random-character">
          <h2>{randomCharacter.name}</h2>
          <img src={randomCharacter.image} alt={randomCharacter.name} />
        </div>
        </Link>
      )}
    </div>
  );
}

export default Home;
