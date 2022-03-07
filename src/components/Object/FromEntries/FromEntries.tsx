import {FC} from 'react';

export const FromEntries: FC = () => {

  const entries = new Map([['name', 'john'], ['name2', 'frank']]);

  console.log(entries);

  const obj = Object.fromEntries(entries);

  console.log(obj);

  return (
    <>
      <div>

      </div>
    </>
  );
};