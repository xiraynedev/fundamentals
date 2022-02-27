import {ChangeEvent, FC, useState} from 'react';

export const IsArray: FC = () => {
  const [userInput, setUserInput] = useState('');
  const [arrayMessage, setArrayMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value);
  };

  const handleClick = () => {

    if (userInput.slice(0, 1) === '[' && userInput.slice(-1) === ']') {
      setArrayMessage('The value you entered is an array.');
      return;
    }

    setArrayMessage('The value you entered is not an array.')
  };

  return (
    <div className="flex w-10/12 mx-auto mt-8 justify-center items-center">
      <div>
        <input
          type="text"
          placeholder="Add value to test for array..."
          value={userInput}
          onChange={handleChange}
          className="w-10/12 border p-4 outline-blue-200"
        />
        <p className="mt-4">Type a value into the text field. If the value you provide is an array,
          it will be displayed below.
        </p>
        <button
          onClick={handleClick}
          className="border shadow-lg py-2 px-8 mt-8 outline-blue-200"
        >Test for Array
        </button>
        {
          arrayMessage && <p className="mt-8 tracking-wider font-bold text-emerald-900">{arrayMessage}</p>
        }
      </div>
    </div>
  );
};