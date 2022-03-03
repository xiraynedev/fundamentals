import {FC, useState} from 'react';

export const Sort: FC = () => {
  const [months, setMonths] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May']);


  const handleClick = () => {
    setMonths(prevState => {
      prevState.sort();
      return [...prevState];
    })
  };

  return (
    <>
      <div className='flex flex-col items-center justify-between h-96 mt-8'>
        <p className='text-3xl'>[{months.join(', ')}]</p>
        <p className='text-xl text-center'>Use the button below to alphabetically sort the array above.</p>
        <button
          onClick={handleClick}
          className='border drop-shadow-2xl py-4 px-8 bg-gray-100'>Sort Array</button>
      </div>
    </>
  );
};