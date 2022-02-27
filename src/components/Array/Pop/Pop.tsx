import {FC, useState} from 'react';

export const Pop: FC = () => {
  const [plants, setPlants] = useState(['cabbage', 'kale', 'broccoli']);
  const [poppedValues, setPoppedValues] = useState<string[]>([]);

  const handleClick = () => {
    setPlants(prevState => {
      const poppedValue = prevState.pop();
      if (poppedValue) {
        setPoppedValues(prevState => [...prevState, poppedValue]);
      }
      return [...prevState];
    });
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <p className="font-bold tracking-wider text-2xl text-green-900">{plants.join(', ')}</p>
        <button onClick={handleClick}
                className="border shadow-lg p-4 mt-8">Remove Last Element
        </button>
        {
          poppedValues && <p className="text-2xl font-bold mt-8 text-red-900">{poppedValues.join(', ')}</p>
        }
      </div>
    </>
  );
};