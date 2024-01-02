import { useState } from 'react';

export default function Parrafo({ parrafos }) {
  const [verMas, setVerMas] = useState(false);

  const handleClick = () => {
    setVerMas(!verMas);
  };

  return (
    <div className="mx-2">
      {verMas ? (
        parrafos.map((parrafos, index) => <p className='mt-5 dark:text-zinc-100 tracking-wide' key={index}>{parrafos}</p>)
      ) : (
        <p className='mt-5 dark:text-zinc-100 tracking-wide'>{parrafos[0].substring(0, 600)}...</p>
      )}
      <button className='text-aguara-600 mt-5 tracking-wide' onClick={handleClick}>
        {verMas ? 'Ver menos' : 'Ver más...'}
      </button>
    </div>
  );
}