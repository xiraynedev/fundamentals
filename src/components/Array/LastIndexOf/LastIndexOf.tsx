import {FC, FormEvent, useState} from 'react';

export const LastIndexOf: FC = () => {
  const [userInput, setUserInput] = useState('');
  const [indices, setIndices] = useState<number[]>([]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    setIndices([]);

    const array = ['a', 'b', 'a', 'c', 'a', 'd'];
    const indices: number[] = [];
    let index = array.lastIndexOf(userInput);

    while (index != -1) {
      indices.push(index);
      index = (index > 0 ? array.lastIndexOf(userInput, index - 1) : -1);
    }

    setIndices(prevState => [...prevState, ...indices]);

    setUserInput('');
  };

  return (
    <>
      <div className="border flex justify-center text-2xl tracking-wider mt-8 p-8">
        <p>['a', 'b', 'a', 'c', 'a', 'd']</p>
      </div>
      <div className="flex flex-col items-center mt-8">
        <form onSubmit={handleFormSubmit}>
          <p>Use the text input below to find all occurrences of an element above.</p>
          <input
            type="text"
            placeholder="Enter letter to search for..."
            className="border p-2 mt-6 outline-blue-200 w-10/12"
            value={userInput}
            onChange={event => setUserInput(event.currentTarget.value)}
          />
        </form>
        {
          indices && <p className='text-2xl tracking-widest mt-8'>[{indices.join(', ')}]</p>
        }
      </div>
    </>
  );
};