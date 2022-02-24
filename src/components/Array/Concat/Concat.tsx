import {FC, useState} from 'react';

export const Concat: FC = () => {

  const [userInput, setUserInput] = useState('');
  const [array3, setArray3] = useState<number[]>([]);

  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];

  const concatArrays = () => {
    if (userInput.toLowerCase().includes('y')) {
      setArray3(array1.concat(array2));
    }
  };

  return (
    <>
      <div className='w-10/12 mx-auto mt-12'>
        <h2 className='text-center text-3xl mb-4'>Concat Arrays</h2>
        <p className='mb-4'>Below are two arrays. Would you like to combine them into one array? Type your answer below.</p>
        <input
          type="text"
          placeholder='Enter y for yes...'
          className='border w-full p-4 outline-0'
          value={userInput}
          onChange={event => setUserInput(event.currentTarget.value)}
        />
        <button
          onClick={concatArrays}
          className='mt-8 border p-4 outline-0 rounded-lg shadow'
        >Combine Arrays</button>
      </div>
      <div className='flex justify-between w-10/12 mx-auto mt-8'>
        <p>Array 1 is <span className='font-bold'>[{array1}]</span></p>
        <p>Array 2 is <span className='font-bold'>[{array2}]</span></p>
      </div>
      {
        array3.length > 0 &&
        <p className='w-10/12 mx-auto mt-8'>
          The combined arrays are complete. The new array is <span className='font-bold'>[{array3}]</span>.
		    </p>
      }
    </>
  );
};