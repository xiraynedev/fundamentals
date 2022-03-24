import {FC} from 'react';

export const ToLocaleString: FC = () => {
  const bigint = 123456789123456789n;

  console.log(bigint.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }));

  return (
    <div>

    </div>
  );
};