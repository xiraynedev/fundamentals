import {FC} from 'react';

export const Assign: FC = () => {
  const o1 = {a: 1};
  const o2 = {b: 2};
  const o3 = {c: 3};

  const o4 = Object.assign({}, o1, o2, o3);

  console.log(o4);

  return (
    <>
      <div className='flex flex-col items-center mt-8 text-xl'>
        <p>Object o4 has the value {o4.c} for property c.</p>
      </div>
    </>
  );
};