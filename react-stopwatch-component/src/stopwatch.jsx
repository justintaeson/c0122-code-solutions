import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      seconds: 0
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleTimerFace = this.handleTimerFace.bind(this);
  }

  handleButton() {
    if (this.state.isRunning === false) {
      this.interval = setInterval(() => {
        this.setState({
          isRunning: true,
          seconds: this.state.seconds + 1
        });
      }, 1000);
    } else if (this.state.isRunning === true) {
      clearInterval(this.interval);
      this.setState({ isRunning: false });
    }
  }

  handleTimerFace() {
    this.setState({ seconds: 0 });
  }

  render() {
    if (this.state.isRunning === false) {
      return (
      <>
        <div id="circle" onClick={this.handleTimerFace}>
          <div id="text">{this.state.seconds}</div>
        </div>
        <div id="fontawesome-container">
            <i className="fa-solid fa-play hidden" onClick={this.handleButton}></i>
        </div>
      </>);
    } else if (this.state.isRunning === true) {
      return (
        <>
          <div id="circle">
            <div id="text">{this.state.seconds}</div>
          </div>
          <div id="fontawesome-container">
            <i className="fa-solid fa-pause" onClick={this.handleButton}></i>
          </div>
        </>);
    }
  }
}
