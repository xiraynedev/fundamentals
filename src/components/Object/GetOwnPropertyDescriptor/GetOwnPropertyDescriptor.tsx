import {FC} from 'react';

export const GetOwnPropertyDescriptor: FC = () => {

  const obj = {
    age: 30,
  };

  const descriptor = Object.getOwnPropertyDescriptor(obj, 'age');
  console.log(descriptor);

  return (
    <div>

    </div>
  );
};