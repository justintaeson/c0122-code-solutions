/* exported oddOrEven */

// created a function to help us determine if the numberes in an array are even or odd
function oddOrEven(numbers) {
  // assigned a variable to an empty array so we can spit the result of the for loop in here
  var oddOrEvenArray = [];
  // created a for loop to run as many times as there are numbers in the array
  for (let i = 0; i < numbers.length; i++) {
    // created an if statement to determine if the number that's being passed from the array has a remainder of 0 when it's divided by 2 aka 'even'
    if (numbers[i] % 2 === 0) {
      // if it is even, we'll push the string 'even' into the oddOrEvenArray
      oddOrEvenArray.push('even');
      // if it's not even, we'll push the string 'odd' in the oddOrEvenArray since that's the only remaining choice
    } else {
      oddOrEvenArray.push('odd');
    }
  }
  // return what's inside the oddOrEvenArray
  return oddOrEvenArray;
}
