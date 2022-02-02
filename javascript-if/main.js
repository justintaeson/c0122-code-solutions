/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var underFive = number < 5;
  return underFive;
}

function isEven(number) {
  var evenNumber = number % 2;
  if (evenNumber === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  }
  if (pH < 7 && pH >= 0) {
    return 'acid';
  }
  if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return "We're the warner brothers!";
  }
  if (name === 'wakko') {
    return "We're the warner brothers!";
  }
  if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
