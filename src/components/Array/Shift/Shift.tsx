import {FC, useState} from 'react';

export const Shift: FC = () => {
  const [array, setArray] = useState([1, 2, 3]);

  const handleClick = () => {
    setArray(prevState => {
      prevState.shift();
      return [...prevState];
    });
  };

  return (
    <>
      <div className='flex flex-col gap-10 justify-center h-80 items-center'>
        {
          array.length > 0 && <p className='text-3xl border py-4 px-8'>[{array.join(', ')}]</p>
        }
        <p className='text-xl'>Use the button below to remove the first item from the array.</p>
        <button onClick={handleClick}
          className='border-b-2 drop-shadow-2xl p-4 bg-red-100'>Remove Item</button>
      </div>
    </>
  );
};