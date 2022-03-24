import {FC} from 'react';

export const ToBoolean: FC = () => {

  const value1 = Boolean('false');
  const value2 = Boolean(0);
  const value3 = Boolean(null);
  const value4 = Boolean(undefined);
  const value5 = Boolean('');
  const value6 = Boolean(NaN);

  console.log(value1);
  console.log(value2);
  console.log(value3);
  console.log(value4);
  console.log(value5);
  console.log(value6);

  return (
    <div>

    </div>
  );
};
