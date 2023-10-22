import { useState } from 'react';

export default function Parrafo({ parrafos }) {
  const [verMas, setVerMas] = useState(false);

  const handleClick = () => {
    setVerMas(!verMas);
  };

  return (
    <div>
      {verMas ? (
        parrafos.map((parrafos, index) => <p className='mt-5 dark:text-zinc-100' key={index}>{parrafos}</p>)
      ) : (
        <p className='mt-5 dark:text-zinc-100'>{parrafos[0].substring(0, 150)}...</p>
      )}
      <button className='text-aguara-600 ' onClick={handleClick}>
        {verMas ? 'Ver menos' : 'Ver más...'}
      </button>
    </div>
  );
}