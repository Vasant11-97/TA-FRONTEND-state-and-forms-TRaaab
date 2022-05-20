// import React from 'react';
// function Details(props) {
//   console.log(props.everyDetails);

// }

// export default Details;

import React from 'react';
import movies from '../data';
import Modal from './Modal';
class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  handleClick = (index) => {
    this.setState({
      activeIndex: index,
    });
  };
  handleToggle = () => {
    this.setState({
      activeIndex: null,
    });
  };
  isActive() {
    if (this.state.activeIndex || this.state.activeIndex === 0) return true;
    else return false;
  }
  render() {
    return (
      <div>
        {!this.isActive() ? (
          <ul className="flex wrap justify-content">
            {movies.map((movie, index) => (
              <li className="card" key={index}>
                <img className="" src={movie.Images[0]} alt="" width="100%" height="200px"/>
                <div>
                  <h3 className="text-white text-center text-2xl mt-2">
                    {movie.Title}
                  </h3>
                  <h4 className="text-white text-center">
                    Released at {movie.Released}
                  </h4>
                  <button
                    className="more-btn text-white absolute top-4 right-4"
                    onClick={() => {
                      this.handleClick(index);
                    }}
                  >
                    More Info
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <button
              onClick={this.handleToggle}
              className="cross"
            >
              ❌
            </button>
            <Modal activeIndex={this.state.activeIndex} />
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
