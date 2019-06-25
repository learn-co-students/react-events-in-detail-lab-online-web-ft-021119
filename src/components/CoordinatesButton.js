// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  constructor(props){
    super(props)
  }




    buttonXandY = (e) => {
      let XandY = [e.clientX, e.clientY]
      return (
        this.props.onReceiveCoordinates(XandY)
      )
    }






  render() {
    return (
      <button onClick={this.buttonXandY} />



    )
  }

}
