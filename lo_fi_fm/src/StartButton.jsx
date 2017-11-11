import React, { Component } from 'react';
import Button from './Button.jsx';

var StartButton = (props) => {
  
  showVideo(event) {
    console.log(event);
    console.log(this.props.buttonVar)
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
