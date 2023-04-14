import React, { Component } from 'react';
// import css from './App.module.css';

class App extends Component {
  //Состояние//
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //Методы//
  handleIncrementGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  //Render//
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>
            Total: {good} + {neutral} + {bad}
          </li>
        </ul>
      </>
    );
  }
}

export default App;
