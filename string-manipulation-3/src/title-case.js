/* exported titleCase */

function titleCase(title) {
  var array = [];
  var subTitle = '';
  var titleWithSpace = title + ' ';
  for (let i = 0; i < titleWithSpace.length; i++) {
    if (titleWithSpace[i] !== ' ' || titleWithSpace[i] !== ':' || titleWithSpace[i] !== '-') {
      subTitle += titleWithSpace[i];
    }
    if (titleWithSpace[i] === ' ' || titleWithSpace[i] === ':' || titleWithSpace[i] === '-') {
      array.push(subTitle);
      subTitle = '';
    }
  }

  for (let i = 0; i < array.length; i++) {
    array[i].slice(0, array[i].length);
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === 'javascript') {
      array[i] = 'JavaScript';
    } else if (array[i].toLowerCase() === 'api') {
      array[i] = 'API';
    }
  }
}
