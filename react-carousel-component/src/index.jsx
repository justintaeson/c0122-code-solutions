import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    filepath: '../images/001.png',
    id: 0
  },
  {
    filepath: '../images/004.png',
    id: 1
  },
  {
    filepath: '../images/007.png',
    id: 2
  },
  {

    filepath: '../images/025.png',
    id: 3
  },
  {

    filepath: '../images/039.png',
    id: 4
  }
];

ReactDOM.render(<Carousel data={images}/>, document.querySelector('#root'));
