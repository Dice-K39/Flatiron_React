import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      
        {directors.map((director, id) => 
        {
          return (
            <div key={id}>
              Director Name: {director.name}
              <br />
              Movies:
              <ul>
                {director.movies.map((movie, id) => 
                {
                  return (
                    <li key={id}>
                      {movie}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      
    </div>
  );
}

export default Directors
