import {FC, FormEvent, useState} from 'react';

export const Filter: FC = () => {
  const [words] = useState(['first', 'second', 'last', 'filtered', 'polymorphism', 'polymorphism']);
  const [length, setLength] = useState('');
  const [result, setResult] = useState<string[]>([]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    setResult(words.filter(word => word.length >= +length));

    setLength('');
  };

  /* prime number demo

  const primeArray = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];

  function isPrime(num: number) {
   for (let i = 2; num > i; i++) {
     if (num % i === 0) {
       return false;
     }
   }
   return num > 1;
  }

  console.log(primeArray.filter(isPrime));
  */

  return (
    <div className='w-10/12 mx-auto mt-8'>
      <p>Enter a length below to see which words have more characters than the length provided.</p>
      <form onSubmit={handleFormSubmit} className='mt-8'>
        <input type="text"
               placeholder='Enter length...'
                className='border p-4 outline-blue-200'
               value={length}
               onChange={event => setLength(event.currentTarget.value)}
               required
        />
      </form>
      <div>
        {
          result && <p className='mt-8 font-bold tracking-wider'>[{result.join(', ')}]</p>
        }
      </div>
    </div>
  );
};