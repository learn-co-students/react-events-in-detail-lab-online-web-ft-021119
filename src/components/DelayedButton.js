// Code DelayedButton Component Here
import React, {Component} from 'react'


export default class DelayedButton extends Component {
  constructor(props){
    super(props)
  }


  clickHandle = (e) => {
  e.persist()
  setTimeout(() => {
    this.props.onDelayedClick(e)},
    this.props.delay
  )

}

  // setTimeout() =





  render() {
    return (
      <button onClick={this.clickHandle} />

    )
  }
}
 // delay === number
