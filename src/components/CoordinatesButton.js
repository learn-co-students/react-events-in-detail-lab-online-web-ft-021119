// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  array = []
  clickEvent = (event) => {
    this.array.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(this.array)
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Button</button>
      </div>
    )
  }
}
