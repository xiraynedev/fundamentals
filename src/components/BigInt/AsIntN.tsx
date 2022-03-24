import {FC} from 'react';

export const AsIntN: FC = () => {

  const max = 2n ** (64n - 1n) - 1n;

  const check64bit = (number: bigint) => {
    number > max
      ? console.log(`Number doesn't fit in signed 64-bit integer.`)
      : console.log(BigInt.asIntN(64, number));
  };

  check64bit(2n ** 64n);
  check64bit(2n ** 32n);


  return (
    <div>

    </div>
  );
};