import {FC} from 'react';

export const Raw: FC = () => {

  const filePath = String.raw`C:\Development\profile\about.html`;

  console.log(`The file was uploaded from ${filePath}.`);

  return (
    <div>

    </div>
  );
};