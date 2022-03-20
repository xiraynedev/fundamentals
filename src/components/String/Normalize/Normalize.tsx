import {FC} from 'react';

export const Normalize: FC = () => {

  const name = '\u0041\u006d\u00e9\u006c\u0069\u0065';
  console.log(name.normalize('NFC'));

  const letter = '\u00F1';
  const sameLetter = '\u006E\u0303';
  console.log(`${letter === sameLetter.normalize()}`);


  return (
    <div>

    </div>
  );
};