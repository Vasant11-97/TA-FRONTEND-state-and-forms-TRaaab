import React from 'react';
import data from '../data.json';

console.log(data);
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-content align-items wrap">
        {data.map((movie) => {
          return (
            <div className="card">
              <img src={movie.Poster} alt="Poster" width="100%"></img>
              <p>Name: {movie.Title}</p>
              <p>Year: {movie.Year}</p>
              <p>Duration: {movie.Runtime}</p>
              <button>View More</button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
