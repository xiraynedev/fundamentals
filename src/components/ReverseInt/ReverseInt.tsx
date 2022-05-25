import { FC } from 'react';
import Stack from '@mui/material/Stack';

export const ReverseInt: FC = () => {
  const num = -189;

  const reversedNum = num.toString().split('').reverse().join('');

  if (Math.sign(num) === -1) {
    console.log(-Number.parseInt(reversedNum));
  } else {
    console.log(Number.parseInt(reversedNum));
  }

  return <Stack></Stack>;
};
