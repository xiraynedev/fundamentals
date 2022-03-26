import {FC} from 'react';

export const Epsilon: FC = () => {
  const result = Math.abs(0.2 - 0.3 + 0.1);

  console.log(`The result is ${result}`);
  console.log(result < Number.EPSILON);
  console.log(`Epsilon is ${Number.EPSILON}`);

  return (
    <div>

    </div>
  );
};