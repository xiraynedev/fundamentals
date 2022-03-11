import {FC, useState} from 'react';

export const Concat: FC = () => {

  const [concatString, setConcatString] = useState('');

  const string1 = 'Hello, ';
  const string2 = 'World!';

  const handleClick = () => {
    setConcatString(string1.concat(string2));
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 p-3 border w-6/12 mx-auto">
        <p>Hello, </p>
        <p>World!</p>
      </div>
      <p className='w-6/12 mx-auto mt-8'>Use the button below to concatenate the two paragraphs above.</p>
      <button
      onClick={handleClick}
        className='border shadow-lg py-4 px-8 block mx-auto mt-8'>Concat</button>
      {
        concatString && <p className='w-6/12 text-center p-3 border mx-auto mt-8'>{concatString}</p>
      }
    </>
  );
};