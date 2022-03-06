import {FC, useState} from 'react';

export const Unshift: FC = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [element, setElement] = useState('');

  const handleClick = () => {
    setArray(prevState => {
      array.unshift(+element);
      return [...prevState];
    })

    setElement('');
  };

  return (
    <>
      <div className='flex flex-col items-center mt-8'>
        <p className='text-3xl text-cyan-900'>
          {array.join(', ')}
        </p>
        <input
          type='number'
          placeholder='Enter element to add...'
          className='border p-3 mt-8'
          value={element}
          onChange={event => setElement(event.currentTarget.value)}
        />
        <button
          onClick={handleClick}
          className='border shadow-2xl p-3 mt-8'
        >Add Element</button>
      </div>
    </>
  );
};