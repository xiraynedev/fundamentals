import {FC} from 'react';

export const Freeze: FC = () => {

  const obj1 = {
    age: 42,
    details: {
      name: 'john knife'
    }
  };

  // shallow freeze only
  Object.freeze(obj1);

  // prevented from changing age
  obj1.age = 30;

  // able to change name with shallow freeze
  obj1.details.name = 'frank demoh'

  Object.freeze(obj1.details)

  // prevented from changing name with deep freeze
  obj1.details.name = 'keith codes'

  console.log(obj1);

  // arrays can be frozen
  const arr = [1, 2];
  Object.freeze(arr)

  arr.push(3);

  console.log(arr);

  return (
    <>
      <div>

      </div>
    </>
  );
};