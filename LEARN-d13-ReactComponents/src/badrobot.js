import React, {Component} from 'react';



class Robot extends Component {
  render(){
    return(
      <div>
        <h2>I hear you saying {this.props.badRobot}.Is that correct?</h2>
      </div>
    )
  }
}


export default Robot;
