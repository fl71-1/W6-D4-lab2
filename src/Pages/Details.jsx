import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)

    
      .then((response) => response.json())
      .then((data) => setCharacter(data))
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">تفاصيل الشخصية</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-contain mb-4"
        />
        <h2 className="text-2xl font-bold mb-4 text-center">{character.name}</h2>
        <p><strong>لون الشعر:</strong> {character.hairColor}</p>
        <p><strong>حالته:</strong> {character.status}</p>
        <p><strong>صنفه:</strong> {character.species}</p>
        <p><strong>جنسه:</strong> {character.gender}</p>
        <p><strong>الكوكب:</strong> {character.planet}</p>
      </div>
    </div>
  );
}

export default Details;
