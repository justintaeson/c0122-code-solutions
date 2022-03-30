/*
- import React from the 'react' package
- import ReactDOM from the 'react-dom' package
*/

import React from 'react';
import ReactDOM from 'react-dom';

/*
- define a class that extends to React.Component
- define a constructor with a paramter props for properties
- inside the constructor code block, call the super function with props as its parameter
- assign the object literal with the isClicked property as false to this.state

- define a handleClick method to handle our event
- call the setState method of this with an anonymous function and 2 parameters as its argument
- return the object literal with the isClicked property as true

- define a render method to render our React elements
- inside the method's code block, check to see if the current component's isClicked property is equal to false
- if it is, spit out the react element with the type button, an onClick attribute equal to this.handleClick's isClicked property, and text content of 'Click Me!'
- if it's not equal, spit out the react element with the type button, an onClick attribute equal to this.handleClick's isClicked property, and text content of 'Thanks!'
*/

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState((state, props) => {
      return { isClicked: true };
    });
  }

  render() {
    if (this.state.isClicked === false) {
      return (<button onClick={this.handleClick.bind(this)}>Click Me!</button>);
    } else {
      return (<button onClick={this.handleClick.bind(this)}>Thanks!</button>);
    }
  }
}

/*
- call the render method of the ReactDOM object with two arguments,
- the first argument being the CustomButton react element
- the second argument being element with the id 'root'
*/

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root'));
