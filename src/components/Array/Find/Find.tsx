import {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import * as constants from 'constants';


export const Find: FC = () => {

  const [input, setInput] = useState<string>('');
  const [prime, setPrime] = useState(false);

  const isPrime = (element: number): boolean => {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isPrimeNumber = isPrime(+input);

    setPrime(isPrimeNumber);

    setInput('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <div className='w-10/12 mx-auto'>
      <form className='mt-4' onSubmit={handleFormSubmit}>
        <h3 className="text-3xl text-red-700 mb-4">Prime Number</h3>
        <input
          type="number"
          placeholder="Enter number to verify if prime..."
          className="w-10/12 border p-2 outline-amber-50"
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <div className='mt-4'>
        {prime && <h3 className='text-green-700 text-2xl w-10/12'>The number you entered is a prime number.</h3>}
      </div>
    </div>
  );
};