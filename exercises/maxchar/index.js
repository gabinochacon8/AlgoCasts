// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};

  for (let char of str) {
    map[char] ? map[char]++ : map[char] = 1;
  }

  let max = 0;
  let maxChar;
  for (let k in map) {
    max =  Math.max(max, map[k]);
    if (map[k] === max) {
      maxChar = k;
    }
  }
  return maxChar;
}

module.exports = maxChar;
