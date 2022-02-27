import {FC, useState} from 'react';
import {v4} from 'uuid';

export const Keys: FC = () => {
  const array = ['Fire', 'Air', 'Water', 'Earth'];
  const [keys, setKeys] = useState<number[]>([]);

  const handleClick = () => {
   setKeys([...array.keys()])
  };

  return (
    <>
      <div className='w-10/12 mx-auto border p-4 mt-8'>
        <p>['Fire', 'Air', 'Water']</p>
      </div>
      <p className='w-10/12 mx-auto mt-8'>Click the button below to retrieve the keys of the array above.</p>
      <div className='w-10/12 mx-auto mt-8'>
        <button
          className='border shadow-lg p-4 bg-green-400 text-2xl w-8/12'
          onClick={handleClick}
        >Retrieve Keys</button>
      </div>
      <div>
        {
          keys.map(key => (
            <p className='w-10/12 mx-auto mt-8' key={v4()}>{key}</p>
          ))
        }
      </div>
    </>
  );
};