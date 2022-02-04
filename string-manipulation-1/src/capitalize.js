/* exported capitalize */
/* defined a function that conacatenates the first letter (capitalized) with the remaining letters (lower-cased) */

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
}
