import React from 'react';
import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleShow = () => {
    let a = document.querySelector('.answer');
    console.log(a);
  };
  render() {
    let questions = data.map((ele) => {
      return ele;
    });
    return (
      <>
        <h1>Welcome</h1>
        {questions.map((value) => {
          return (
            <div className="frame peach">
              <ul className="flex">
                <li>{value.Q}</li>
                <ul className="flex">
                  <button className="down" onClick={this.handleShow}>
                    👇🏻
                  </button>
                  <button className="up">👆🏾</button>
                </ul>
              </ul>
              <ul>
                <li className="answer">{value.A}</li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
