import {FC} from 'react';

export const IndexOf: FC = () => {

  const words = 'Learning with React and TypeScript!';
  const searchTerm = 'React';

  console.log(words.indexOf(searchTerm));

  return (
    <div>

    </div>
  );
};