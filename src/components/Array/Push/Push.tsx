import {ChangeEvent, FC, FormEvent, useState} from 'react';

export const Push: FC = () => {
  const [animals, setAnimals] = useState<string[]>(['pigs', 'sheep']);
  const [userInput, setUserInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    setAnimals(prevState => [...prevState, userInput]);

    setUserInput('');
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <p className="text-2xl">{animals.join(', ')}</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Add animal..."
                 value={userInput}
                 onChange={handleChange}
                 className="border p-3 mt-6 outline-blue-200"
          />
        </form>
      </div>
    </>
  );
};