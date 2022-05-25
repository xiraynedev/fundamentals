import { FC } from 'react';
import Stack from '@mui/material/Stack';

export const ReverseInt: FC = () => {
  const num = -189;

  const reversedNum = num.toString().split('').reverse().join('');

  console.log(Number.parseInt(reversedNum) * Math.sign(num))

  return <Stack></Stack>;
};
