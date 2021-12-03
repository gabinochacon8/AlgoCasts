// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalizeFirstLetter = (word) => {
  const first = word[0].toUpperCase();
  const rest = word.slice(1);
  return first + rest;
}

function capitalize(str) {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = capitalizeFirstLetter(strArr[i]);
  }
  return strArr.join(' ');
}

module.exports = capitalize;
