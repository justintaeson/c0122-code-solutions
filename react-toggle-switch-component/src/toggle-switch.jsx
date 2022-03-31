import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 };
  }

  handleClick() {
    this.setState(state => {
      return { clicks: (this.state.clicked + 1) };
    });
  }

  render() {
    if (this.state.clicked % 2 !== 0) {
      return (
        <div>
        <div id="toggle-container" onClick={this.handleClick.bind(this)}>
          <div className="toggle-slider"></div>
        </div>
        <div id="label">OFF</div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
