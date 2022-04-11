import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  '../images/coronavirus.jpeg',
  '../images/lakers.jpeg',
  '../images/oscars.jpeg',
  '../images/russia-ukraine.png',
  '../images/superbowl.webp',
  '../winter-olympics.jpeg'
];

ReactDOM.render(<Carousel images = {images} />, document.querySelector('#root'));
