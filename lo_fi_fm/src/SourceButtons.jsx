import React, { Component } from 'react';
import Button from './Button.jsx';

export default class SourceButton extends Component {
  constructor(props) {
    super(props);
  }

  render()  {
  return (
    <div>
      <button type='button' onClick={(event) => console.log('radio button clicked!')}>
      radio
      </button>
      <button type='button' onClick={(event) => this.showVideo(event)}>tape</button>
      {/*this.state.isHidden && <Button/>*/}
      {this.props.testProps}
    </div>
  )
  }
}
