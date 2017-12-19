import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './welcome.js';
import Kanye from './kanyebot.js';
import Robot from './badrobot.js';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      badRobot: "",
      userName: ""

    }
  }

  updateInput(event){
    this.setState({userName:event.target.value})
  }




  //sentence = event
  //words = sentence.split(" ");
  //letters = words.split("");
  //iterate through the letters array
  //assign each letter the appropriate letter in the "bla" array

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Greeting badRobot={this.state.badRobot} />
          <Kanye badRobot={this.state.badRobot} />
          <Robot badRobot={this.state.badRobot} />
        </div>
        <div>
          <input value={this.state.value} onChange={this.updateInput.bind(this)}  />


        </div>
      </div>
    );
  }
}

export default App;
