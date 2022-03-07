import {FC, useState} from 'react';


export const Values: FC = () => {
  const [array] = useState(['a', 'b', 'c']);
  const [isIterator, setIsIterator] = useState(false);
  const [iterator, setIterator] = useState<IterableIterator<string>>();
  const [values, setValues] = useState<string[]>([]);

  const handleClick = () => {
    setIterator(array.values());
    setIsIterator(true);
  };

  const handleNextClick = () => {
    const value = iterator?.next();

    setValues(prevState => {
      return [...prevState, value?.value];
    });
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
            <div className="flex flex-col w-11/12 mx-auto items-center">
              <p className="mt-8 mx-auto text-2xl text-cyan-900">Iterator has been created. Click the button below to
                retrieve
                the values in sequence.
              </p>
              <button
                onClick={handleNextClick}
                className="border shadow-2xl p-3 mt-8 text-cyan-900 font-bold">Retrieve Next Value
              </button>
              {
                values && <p className="mt-8 text-2xl text-cyan-900">{values.join(', ')}</p>
              }
            </div>
          )
        }
      </div>
    </>
  );
};