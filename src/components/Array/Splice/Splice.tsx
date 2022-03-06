import {FC, FormEvent, useState} from 'react';

export const Splice: FC = () => {

  const [months, setMonths] = useState(['Jan', 'Feb', 'Mar', 'April', 'May']);
  const [startIndex, setStartIndex] = useState('');
  const [deleteCount, setDeleteCount] = useState('');
  const [element, setElements] = useState('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    months.splice(+startIndex, +deleteCount, element);


    setStartIndex('');
    setDeleteCount('');
    setElements('');
  };

  return (
    <div className='bg-cyan-50 h-screen'>
      <div className="flex flex-col items-center w-11/12 pt-8 mx-auto">
        <p className="text-orange-800 text-3xl">
          {months.join(', ')}
        </p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-8 mt-8 p-3 w-11/12">
          <input
            className="border p-3 placeholder:text-orange-900"
            type="text"
            placeholder="Enter start index..."
            value={startIndex}
            onChange={event => setStartIndex(event.currentTarget.value)}
            required
          />
          <input
            className="border p-3 placeholder:text-orange-900"
            type="text"
            placeholder="Enter delete count..."
            value={deleteCount}
            onChange={event => setDeleteCount(event.currentTarget.value)}
          />
          <input
            className="border p-3 placeholder:text-orange-900"
            type="text"
            placeholder="Elements to add..."
            value={element}
            onChange={event => setElements(event.currentTarget.value)}
          />
          <button
            className="text-xl text-red-900 shadow-2xl bg-blue-100 rounded-lg p-3 border"
            type="submit">Submit
          </button>
        </form>
      </div>
    </div>
  );
};