import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ReverseString: FC = () => {
  return (
    <Stack spacing={2} margin={10} width={200}>
      <Typography>Go ahead and reverse this string.</Typography>
      <Button variant='contained'>Reverse String</Button>
    </Stack>
  );
};
