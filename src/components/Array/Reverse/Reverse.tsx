import {FC, useState} from 'react';

export const Reverse: FC = () => {
  const [array, setArray] = useState(['one', 'two', 'three']);

  const handleClick = () => {
    setArray(prevState => [...prevState.reverse()]);
  };

  return (
    <>
      <div className='flex flex-col items-center mt-8 text-2xl'>
        <p>{array.join(', ')}</p>
        <button onClick={handleClick}
          className='border shadow-lg py-4 px-8 mt-8'>Reverse Order</button>
      </div>
    </>
  );
};