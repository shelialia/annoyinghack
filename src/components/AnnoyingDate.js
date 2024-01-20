import { useState } from 'react';

const AnnoyingDate = () => {
  

  return (
    <div>
      
        <label htmlFor='date'>
          Birth Time:
        </label>
          <input
            type='number'
            id='date'
            name='date'
            placeholder='Enter it as the number of seconds since 1st January 1970.'
            style={{ width: 400 }}
            pattern='[0-9]{10,}'
            required
          />
        
       
      
    </div>
  );
};

export default AnnoyingDate;