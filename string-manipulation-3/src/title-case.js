/* exported titleCase */

/*
- defined a function that returns a string but with APA title Case Style appliee
- 1  capitalizeFirstLetter: function is being called which gets the parameter and returns it as an array with the first letter of each word being capitalized with the return being assigned to the variable capitalizedLettersArray
- 2. lettersToWords: function is being called with the parameter being capitalizedLettersArray. the lettersToWords function returns an array of each word by checking for spaces. the return is then assigned to the vairable wordsArray
- 3. lowercaseSmallWords: function is being called with the parameter wordsArray with the function returning an array of that lowercases all non-title words. the return is then assigned to the variable propercasedWordsArray
- 4. specificWordChecker: function is being called with the paratmer being propercasedWordsArray. the function returns an array making sure that the special words 'JavaScript' & 'API' are cased correctly with the return being assigned to the variable checkedJsApiArray
- 5. addSpaces: function is being called with the paramter being checkedJsApiArray which returns a string with spaces in between each word. the return is then assigned to the variable spacedWord
- after the title paramter has gone through all the functions, an empty array is created for the function to do one last check
- a for loop is being executed to loop through the spacedWord variable (with the value being a string)
- if i is at 0...
- push spacedWord[i] into the finalArray capitalized
- else, if the character two behind spacedWord[i] is a colon...
- push spacedWord[i] into the finalArray capitalized
- else...
- push spacedWord[i] into the finalArray as is
- return finalArray as a string by using the join method to remove the separators
*/

function titleCase(title) {
  var capitalizedLettersArray = capitalizeFirstLetter(title);
  var wordsArray = lettersToWords(capitalizedLettersArray);
  var propercasedWordsArray = lowercaseSmallWords(wordsArray);
  var checkedJsApiArray = specificWordChecker(propercasedWordsArray);
  var spacedWord = addSpaces(checkedJsApiArray);

  var finalArray = [];
  for (let i = 0; i < spacedWord.length; i++) {
    if (i === 0) {
      finalArray.push(spacedWord[i].toUpperCase());
    } else if (spacedWord[i - 2] === ':') {
      finalArray.push(spacedWord[i].toUpperCase());
    } else {
      finalArray.push(spacedWord[i]);
    }
  }
  return (finalArray.join(''));
}

/*
- 1. function is being defined to return a given array with the first letter of each word being capitalized
- create an empty array to store our checked letters
- grab the parameter, make it all lowercase and then assign it to the variable lowercaseTitle
- loop through the parameter title
- if i = 0 aka the first letter...
- push the first letter into the array capitalized
- else, if the letter behind the current letter is equal to either a space or a dash...
- push the current letter into the array capitalzed as well
- else...
- push the current letter as is into the array
- lastly, return the array
*/

function capitalizeFirstLetter(title) {
  var array = [];
  var lowercaseTitle = title.toLowerCase();
  for (let i = 0; i < title.length; i++) {
    if (i === 0) {
      array.push(lowercaseTitle[i].toUpperCase());
    } else if (lowercaseTitle[i - 1] === ' ' || lowercaseTitle[i - 1] === '-') {
      array.push(lowercaseTitle[i].toUpperCase());
    } else {
      array.push(lowercaseTitle[i]);
    }
  }
  return array;
}

/*
- 2. function is being defined that gets an array of a string's letters and returns an array of the words
- add a space to the end of the parameter array
- create a variable to concatenate each letter in the array
- loop through the paramterArray
- if the current letter is not a space...
- concatenate the current letter onto the variable word
- else... (aka it's a pace)
- push the current value of the word variable into the array
- reset the variable word to an empty string
- lastly, return the array
*/

function lettersToWords(capitalizedLettersArray) {
  capitalizedLettersArray.push(' ');
  var array = [];
  var word = '';
  for (let i = 0; i < capitalizedLettersArray.length; i++) {
    if (capitalizedLettersArray[i] !== ' ') {
      word += capitalizedLettersArray[i];
    } else {
      array.push(word);
      word = '';
    }
  }
  return array;
}

/*
- 3. function is being defined with it returning an array of strings that has all the strings that are nonTitleWords lowercased
- create an empty array to store our words
- create a varialbe with the value being an array storing non-title words as strings
- loops through parameter wordsArray
- during each iteration of the wordsArray loop, loop through the nonTitleWords array
- if the value of the current word is strictly equal to the value of the current nonTitleWord
- lowercase the current word
- at the end of the each iteration of the wordsArray loop, push the current word into the array
- lastly, return the array
*/

function lowercaseSmallWords(wordsArray) {
  var array = [];
  var nonTitleWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (let i = 0; i < wordsArray.length; i++) {
    for (let j = 0; j < nonTitleWords.length; j++) {
      if (wordsArray[i].toLowerCase() === nonTitleWords[j]) {
        wordsArray[i] = wordsArray[i].toLowerCase();
      }
    }
    array.push(wordsArray[i]);
  }
  return array;
}

/*
- 4. function is being defined with it returning an array making sure that the special words 'JavaScript' & 'API' are cased correctly
- loop through the parameter array
- if the current word is 'javascript'...
- assign the string 'JavaScript' to that current word
- else, if the current word is 'javascript' with a colon...
- assign the string 'JavaScript' to that current word
- else, if the current word is 'api'...
- assign the string 'API' to that current word
- else, if the current word is 'api' with a colon...
- assign the string 'JavaScript' to that current word
- lastly, return the parameter array
*/

function specificWordChecker(propercasedWordsArray) {
  for (let i = 0; i < propercasedWordsArray.length; i++) {
    if (propercasedWordsArray[i].toLowerCase() === 'javascript') {
      propercasedWordsArray[i] = 'JavaScript';
    } else if (propercasedWordsArray[i].toLowerCase() === 'javascript:') {
      propercasedWordsArray[i] = 'JavaScript:';
    } else if (propercasedWordsArray[i].toLowerCase() === 'api') {
      propercasedWordsArray[i] = 'API';
    } else if (propercasedWordsArray[i].toLowerCase() === 'api:') {
      propercasedWordsArray[i] = 'API:';
    }
  }
  return propercasedWordsArray;
}

/*
- 5. function is defined returning the strings in an array with spaces in between
- create a variable with value being an empty string
- loop through the parameter array
- if i not equal to the last index aka if the current word is not the last word...
- concatenate the current word onto the variable finalWord
- then, concatenate a space onto the new value of the variable finalWorfd
- else... (if it's the last word)
- just contenate the current word onto finalWord
- lastly, return finalWord
*/

function addSpaces(checkedJsApiArray) {
  var finalWord = '';
  for (let i = 0; i < checkedJsApiArray.length; i++) {
    if (i !== checkedJsApiArray.length - 1) {
      finalWord += checkedJsApiArray[i];
      finalWord += ' ';
    } else {
      finalWord += checkedJsApiArray[i];
    }
  }
  return finalWord;
}
