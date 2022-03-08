import {FC} from 'react';

export const GetPrototypeOf: FC = () => {

  const prototype = {};

  const obj = Object.create(prototype);

  console.log(Reflect.getPrototypeOf(obj) === prototype);
  console.log(Object.getPrototypeOf(obj) === prototype);

  return (
    <div>

    </div>
  );
};