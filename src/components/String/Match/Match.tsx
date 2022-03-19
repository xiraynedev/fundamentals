import {FC} from 'react';

export const Match: FC = () => {

  const words = 'Learning React with TypeScript';
  const regex = /[A-Z]/g;
  const found = words.match(regex)

  console.log(found);

  return (
    <div>

    </div>
  );
};