import {FC} from 'react';

export const LastIndexOf: FC = () => {

  const words = 'Learning React with TypeScript!';
  const word = 'with';

  console.log(words.lastIndexOf(word));

  return (
    <div>

    </div>
  )
}