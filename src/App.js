// In React, create a Counter component that does the following:
// 1. Display a number with a minimum value of 0, and a maximum value of 100
// 2. Increments the counter by 1 when the user clicks an up arrow
// 3. Decreases the counter by 1 when the user clicks a down arrow
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      clicks: 0,
      show: true
    };
  }
  OnclickPositive = () => {
    if(this.state.clicks === 100){
      return;
    }
    this.setState({ clicks: this.state.clicks + 1});
  }
  OnclickNegative = () => {
    if(this.state.clicks === 0){
      return;
    }
    this.setState({ clicks: this.state.clicks - 1});
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.OnclickPositive}> <i className="up"></i></button>
        <button onClick={this.OnclickNegative}> <i className="down"></i></button>
        {this.state.show ? <h3>{this.state.clicks}</h3> : ''}
      </div>
    );
  }
}



export default App;
