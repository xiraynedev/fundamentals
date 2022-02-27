import {FC, useState} from 'react';

export const Join: FC = () => {
  const array = ['Fire', 'Air', 'Water'];
  const [joinedArray, setJoinedArray] = useState('');

  const handleClick = () => {
    setJoinedArray(array.join(', '));
  };

  return (
    <div className="flex flex-col w-10/12 gap-10 mt-8 mx-auto items-center h-80">
      <div className="border p-8 w-10/12">
        <p>['Fire', 'Air', 'Water']</p>
      </div>
      <div className="border p-8 w-10/12">
        <p>The array above can be joined into one string.</p>
      </div>
      <button
        className="border shadow-lg w-10/12 mx-auto p-4 bg-amber-50 tracking-wider font-bold text-emerald-900"
        onClick={handleClick}
      >Join Array
      </button>
      {
        joinedArray && <p className='font-bold text-2xl text-purple-900 tracking-wider'>{joinedArray}</p>
      }
    </div>
  );
};