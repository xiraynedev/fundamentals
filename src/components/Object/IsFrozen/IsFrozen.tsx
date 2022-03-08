import {FC} from 'react';

export const IsFrozen: FC = () => {
  const obj = {
    age: 30,
  };

  Object.freeze(obj);

  console.log(Object.isFrozen(obj));

  return (
    <div>

    </div>
  );
};