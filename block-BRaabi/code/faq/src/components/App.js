// import React from 'react';
// import data from '../data';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   handleShow = () => {
//     let a = document.querySelector('.answer');
//     console.log(a);
//   };
//   render() {
//     let questions = data.map((ele) => {
//       return ele;
//     });
//     return (
//       <>
//         <h1>Welcome</h1>
//         {questions.map((value) => {
//           return (
//             <div className="frame peach">
//               <ul className="flex">
//                 <li>{value.Q}</li>
//                 <ul className="flex">
//                   <button className="down" onClick={this.handleShow}>
//                     👇🏻
//                   </button>
//                   <button className="up">👆🏾</button>
//                 </ul>
//               </ul>
//               <ul>
//                 <li className="answer">{value.A}</li>
//               </ul>
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// }

// export default App;

import faqs from '../data.json';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <>
        <h1>AltCampus FAQ</h1>
        <ul>
          {faqs.map((faq, index) => (
            <li>
              <h2
                onClick={() => {
                  this.setState({
                    activeIndex:
                      this.state.activeIndex === index ? null : index,
                  });
                }}
              >
                {faq.Q} {this.state.activeIndex === index ? '👆🏾' : '👇🏻'}
              </h2>
              {index === this.state.activeIndex && <p>{faq.A}</p>}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
