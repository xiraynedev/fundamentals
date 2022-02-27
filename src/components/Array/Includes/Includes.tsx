import {FC, useRef, useState} from 'react';

export const Includes: FC = () => {

  const [userInput, setUserInput] = useState('');
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const [isWordFound, setIsWordFound] = useState(false);

  const handleClick = () => {
    const stringValue = paragraphRef.current?.textContent?.split(' ');

    if (stringValue) {
      setIsWordFound(stringValue.includes(userInput));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 mx-auto w-10/12">
        <p
          ref={paragraphRef}
          className="border p-4 mb-4">
          This is sample text. Use the text input below to see if a word is already included in this sample text.
        </p>
        <input type="text"
               placeholder="Enter a word to search for..."
               className="mb-4 border outline-blue-200 p-4 w-10/12 lg:max-w-2xl"
               value={userInput}
               onChange={event => setUserInput(event.currentTarget.value)}
        />
        <button className="border shadow-lg py-4 px-8 mt-4 outline-blue-200"
                onClick={handleClick}>Search Text
        </button>
        {
          isWordFound && <p className='mt-8 font-bold text-cyan-900 tracking-wider'>Yes! The word you searched for is in the sample text.</p>
        }
      </div>
    </>
  );
};