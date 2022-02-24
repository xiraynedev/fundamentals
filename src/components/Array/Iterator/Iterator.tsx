import {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {v4} from 'uuid';

export const Iterator: FC = () => {

  const [input, setInput] = useState('');
  const [iteratorValues, setIteratorValues] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    setIteratorValues([]);

    const iterator = input[Symbol.iterator]();

    for (const value of iterator) {
      setIteratorValues(prevState => [...prevState, value]);
    }

    setInput('');
  };

  return (
    <div>
      <form className="m-4" onSubmit={handleFormSubmit}>
        <input type="text"
               placeholder="Enter a value to iterate over..."
               className='w-10/12 p-4 border block mx-auto outline-0'
               value={input}
               onChange={handleInputChange}
        />
      </form>
      <div className='flex justify-center flex-wrap'>
        {
          iteratorValues.map(value => (
            <p key={v4()} className='mr-4'>{value}</p>
          ))
        }
      </div>
    </div>
  );
};