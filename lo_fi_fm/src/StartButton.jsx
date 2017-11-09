import React, { Component } from 'react';
import Button from './Button.jsx';

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tapeButton: '',
      isHidden: true
    }
  }
  showVideo(event) {
    console.log(event);
    console.log('tape button clicked!');
    this.setState({
      tapeButton: 'tape button clicked!',
      isHidden : !this.state.isHidden
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
      <button type='button' onClick={(event) => this.showVideo(event)}>tape</button>
      {this.state.isHidden && <Button/>}
    </div>
  )
  }

}

export default StartButton;
