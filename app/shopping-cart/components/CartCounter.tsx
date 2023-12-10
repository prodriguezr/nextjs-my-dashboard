'use client';

import { useState } from 'react';

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  return (
    <>
      <span className='text-9xl'>{counter}</span>
      <div className='flex'>
        <button onClick={() => setCounter(counter + 1)} className='counterBtn'>
          +1
        </button>
        <button onClick={() => setCounter(0)} className='counterBtn'>
          Reset
        </button>
        <button
          onClick={() => counter > 0 && setCounter(counter - 1)}
          className='counterBtn'
        >
          -1
        </button>
      </div>
    </>
  );
};
