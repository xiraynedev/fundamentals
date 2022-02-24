import {FC, FormEvent, useState} from 'react';

export const Fill: FC = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (value && start && end) {
      setNumbers(prevState => [...prevState].fill(+value, +start, +end));
    } else if (value && start) {
      setNumbers(prevState => [...prevState].fill(+value, +start));
    } else if (value) {
      setNumbers(prevState => [...prevState].fill(+value));
    }

  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col mt-8 w-10/12 mx-auto">
        <input type="number" placeholder="Enter value..."
               className="mb-4 border p-2 outline-blue-200"
               required
               value={value}
               onChange={event => setValue(event.currentTarget.value)}
        />
        <input type="number" placeholder="Enter start..."
               className="mb-4 border p-2 outline-blue-200"
               value={start}
               onChange={event => setStart(event.currentTarget.value)}
        />
        <input type="number" placeholder="Enter end..."
               className="mb-4 border p-2 outline-blue-200"
               value={end}
               onChange={event => setEnd(event.currentTarget.value)}
        />
        <button type="submit" className="border shadow outline-0 p-4 text-blue-900 font-bold tracking-wider"
        >Fill Array
        </button>
      </form>
      <div className="flex flex-col mt-8 w-10/12 mx-auto">
        <p className="font-bold text-blue-900 tracking-wider">[{numbers.join(',')}]</p>
      </div>
    </>
  );
};