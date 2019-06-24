// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {

    createDelay = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event); },
            this.props.delay
        ) 
    }

    
    
    render() {
        return (
            <div>
                <button onClick={this.createDelay}></button>
            </div>
        )
    }
}