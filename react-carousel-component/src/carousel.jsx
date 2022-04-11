import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var arrowId = event.target.id;
    if (arrowId === 'left-arrow') {
      this.setState({ currentIndex: this.currentIndex - 1 });
    }
    if (arrowId.Id === 'right-arrow') {
      this.setState({ currentIndex: this.currentIndex + 1 });
    }
  }

  render() {
    return (
      <div></div>
    );
  }

}
