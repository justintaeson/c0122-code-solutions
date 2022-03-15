const $jokeContainer = document.querySelector('#joke-container'); // grab the element with the id 'joke-container' and assign it to the const variable $jokeContainer
const $flashImage = document.querySelector('#flash-image'); // grab the element with the id 'flahs-image' and assign it to the const variable $flashImage
const $jokeForm = document.querySelector('#joke-form'); // grab the element with the id 'joke-form' ans assign it to the const variable $jokeForm

const jokester = { // create an object and assign it to the const variable jokester
  tellJoke: function (setup, punchline) { // create a property called tellJoke as an anonymous function with 2 parameters as its value
    $jokeForm.classList.add('d-none'); // within that function, add a 'd-none' class to the $jokeForm element
    const $introStatement = this.renderJokePhrase('Hey Flash...'); // get the return of the render function with the parameter 'Hey Flash...' of this (which is this current jokester object) and assign it ot the const varialbe $introStatement
    this.appendJokePhrase($introStatement); // call the appendJokePhrase method with the parameter $introStatement of this object
    setTimeout(() => { // call the setTimeout with an anonymous function as its parameter
      const $jokeSetup = this.renderJokePhrase(setup); // render the $jokePhrase for the setup parameter and assign the value from this object to the const variable
      this.appendJokePhrase($jokeSetup); // call the appendJokePhrase method with $jokeSetup as its parameter which is a property of this aka jokester object
      setTimeout(() => { // call the setTimeout with an anonymous function as its parameter
        const $jokePunchline = this.renderJokePhrase(punchline); // call the renderJokePhrase method with punchline as its parameter of this object and assign it const variable $jokePnchline
        this.appendJokePhrase($jokePunchline); // call the appendJokePhrase method with $jokePunchline as its parameter of this object
        flash.laugh(); // call the laugh method of the flash object
      }, 2000); // every 2 seconds
    }, 2000); // every 2 seconds
  },
  renderJokePhrase: function (phrase) { // create a property called renderJokePhrase with an anonymous function that has one parameter as its value
    const $phrase = document.createElement('h4'); // create an h4 element on the DOM and assign it to variable $phrase
    $phrase.textContent = phrase; // set the text content of $phrase to the parameter, phrase
    $phrase.className = 'fade-in text-center'; // set the classame of the $phrase to fade-in text-center
    return $phrase; // return the h4 element stored inside the $phrase variable
  },
  appendJokePhrase: function ($phrase) { // create a property called appendJokePhrase with an anonymous function that has one parameter as it value
    $jokeContainer.append($phrase); // append the h4 element to the joke-container element
  }
};

const flash = { // create an object and assign it to the const variable flash
  laughingUrl: 'images/flash-laugh.gif', // create a property called laughingUrl and make its value the link to the laughing.gif file
  laugh: function () { // create a property called laugh with an anonymous function as its value
    setTimeout(() => { // in the function, call the setTimeout function with an anoymous function as its parameter
      $flashImage.setAttribute('src', this.laughingUrl); // in the anonymous function, set the src attribute of the $flashImage element to this object's (flash object) laughingUrl property which leads us to the laughing.gif file
    }, 3000); // call this setTimeout function after 3 seconds
  }
};

const handleJokeSubmission = function (event) { // define a function called handleJokeSubmission to handle form events
  event.preventDefault(); // prevent the default things that happen with this event
  const { setup, punchline } = event.target.elements; // create two const variables called setup and punchline and assign it the values of this form element's formcontrol setup and punchline properties
  jokester.tellJoke(setup.value, punchline.value); // call the tellJoke method of the jokester object with the values of setup and punchline as its two parameters
};

$jokeForm.addEventListener('submit', handleJokeSubmission); // listen for submit events on the $jokeForm element and run the handleJokeSubmission when the user hits submit
