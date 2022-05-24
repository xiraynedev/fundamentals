import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';
import { useFormik } from 'formik';

export const Palindrome: FC = () => {
  const [isPalindrome, setIsPalindrome] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstText: '',
    },
    onSubmit() {},
    validate() {},
  });

  const handleClick = () => {
    if (
      formik.values.firstText.split('').reverse().join('') ===
      formik.values.firstText
    ) {
      setIsPalindrome(true);
    } else {
      setIsPalindrome(false);
    }
  };

  return (
    <Stack spacing={4} margin={10}>
      <Typography variant='h5'>
        Enter two words below to see if they are palindromes.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction='row' spacing={4}>
          <TextField
            label='Enter a word'
            {...formik.getFieldProps('firstText')}
          />
        </Stack>
        <Stack direction='row' marginTop={4}>
          <Button variant='contained' onClick={handleClick}>
            Check for Palindrome
          </Button>
        </Stack>
      </form>
      {isPalindrome ? (
        <Typography color='primary'>The word you entered is indeed a palindrome.</Typography>
      ) : (
        <Typography color='error'>That word is not a palindrome.</Typography>
      )}
    </Stack>
  );
};
