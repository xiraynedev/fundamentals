import {FC} from 'react';

export const Includes: FC = () => {

  const words = 'We are learning about JavaScript!';
  const word = 'learning';
  const isWordFound = words.includes(word);

  console.log(`The word "${word}" is${isWordFound ? '': ' not'} included in the string "${words}."`);

  return (
    <div>

    </div>
  );
};