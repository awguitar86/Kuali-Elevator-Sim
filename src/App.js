import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      elOne: 1,
      elTwo: 1,
      elThree: 1,
      oneDoor: 'closed',
      twoDoor: 'closed',
      threeDoor: 'closed',
      selectedFloor: ''
    }
  }

  selectFloor = (e) =>{
    console.log(e.target.value);
    this.setState({
      selectFloor: e.target.value
    })
  }


  render() {
    const { elOne, elTwo, elThree, oneDoor, twoDoor, threeDoor } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <div className="elevator one">
            <h2>Elevator One</h2>
            <h3>{elOne}</h3>
            <h3>Door: {oneDoor}</h3>
          </div>
          <div className="elevator two">
            <h2>Elevator Two</h2>
            <h3>{elTwo}</h3>
            <h3>Door: {twoDoor}</h3>
          </div>
          <div className="elevator three">
            <h2>Elevator Three</h2>
            <h3>{elThree}</h3>
            <h3>Door: {threeDoor}</h3>
          </div>
        </header>

        <div className="btns">
          <button className="btn1" value={1} onClick={e => this.selectFloor(e)}>1</button>
          <button className="btn2" value={2} onClick={e => this.selectFloor(e)}>2</button>
          <button className="btn3" value={3} onClick={e => this.selectFloor(e)}>3</button>
          <button className="btn4" value={4} onClick={e => this.selectFloor(e)}>4</button>
          <button className="btn5" value={5} onClick={e => this.selectFloor(e)}>5</button>
          <button className="btn6" value={6} onClick={e => this.selectFloor(e)}>6</button>
          <button className="btn7" value={7} onClick={e => this.selectFloor(e)}>7</button>
          <button className="btn8" value={8} onClick={e => this.selectFloor(e)}>8</button>
          <button className="btn9" value={9} onClick={e => this.selectFloor(e)}>9</button>
          <button className="btn10" value={10} onClick={e => this.selectFloor(e)}>10</button>
        </div>
      </div>
    );
  }
}

export default App;
