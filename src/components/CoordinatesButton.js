// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    super 

    click = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }


    render() {
        return (
        <div>
            <button onClick={this.click} />
        </div>
        )};
}