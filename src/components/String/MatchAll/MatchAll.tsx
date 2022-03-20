import {FC} from 'react';

export const MatchAll: FC = () => {
  const string1 = 'test1test2';
  const array = [...string1.matchAll(/t(e)(st(\d?))/g)];

  for (const value of array) {
    console.log(value);
  }

  return (
    <div>

    </div>
  );
};