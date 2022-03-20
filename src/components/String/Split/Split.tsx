import {FC} from 'react';

export const Split: FC = () => {

  const paragraph = 'Learning React with typescript.';
  const words = paragraph.split(' ');
  // Array.from

  console.log(words);

  return (
    <div>

    </div>
  );
};
