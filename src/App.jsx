import React, { Component } from 'react';
import css from './App.module.css';

class App extends Component {
  //Состояние//
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //Методы//

  //Render//
  render() {
    const {good, neutral, bad } = this.state;
    return (
      <>
      </>
    );
}
}

export default App;
