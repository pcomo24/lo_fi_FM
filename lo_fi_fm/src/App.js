import React, { Component } from 'react';
import StartButton from './StartButton';
import './App.css';

//have start button
//onclick of start button change state of container div to show radio station components
//click radio station to play


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

class App extends Component {
  onStartButtonClick(event) {
    console.log('start button clicked!');
    console.log(event.target);
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StartButton/>


      </div>

    );
  }
}

export default App;
