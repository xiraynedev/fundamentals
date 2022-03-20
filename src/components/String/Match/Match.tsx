import {FC} from 'react';

export const Match: FC = () => {

  const words = 'Learning React with TypeScript';
  console.log(words.match(/[A-Z]/g));

  return (
    <div>

    </div>
  );
};