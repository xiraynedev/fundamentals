import {FC} from 'react';

export const Create: FC = () => {

  const person = {
    name: 'john knife',
    printGreeting() {
      console.log(`My name is ${this.name}.`);
    }
  };

  const me = Object.create(person);
  me.name = 'frank demoh';

  console.log(me.printGreeting());

  return (
    <>
      <div>

      </div>
    </>
  );
};