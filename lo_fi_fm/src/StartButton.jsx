import React, { Component } from 'react';

//how to do this properly??
const button = <button type='button' onClick={(event) => this.showVideo(event)}>tape</button>;
//can i setState as function??...yes, but this.showVideo doesnt work
function returnButton() {
  return <button type='button' onClick={(event) => this.showVideo(event)}>tape</button>;
}

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tapeButton: returnButton()
    }
  }
  showVideo(event) {
    console.log(event);
    console.log('tape button clicked!');
    this.setState({
      tapeButton: 'tape button clicked!'
    })
    return <iframe src='https://www.youtube.com/watch?v=8i22oGH16Pw' height="200" width="300">
    </iframe>
  }
  render()  {
  return (
    <div>
      <button type='button' onClick={(event) => console.log('radio button clicked!')}>
      radio
      </button>
      {this.state.tapeButton}
    </div>
  )
  }

}

export default StartButton;
