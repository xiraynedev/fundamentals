import { FC, useState } from 'react';
import { useFormik } from 'formik';

export const Quiz: FC = () => {
  const [primitives] = useState([
    'big int',
    'boolean',
    'null',
    'number',
    'string',
    'symbol',
    'undefined',
  ]);
  const [allCorrectAnswers, setAllCorrectAnswers] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState(false);

  const formik = useFormik({
    initialValues: {
      textAnswer: '',
    },
    onSubmit() {
      const enteredValues = formik.values.textAnswer.split(', ');
      let correctCounter = 0;

      for (const value of enteredValues) {
        if (primitives.includes(value)) {
          correctCounter++;
        }
      }

      if (correctCounter === primitives.length) {
        setAllCorrectAnswers(true);
        setIncorrectAnswers(false);
      } else {
        setAllCorrectAnswers(false);
        setIncorrectAnswers(true);
      }
    },
    validate() {},
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2em',
        margin: '2em',
      }}
    >
      <h2
        style={{
          maxWidth: '30%',
        }}
      >
        Enter the primitive data types available in JavaScript. Separate each
        data type with a comma and a space. Avoid the comma after the final data
        type.
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2em',
        }}
      >
        <textarea
          {...formik.getFieldProps('textAnswer')}
          style={{
            width: 400,
            height: 200,
            backgroundColor: '#eee',
            padding: '10px',
          }}
        ></textarea>
        <button
          type='submit'
          style={{
            width: 'fit-content',
            backgroundColor: 'lightblue',
            padding: '.5em 3em',
          }}
        >
          Submit
        </button>
      </form>
      <div>
        {allCorrectAnswers && (
          <h3>Congratulations! You got all the data types!</h3>
        )}

        {incorrectAnswers && (
          <h3>Not quite. You are missing one or more data type(s).</h3>
        )}
      </div>
    </div>
  );
};
