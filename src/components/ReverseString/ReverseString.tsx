import { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ReverseString: FC = () => {

  const [wordString, setWordString] = useState('Go ahead and reverse this string.')

  const handleClick = () => {
    
  }

  return (
    <Stack spacing={2} margin={10} width={200}>
      <Typography>{wordString}</Typography>
      <Button variant='contained' onClick={handleClick}>Reverse String</Button>
    </Stack>
  );
};
