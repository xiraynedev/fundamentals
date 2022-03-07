import {FC} from 'react';

export const DefineProperties: FC = () => {

  const obj1 = {};
  const obj2 = {};

  Object.defineProperty(obj1, 'firstname', {
    value: 'john knife',
  });

  Object.defineProperties(obj2, {
    firstname: {
      value: 'frank demoh',
    },
    age: {
      value: 30
    }
  });

  console.log(obj2);

  return (
    <>
      <div>

      </div>
    </>
  );
};