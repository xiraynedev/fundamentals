import { FC, FormEvent, useState } from 'react';
import { v4 } from 'uuid';

export const Search: FC = () => {
  const [skills, setSkills] = useState([
    'react',
    'angular',
    'vue',
    'javascript',
  ]);
  const [displaySkills, setDisplaySkills] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  const greeting = () => {

  }
  

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value.toLowerCase());
  };

  const handleClick = () => {
    if (!userInput) return;
    if (displaySkills.includes(userInput)) return;

    setDisplaySkills(prev => {
      const skillsSearched = skills.filter(skill => skill === userInput);
      return [...prev, ...skillsSearched];
    });
  };

  return (
    <>
      <h1 className='text-5xl text-center my-8 text-blue-800'>Skills Search!</h1>
      <div className='border w-8/12 mx-auto mt-4 p-8'>
        <div className='flex gap-5'>
          <input
            type='search'
            placeholder='search for a skill'
            value={userInput}
            onChange={handleChange}
            className='border p-4 rounded-lg h-fit outline-blue-500 shadow-sm'
          />
          <button className='border shadow-lg p-4 h-fit' onClick={handleClick}>
            Search Skill
          </button>
        </div>
        <div className='flex flex-col'>
          {displaySkills && (
            <div className='mt-4'>
              {displaySkills.map(skill => (
                <p key={v4()} className='border w-fit py-2 px-8 mb-4'>
                  {skill}
                </p>
              ))}
              {
                <p className='border py-2 px-8 rounded-lg w-fit'>
                  {displaySkills.includes(userInput)
                    ? 'Skill acquired!'
                    : 'Skill has not yet been acquired!'}
                </p>
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
};
