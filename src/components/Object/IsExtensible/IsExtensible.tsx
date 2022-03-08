import {FC} from 'react';

export const IsExtensible: FC = () => {

  const obj = {};

  Object.preventExtensions(obj);

  console.log(Object.isExtensible(obj));

  return (
    <div>

    </div>
  );
};