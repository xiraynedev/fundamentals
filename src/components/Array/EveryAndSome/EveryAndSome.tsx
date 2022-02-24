import {FC, MutableRefObject, useRef, useState} from 'react';

export const EveryAndSome: FC = () => {
  const numbers = [1, 3, 5, 7, 9, 1];
  const [isEvery, setIsEvery] = useState<boolean>();
  const [isSome, setIsSome] = useState(false);
  const isEveryRef = useRef<HTMLParagraphElement | null>(null);
  const isSomeRef = useRef<HTMLParagraphElement | null>(null);

  const handleEvery = () => {
    setIsEvery(numbers.every(value => value > 10));
    if (!isEvery) {
      isEveryRef.current?.setAttribute('class', 'block');
    }
  };

  const handleSome = () => {
    setIsSome(numbers.some(value => value > 10));
    if (!isSome) {
      isSomeRef.current?.setAttribute('class', 'block');
    }
  };

  return (
    <div className="w-10/12 mx-auto flex justify-between mt-12">
      <div className="mr-4">
        <p>The every method checks to see if every number in the array is over ten.</p>
        <p className="mt-4">[{numbers.join(',')}]</p>
        <button onClick={handleEvery} className="mt-4 border py-2 px-8">Every</button>
        <div className="mt-8">
          {
            isEvery
              ? <p>Every number is above ten.</p>
              : <p className="hidden" ref={isEveryRef}>Not all numbers are above ten.</p>
          }
        </div>
      </div>
      <div>
        <p>The some method checks to see if at least one number is over ten.</p>
        <p className="mt-4">[{numbers.join(',')}]</p>
        <button onClick={handleSome} className="mt-4 border py-2 px-8">Some</button>
        <div className="mt-8">
          {
            isSome
              ? <p>At least one element is above ten.</p>
              : <p className='hidden' ref={isSomeRef}>None of the elements are above ten.</p>
          }
        </div>
      </div>
    </div>
  );
};