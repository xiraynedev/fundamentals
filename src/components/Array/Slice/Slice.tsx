import {FC, FormEvent, useState} from 'react';

export const Slice: FC = () => {
  const [animals, setAnimals] = useState(['ant', 'bison', 'elephant', 'camel', 'horse']);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [sliced, setSliced] = useState<string[]>([]);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (start && end) {
      setSliced(animals.slice(+start, +end));
    } else if (start) {
      setSliced(animals.slice(+start));
    }

    setStart('');
    setEnd('');
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10 justify-between mt-10">
        <p className="border p-8 text-2xl">[{animals.join(', ')}]</p>
        <form className="flex flex-col gap-10"
              onSubmit={handleFormSubmit}>
          <input
            type="number"
            required
            placeholder="Enter start of slice..."
            className="outline-0 border-t-2 border-b-2 py-4"
            value={start}
            onChange={event => setStart(event.currentTarget.value)}
          />
          <input
            type="number"
            placeholder="Enter end of slice..."
            className="outline-0 border-t-2 border-b-2 py-4"
            value={end}
            onChange={event => setEnd(event.currentTarget.value)}
          />
          <button type="submit"
                  className="border drop-shadow-2xl bg-blue-400 text-white py-4 px-8"
          >Slice Words
          </button>
        </form>

        {
          sliced.length > 0 && <p className="border-t-2 border-b-2 py-4 mt-6">{sliced.join(', ')}</p>
        }
      </div>
    </>
  );
};