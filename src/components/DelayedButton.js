// Code DelayedButton Component Here
import React, { Component } from 'react';


export default class DelayedButton extends Component {

  clickHandler = (event) => {
    event.persist()
    let delayedEvent = this.props.onDelayedClick(event)

    setTimeout(function() {this.delayedEvent}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.clickHandler}>Delayed</button>
    )
  }


}




// In the components/DelayedButton.js file, create a DelayedButton React component
//
// This component takes two props: onDelayedClick (a function), and delay (a number).
//
// Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
//
// If successful, the event will be logged to the console once the timeout has finished.
