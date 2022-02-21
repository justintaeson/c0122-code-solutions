/* exported chunk */
/*
- defined a function to return split 'array' into 'size' amount of sub arrays
- created an empty variable to push our sub arrays into later
- created a for loop to loop through all the values of the array by 'size' amount
- slice the chunk that we need and assign it to the variable everyChunk; since
we're skipping over the array values by 'size' amount, this should only slice the
chunks we need
- push everyChunk into chunkArray; the slice method returns an array so we should
have sub arrays in chunkArray
- return the value of chunkArray
*/

function chunk(array, size) {
  var chunkArray = [];
  for (let i = 0; i < array.length; i += size) {
    var everyChunk = array.slice(i, i + size);
    chunkArray.push(everyChunk);
  }
  return chunkArray;
}
