// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleClick(event){
        let positions = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(positions)
    }

    render(){
        return(
            <button onClick={(event) => this.handleClick(event)}>Some button</button>
        )
    }
}

export default CoordinatesButton