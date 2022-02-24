import {FC, FormEvent, useState} from 'react';

export const FindIndex: FC = () => {

  const [input, setInput] = useState('');
  const [primes, setPrimes] = useState<number[]>([]);

  const isPrime = (num: number) => {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return;
      }
    }
    return num > 1;
  }

  const handleFormSubmit = (event: FormEvent) => {
   event.preventDefault();

   const array = [...(Array(+input + 1).keys())];

   setPrimes(array.filter(isPrime));

   setInput('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className='w-10/12 mt-4 mx-auto'>
        <input type="number"
               min={0}
               placeholder='Enter number to search for primes below it...'
          className='w-full border outline-blue-200 p-4'
               value={input}
               onChange={event => setInput(event.currentTarget.value)}
        />
      </form>
      <div>
        <p className='w-10/12 mx-auto mt-4'>The primes found below the number typed into the text field above will display below.</p>
        {
          primes.length > 0 &&
          <p className='w-10/12 mx-auto mt-4 font-bold tracking-wider'>
            [{primes.join(', ')}]
          </p>
        }
      </div>
    </>
  );
};