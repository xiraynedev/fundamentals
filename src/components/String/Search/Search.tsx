import {FC} from 'react';

export const Search: FC = () => {

  const paragraph = 'Learning React with typescript.';

  const index = paragraph.search(/with/g);

  console.log(paragraph.at(index));

  return (
    <div>

    </div>
  );
};
