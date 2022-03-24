import {FC} from 'react';

export const AsUintN: FC = () => {
  const max = 2n ** 64n - 1n;

  const check64bit = (number: bigint) => {
    number > max
      ? console.log(`Number doesn't fit unsigned 64-bit integer.`)
      : console.log(BigInt.asUintN(64, number));
  };

  check64bit(2n ** 64n);
  check64bit(2n ** 32n);

  return (
    <div>

    </div>
  );
};