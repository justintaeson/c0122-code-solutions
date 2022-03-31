import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState(state => {
      return (state.clicks++);
    });
  }

  render() {
    if (this.state.clicks >= 3 && this.state.clicks < 6) {
      return (<button className="box three-clicks" onClick={this.handleClick.bind(this)}>Hot Button</button>);
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      return (<button className="box six-clicks" onClick={this.handleClick.bind(this)}>Hot Button</button>);
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      return (<button className="box nine-clicks" onClick={this.handleClick.bind(this)}>Hot Button</button>);
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      return (<button className="box twelve-clicks" onClick={this.handleClick.bind(this)}>Hot Button</button>);
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      return (<button className="box fifteen-clicks" onClick={this.handleClick.bind(this)}>Hot Button</button>);
    } else {
      return (<button className="box eighteen-clicks" onClick={this.handleClick.bind(this)}>Hot Button</button>);
    }
  }
}

export default HotButton;
