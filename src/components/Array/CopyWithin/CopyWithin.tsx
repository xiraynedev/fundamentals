import {FC, FormEvent, useState} from 'react';

export const CopyWithin: FC = () => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [array, setArray] = useState(arr);
  const [targetValue, setTargetValue] = useState('');
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');


  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    setArray(prevState => prevState.copyWithin(+targetValue, +startValue, +endValue));

    setTargetValue('');
    setStartValue('');
    setEndValue('');
  };

  return (
    <>
      <form className="w-10/12 mx-auto my-8" onSubmit={handleFormSubmit}>
        <div className="flex flex-col">
          <input type="text" placeholder="Enter target value..."
                 className="border p-2 mb-4 outline-blue-200" value={targetValue}
                 onChange={event => setTargetValue(event.currentTarget.value)}
                 required
          />
          <input type="text" placeholder="Enter start value..."
                 className="border p-2 mb-4 outline-blue-200" value={startValue}
                 onChange={event => setStartValue(event.currentTarget.value)}
                 required
          />
          <input type="text" placeholder="Enter end value..."
                 className="border p-2 mb-8 outline-blue-200" value={endValue}
                 onChange={event => setEndValue(event.currentTarget.value)}
                 required
          />
        </div>
        <button type="submit"
                className="shadow py-2 px-8 bg-blue-400 text-white tracking-wider outline-0"
        >Begin Copy
        </button>
      </form>
      <div>
        {
          array && <p className="px-10">The array is &rarr; &nbsp;[{array.join(',')}]</p>
        }
      </div>
    </>
  );
};