import {FC, useState} from 'react';
import {v4} from 'uuid';

export const ForEach: FC = () => {

  const [values, setValues] = useState(['String', 'Number', 'Boolean']);
  const [extractedValuesTemplate, setExtractedValuesTemplate] = useState<string[]>([]);

  const handleClick = () => {
    values.forEach(value => {
      setExtractedValuesTemplate(prevState => [...prevState, value]);
    })

    setValues([]);
  };

  return (
    <>
      <div className='border p-8 m-8'>
        {
          values.map(value => (
            <p key={v4()}>{value}</p>
          ))
        }
      </div>
      <button onClick={handleClick}
        className='ml-8 mt-2 border outline-0 p-4 bg-amber-50 font-bold text-blue-900 tracking-wider'>
        Click to extract all values
      </button>

      <div className='border p-8 m-8'>
        {
          extractedValuesTemplate.map(value => (
            <p key={v4()} className=''>{value}</p>
          ))
        }
      </div>
    </>
  )
}