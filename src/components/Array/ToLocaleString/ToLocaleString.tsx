import {FC, useState} from 'react';

export const ToLocaleString: FC = () => {

  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState<Date>();

  const handleClick = () => {
    const currentDate = new Date();
    setNewDate(currentDate);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-8'>
          {
            newDate
            ? <p className='text-3xl text-red-500 mt-8'>{newDate.toLocaleString()}</p>
            : <p className='text-3xl text-red-500 mt-8'>{date.toLocaleDateString()}</p>
          }
        <button
          onClick={handleClick}
          className='border shadow-2xl p-4 mt-8'>Get Locale String</button>
      </div>
    </>
  );
};