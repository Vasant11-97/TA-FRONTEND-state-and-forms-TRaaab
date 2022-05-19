import React from 'react';
// import basketball from './assets/basketball.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: '/assets/basketball.jpg',
    };
  }
  handleClick = (event) => {
    this.setState({
      currentImage: '/assets/' + event.target.innerText + '.jpg',
    });
  };
  render() {
    return (
      <>
        <h1>Let's build Assignment</h1>
        <div>
          <img
            src={this.state.currentImage}
            width="300px"
            height="300px"
            alt="Sports"
          ></img>
        </div>
        <div>
          <button onClick={this.handleClick}>basketball</button>
          <button onClick={this.handleClick}>cricket</button>
          <button onClick={this.handleClick}>laptop</button>
          <button onClick={this.handleClick}>phone</button>
          <button onClick={this.handleClick}>pubg</button>
          <button onClick={this.handleClick}>tiger</button>
        </div>
      </>
    );
  }
}

export default App;
