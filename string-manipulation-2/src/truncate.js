/* exported truncate */
/* defined a function to cut the inputted string at the inputted length and return it
with an ellipsis at the end */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
