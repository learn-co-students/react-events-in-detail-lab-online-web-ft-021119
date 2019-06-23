// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    click = (event) => {
        this.props.onReceiveCoordinates
    }


    render() {
        return (
        <div>
            <button onClick={this.click} />
        </div>
        )};
}