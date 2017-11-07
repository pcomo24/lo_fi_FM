import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: ''
    }
  }
  showVideo(event) {
    console.log(event.target);
    console.log('tape button clicked!');
    console.log(this.props.target);
    //how to change jsx that is rendered??
    this.setState({
      target: event.target
    })
    return <iframe src='https://www.youtube.com/watch?v=8i22oGH16Pw' height="200" width="300">
    </iframe>
  }
  render()  {
  return <div>
    <button type='button' onClick={(event) => console.log('radio button clicked!')}>
    radio
    </button>
    <button type='button' onClick={(event) => this.showVideo(event)}>
    tape
    </button>
  </div>
  }

}

export default StartButton;
