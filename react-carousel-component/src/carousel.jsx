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
    if (event.target.id === 'left-arrow') {
      if (this.state.currentIndex === 0) {
        this.setState({ currentIndex: 4 });
      } else {
        this.setState({ currentIndex: this.state.currentIndex - 1 });
      }
    }
    if (event.target.id === 'right-arrow') {
      if (this.state.currentIndex === 4) {
        this.setState({ currentIndex: 0 });
      } else {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      }
    }
    if (event.target.className === 'fa-regular fa-circle circle') {
      this.setState({ currentIndex: event.target.id });
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.currentIndex === 4) {
        this.setState({ currentIndex: 0 });
      } else {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      }
    }, 3000);
  }

  render() {
    let className = '';
    const circles = this.props.data.map(pokemon => {
      if (pokemon.id === parseInt(this.state.currentIndex) || pokemon.id === this.state.currentIndex) {
        className = 'fa-solid fa-circle circle';
      } else {
        className = 'fa-regular fa-circle circle';
      }
      return <i onClick={this.handleClick} className={className} id={pokemon.id} key={pokemon.id}></i>;
    });

    return (
    <>
        <div id="pokemon" className='row'>
        <div className='column-one-tenth'>
            <i id="left-arrow" className="fa-solid fa-angle-left" onClick={this.handleClick}></i>
        </div>
        <div className='column-four-fifths'>
          <img src={this.props.data[this.state.currentIndex].filepath} alt="Pokemon"/>
        </div>
        <div className='column-one-tenth'>
            <i id="right-arrow" className="fa-solid fa-angle-right" onClick={this.handleClick}></i>
        </div>
      </div>
      <div id="page-circles" className="row">
        {circles}
      </div>
    </>
    );
  }
}
