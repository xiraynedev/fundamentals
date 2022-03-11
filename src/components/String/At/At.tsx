import {FC, useState} from 'react';

export const At: FC = () => {
  const [words] = useState('Welcome to the world of React with TypeScript!');
  const [letter, setLetter] = useState<string | undefined>('');
  const [userInput, setUserInput] = useState('');

  const handleClick = () => {
    const getLetter = words.at(+userInput);

    setLetter(getLetter)

    setUserInput('');
  };

  return (
    <div className='flex flex-col gap-5 items-center mt-8 mx-auto lg:max-w-2xl'>
      <p className='border p-4'>{words}</p>
      <p className='text-red-900'>Enter an index number below to locate the letter at a specific index.</p>
      <input
        type="number"
        placeholder='Enter index to search...'
        className='border p-3 w-10/12'
        value={userInput}
        onChange={event => setUserInput(event.currentTarget.value)}
      />
      <button
        onClick={handleClick}
        className='border shadow-lg py-4 px-8 w-10/12'
      >Search</button>
      {
        letter && <p>The letter at the current index is {letter}.</p>
      }
    </div>
  );
};