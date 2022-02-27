import {FC, useState} from 'react';

export const Reduce: FC = () => {
  const array = [1, 2, 3, 4];
  const [reducedValue, setReducedValue] = useState<number>();


  const handleClick = () => {
    setReducedValue(array.reduce((acc, value) => {
      return acc + value;
    }, 0));
  };

  return (
    <>
      <div className="flex flex-col items-center text-purple-900 mt-8">
        <p className="font-bold tracking-wider mb-4 border-b border-b-blue-300 pb-2">[1,2,3,4]</p>
        <p className="font-bold text-lg mb-4">The array above can be summed to a single value of ten.</p>
        <button onClick={handleClick}
                className="border shadow-lg mb-4 p-4 bg-amber-50 font-bold">Sum Array
        </button>
        {
          reducedValue && <p className='font-bold text-2xl'>{reducedValue}</p>
        }
      </div>
    </>
  );
};