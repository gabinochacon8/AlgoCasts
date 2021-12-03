// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  /** V1 My Solution */
  // if (stringA.length !== stringB.length) return false;
  // const map1 = {};
  // const map2 = {};
  // let result = false;

  // for (let i = 0; i < stringA.length; i++) {
  //   let char1 = stringA[i].toLowerCase();
  //   if (!/(\W)/.test(char1) || !' ') {
  //     map1[char1] ? map1[char1]++ : map1[char1] = 1;
  //   }
  //   let char2 = stringB[i].toLowerCase();
  //   if (!((/W/).test(char2)) || !' ') {
  //     map2[char2] ? map2[char2]++ : map2[char2] = 1;
  //   }
  // }
  // for (let k in map1) {
  //   console.log(map1[k], map2[k])
  //   if (map1[k] === map2[k]) {
  //     result = true
  //   } else {
  //     return false;
  //   }
  // }
  // return result;

  /** V2 */
  
}

module.exports = anagrams;
