import {FC} from 'react';

export const MaxSafeInteger: FC = () => {

  const num1 = Number.MAX_SAFE_INTEGER + 1;
  const num2 = Number.MAX_SAFE_INTEGER + 2;

  console.log(Number.MAX_SAFE_INTEGER);
  console.log(num1);
  console.log(num2);

  return (
    <div>

    </div>
  );
};