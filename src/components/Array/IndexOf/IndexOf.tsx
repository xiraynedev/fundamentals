import {ChangeEvent, FC, useEffect, useState} from 'react';
import {v4} from 'uuid';

export const IndexOf: FC = () => {
  const animals = ['ant', 'bison', 'camel', 'duck', 'deer'];
  const [userInput, setUserInput] = useState('');
  const [foundIndex, setFoundIndex] = useState<number>(-1);

  const handleClick = () => {
    setFoundIndex(animals.indexOf(userInput));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value)
  };

  useEffect(() => {
    if (!animals.includes(userInput)) {
      setFoundIndex(-1);
    }
  }, [userInput]);

  return (
    <>
      <div className="m-8 border p-4 lg:max-w-2xl">
        {
          animals.map(animal => (
            <p key={v4()}>{animal}</p>
          ))
        }
      </div>
      <p className="m-8">Enter the name of an animal below to locate the index position of an animal in the list.</p>
      <div className='lg:max-w-2xl'>
        <input
          type="search"
          placeholder="Enter animal name..."
          className="border p-4 w-10/12 outline-blue-200 lg:max-w-2xl ml-8"
          value={userInput}
          onChange={handleChange}
        />
        <button className="border shadow-lg bg-amber-50 p-4 m-8 outline-blue-200 lg:max-w-2xl w-10/12"
                onClick={handleClick}>Search Index
        </button>

        {
          foundIndex >= 0 && <p className='m-8'>The index of {userInput} is {foundIndex}.</p>
        }
      </div>
    </>
  );
};