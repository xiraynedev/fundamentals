import {FC, useState} from 'react';


export const Values: FC = () => {
  const [array, setArray] = useState(['a', 'b', 'c']);
  const [isIterator, setIsIterator] = useState(false);
  const [iterator, setIterator] = useState<IterableIterator<string>>();
  const [values, setValues] = useState<string[]>([]);

  const handleClick = () => {
    setIterator(array.values());
    setIsIterator(true);
  };

  const handleNextClick = () => {
    setValues(prevState => [...prevState, iterator?.next().value]);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <p className="text-3xl text-orange-900">
          {array.join(', ')}
        </p>
        <button
          onClick={handleClick}
          className="border shadow-2xl p-3 mt-8 text-cyan-900 font-bold tracking-wider"
        >Create Iterator
        </button>
        {
          isIterator && (
            <>
              <p className="w-11/12 mt-8 text-2xl text-cyan-900">Iterator has been created. Click the button below to
                retrieve
                the values in sequence.
              </p>
              <button
                onClick={handleNextClick}
                className="border shadow-2xl p-3 mt-8 text-cyan-900 font-bold">Retrieve Next Value
              </button>
              {
                values && <p className='w-11/12 mt-8 text-2xl text-cyan-900'>{values.join(', ')}</p>
              }
            </>
          )
        }
      </div>
    </>
  );
};