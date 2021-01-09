import React from 'react';
import { movies } from '../data';

const Movies = () => 
{
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, id) => 
        {
          return (
            <div key={id}>
              Title: {movie.title}
              <br />
              Play Time: {movie.time}
              <br />
              Genres:
              {movie.genres.map((genre, id) => 
              {
                return (
                  <li key={id}>
                    {genre}
                  </li>
                )
              })}
              <br />
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
