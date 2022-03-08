import {FC} from 'react';

export const Is: FC = () => {

  const obj1 = {a: 1};
  const obj2 = {a: 1};

  const obj3 = obj2;

  const age = 30;
  const amount = 30;

  console.log(Object.is(obj1, obj2));
  console.log(Object.is(obj2, obj3));
  console.log(Object.is(age, amount));

  return (
    <div>

    </div>
  );
};