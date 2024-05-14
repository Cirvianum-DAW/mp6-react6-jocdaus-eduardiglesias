import React, { useState } from 'react';
import Dice from './Dice';
import { getTirades, sum } from './utils';

const LuckyN = ({ numDaus }) => {
  const [dice, setDice] = useState(getTirades(numDaus));
  const [suma, setSuma] = useState(7); // Valor inicial, pots canviar-ho segons necessitis

  const isWinner = sum(dice) === suma;

  const handleSumaChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 2 && value <= 12) {
      setDice(getTirades(numDaus));
      setSuma(value);
    }
  };

  return (
    <main>
      <h1 className='mt-3 text-center text-xl text-blue-500'>
        Prova Sort! La suma ha de donar {suma}
      </h1>
      <Dice dice={dice} />
      <h2 className='text-center text-2xl text-blue-500'>
        {isWinner ? 'Has guanyat!' : 'Torna a intentar-ho'}
      </h2>
      <button
        className='block mx-auto mt-3 px-4 py-2 bg-blue-500 text-white rounded'
        onClick={() => setDice(getTirades(numDaus))}
      >
        Tira els daus
      </button>
      {/* L'usuari pot introduir un nombre dins d'un input, serà el nombre que han de donar els daus per guanyar */}
      <label className='block mx-auto mt-3 text-center text-blue-500'>
        Introdueix la suma que han de donar els daus per guanyar
      </label>
      <input
        className='block mx-auto mt-3 px-4 py-2 bg-blue-100 text-blue-500 rounded'
        type='number'
        value={suma}
        onChange={handleSumaChange}
      />
    </main>
  );
};

export default LuckyN;
