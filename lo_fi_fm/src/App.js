import React, { Component } from 'react';
import SourceButtons from './SourceButtons';
import './App.css';
import axios from 'axios';

//on home page load show start button(power button)
/*on click of start button hide start button, render radio and tape button
**request youtube data API with query 'lofi' and 'channels' filter, then cache top(25?) */
/*onClick of radio button, query lofi with channels filter and 'eventType ="live"
or liveBroadcastContent="live"' for live options searcchannels(3) playing now and render as options*/
//onClick of tapes button request channels(3) and render as options
//once live channel or tape is selected bring up play/pause, rw, ff, skip

const searchUrl = 'https://www.googleapis.com/youtube/v3/search?';
const key = 'key=AIzaSyDfq9MeRdasqu6lRrKzP_be-HxdXejiICE';
const query = `q=lofi&maxResults=25&type=channel&${key}&part=snippet`;

const httpReq = `${searchUrl}${query}`;

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
      buttonsIsHidden: true,
      testProps: 'props are being passed'
    }
  }
  loadButtons(event) {
    console.log(httpReq);
    this.setState({
      buttonsIsHidden: !this.state.buttonsIsHidden,
    })
    axios.get(httpReq)
      .then(function(res) {
        console.log(res)
      })
      .catch(function (error) {
    console.log(error);
  });
  }
  onStartButtonClick(event) {
    console.log('start button clicked!');
    console.log(event.target);

    //axios request

  }
  onButtonClick() {
    console.log('tape button clicked!');
    this.setState({
      tapeButton: 'tape button clicked!',
      isHidden : !this.state.isHidden,
  })
}
  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.loadButtons(event)}>Start</button>
        {this.state.buttonsIsHidden && <SourceButtons testProps={this.state.testProps}/>}


      </div>

    );
  }
}

export default App;
