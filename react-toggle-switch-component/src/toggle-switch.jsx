import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 };
  }

  handleClick() {

    this.setState(state => {
      var clickCounter = { clicked: (state.clicked + 1) };
      return clickCounter;
    });
  }

  render() {
    if (this.state.clicked === 0 || this.state.clicked % 2 === 0) {
      return (
        <div className='display-flex'>
          <div id="toggle-container" onClick={this.handleClick.bind(this)}>
            <div className="toggle-slider"></div>
          </div>
          <div id="label" onClick={this.handleClick.bind(this)}>OFF</div>
        </div>
      );
    } else {
      return (
        <div className='display-flex'>
          <div id="toggle-container" onClick={this.handleClick.bind(this)}>
            <div className="toggle-slider position-right"></div>
          </div>
          <div id="label" onClick={this.handleClick.bind(this)}>ON</div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
