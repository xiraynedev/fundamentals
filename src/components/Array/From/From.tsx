import {FC, useRef, useState} from 'react';
import {v4} from 'uuid';

export const From: FC = () => {

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const [arrayValue, setArrayValue] = useState<string[]>([]);

  const handleClick = () => {
    const stringValue = paragraphRef.current?.textContent;
    setArrayValue(Array.from(stringValue as string));
  };

  return (
    <>
      <div className='flex justify-center mt-12 border p-8 text-2xl'>
        <p ref={paragraphRef}>Turn this into an array of characters!</p>
      </div>
      <button onClick={handleClick}
        className='border shadow-lg p-4 m-8 w-10/12 mx-auto block lg:max-w-2xl'>Begin Array Creation</button>
      <div className='flex justify-center mt-12 border p-8 text-2xl flex-wrap'>
        {
          arrayValue.map(value => (
            <p key={v4()}>{value}.</p>
          ))
        }
      </div>
    </>
  );
};