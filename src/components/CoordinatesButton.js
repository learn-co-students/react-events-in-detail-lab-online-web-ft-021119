import React from 'react';

class CoordinatesButton extends React.Component {


  createArray = (e) => {
  	this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <button onClick={this.createArray}>
       	Coordinates
      </button>
    )
  }
}



export default CoordinatesButton;





