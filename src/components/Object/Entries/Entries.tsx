import {FC} from 'react';

export const Entries: FC = () => {

  const obj1 = {
    a: 'something',
    b: 42,
  };

  for (const [key, value] of Object.entries(obj1)) {
    console.log(`The key is ${key}, and the value is ${value}.`);
  }

  return (
    <>
      <div>

      </div>
    </>
  );
};