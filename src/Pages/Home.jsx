import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">شخصيات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-contain mb-4"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
