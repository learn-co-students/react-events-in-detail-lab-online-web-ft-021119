import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  coordinatesArray = []

  handleClick = (event) => {
    this.coordinatesArray.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(this.coordinatesArray)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }
}
