import {FC, FormEvent, useState} from 'react';

export const At: FC = () => {
  const stringPhrase = 'Array.prototype.at()';
  const [input, setInput] = useState('');
  const [indexChar, setIndexChar] = useState<string | undefined>('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    setIndexChar(stringPhrase.split('').at(+input));

    setInput('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter index value..."
          className="border w-10/12 block mx-auto mt-8 p-8 outline-0"
          value={input}
          onChange={event => setInput(event.currentTarget.value)}
        />
      </form>
      <div>
        <h1 className="w-10/12 mx-auto mt-8 text-2xl">Use the input above with an index number to locate a letter in the
          text below.</h1>
        <p className="text-2xl w-10/12 mx-auto mt-8">{stringPhrase}</p>
        {
          indexChar && (
            <p className="w-10/12 mx-auto mt-8 text-2xl">The index you chose has the
              character <span className="text-red-700">{indexChar}</span>.
            </p>
          )
        }
      </div>
    </>
  );
};