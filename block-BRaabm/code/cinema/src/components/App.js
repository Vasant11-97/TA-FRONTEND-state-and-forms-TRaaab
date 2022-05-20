// import React from 'react';
// import data from '../data.json';
// import Details from './Details';

// console.log(data);
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: null,
//     };
//   }

//   handleClick = (index) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   render() {
//     let everyDetails = data.map((d) => {
//       return d;
//     });
//     return (
//       <>
//         <ul className="flex justify-content align-items wrap">
//           {data.map((movie, index) => {
//             return (
//               <li className="card" key={index}>
//                 <img
//                   src={movie.Images[0]}
//                   alt="Poster"
//                   width="100%"
//                   height="200px"
//                 ></img>
//                 <p>Name: {movie.Title}</p>
//                 <p>Year: {movie.Year}</p>
//                 <p>Duration: {movie.Runtime}</p>
//                 <button onClick={this.handleClick}>View More</button>
//               </li>
//             );
//           })}
//         </ul>
//         <Details everyDetails={everyDetails} />
//       </>
//     );
//   }
// }

// export default App;

import MovieList from './MovieList';
function App() {
  return (
    <main className="bg-primary min-h-screen pt-12">
      <h1 className="text-3xl text-center text-white mb-8">Movie List</h1>
      <MovieList />
    </main>
  );
}

export default App;
