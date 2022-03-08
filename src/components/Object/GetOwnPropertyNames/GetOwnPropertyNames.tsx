import {FC} from 'react';

export const GetOwnPropertyNames: FC = () => {

  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };

  console.log(Reflect.ownKeys(obj));
  console.log(Object.getOwnPropertyNames(obj));

  return (
    <div>

    </div>
  );
};