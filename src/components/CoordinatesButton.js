// Code CoordinatesButton Component Here
import React, { component } from 'react';


export default class CoordinatesButton extends React.Component{

handleClick = (event) => {
  const coords = [event.clientX, event.clientY]
  this.props.onReceiveCoordinates(coords)
}

  render(){
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
}
