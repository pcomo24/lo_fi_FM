import React, { Component } from 'react';
import StartButton from './StartButton';
import './App.css';

//have radio button and tapes button
//onClick of radio button shows live channels(3) playing now
//onClick of tapes button shows channels(3)
//once live channel or tape is selected bring up play/pause, rw, ff, skip


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tapeButton: '',
      tapeIsHidden: true,
      buttonsIsHidden: true
    }
  }
  onStartButtonClick(event) {
    console.log('start button clicked!');
    console.log(event.target);
  }
  onButtonClick() {
    console.log('tape button clicked!');
    this.setState({
      tapeButton: 'tape button clicked!',
      isHidden : !this.state.isHidden
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.buttonsIsHidden && <StartButton/>}


      </div>

    );
  }
}

export default App;
