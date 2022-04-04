import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.sidebarOn === false) {
      this.setState({ sidebarOn: true });
    } else if (this.state.sidebarOn === true) {
      this.setState({ sidebarOn: false });
    }
  }

  render() {
    if (this.state.sidebarOn === false) {
      return (
        <div id="root">
          <i className="fa-solid fa-align-justify" onClick={ this.handleClick }></i>
        </div>
      );
    } else {
      return (
        <div id="root" className='background-gray' onClick={ this.handleClick }>
          <i className="fa-solid fa-align-justify"></i>
          <div id="sidebar-container" className="sidebar">
            <a id="sidebar-title" className="padding">Choose Your Character</a>
            <a className="padding characters" onClick={this.handleClick}>Tim Davis 1</a>
            <a className="padding characters" onClick={this.handleClick}>Tim Davis 2</a>
            <a className="padding characters" onClick={this.handleClick}>Tim Davis 3</a>
            <a className="padding characters" onClick={this.handleClick}>Tim Davis 4</a>
            <a className="padding characters" onClick={this.handleClick}>Tim Davis 5</a>
          </div>
        </div>
      );
    }
  }
}
