import {FC} from 'react';

export const LocaleCompare: FC = () => {

  const a = 'réservé';
  const b = 'RESERVE';

  console.log(a.localeCompare(b));

  return (
    <div>

    </div>
  );
};