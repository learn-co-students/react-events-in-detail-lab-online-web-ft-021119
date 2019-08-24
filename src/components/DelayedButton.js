import React, {Component} from 'react';

export default class DelayedButton extends Component {
  click = (event) => {
    event.persist()
    setTimeout(() => {
        this.props.onDelayedClick(event)
      },
      this.props.delay
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>Button</button>
      </div>
    )
  }
}
