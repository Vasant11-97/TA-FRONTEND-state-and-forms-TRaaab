import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1,
      max: Infinity,
      count: 0,
    };
  }
  handleMax = (event) => {
    this.setState({
      max: event.target.innerText,
    });
  };
  handleSteps = (event) => {
    this.setState({
      steps: event.target.innerText,
    });
  };
  handleIncrement = () => {
    this.setState({
      count: +this.state.count + +this.state.steps,
      max:
        +this.state.count + +this.state.steps > +this.state.max
          ? +this.state.count
          : +this.state.count + +this.state.steps,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: +(this.state.count - this.state.steps),
    });
  };
  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <h2>Max</h2>
        <button onClick={this.handleMax}>15</button>
        <button onClick={this.handleMax}>100</button>
        <button onClick={this.handleMax}>200</button>
        <h3>Steps</h3>
        <button onClick={this.handleSteps}>5</button>
        <button onClick={this.handleSteps}>10</button>
        <button onClick={this.handleSteps}>15</button>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default App;
