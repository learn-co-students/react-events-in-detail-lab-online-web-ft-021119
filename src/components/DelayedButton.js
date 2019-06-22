import React from 'react';


 class DelayedButton extends React.Component {

   handleClick() {
     setTimeout(this.props.onDelayedClick(event){
       console.log(event)
     }
   }
}

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

 export default DelayedButton;
