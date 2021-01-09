import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      <br />
      
      {actors.map((actor, id) =>
      {
        return (
          <div key={id}>
            Name: {actor.name}
            <br />
            Movies:
            <ul>
              {actor.movies.map((movie, id) => 
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
};

export default Actors;
