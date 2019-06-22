// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleClick(event){
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return(
            <button onClick={(event) => this.handleClick(event) }>Another button</button>
        )
    }
}

export default DelayedButton