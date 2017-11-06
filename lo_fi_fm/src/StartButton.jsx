import React, { Component } from 'react';

class StartButton extends Component {
  render()  {
  return <button type='button' onClick={(event) => console.log('start button clicked!')}>
  Start
  </button>
  }

}

export default StartButton;
