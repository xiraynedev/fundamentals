import { FC } from 'react';
import Stack from '@mui/material/Stack';

export const ArrayChunk: FC = () => {
  const array = [1, 2, 3, 4, 5, 6];

  const chunked: number[][] = [];
  let index = 0;
  const size = 5;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  console.log(chunked);

  return <Stack></Stack>;
};
