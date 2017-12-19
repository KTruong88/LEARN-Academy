import React, {Component} from 'react';

class Greeting extends Component {
  render() {
    return (
        <h2>Welcome, {this.props.badRobot}</h2>
    );
  }
}

export default Greeting;
