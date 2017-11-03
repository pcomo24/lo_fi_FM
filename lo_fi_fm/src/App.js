import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//have start button
//onclick of start button change state of container div to show radio station components
//click radio station to play
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type='button'>Start</button>

      </div>

    );
  }
}

export default App;
