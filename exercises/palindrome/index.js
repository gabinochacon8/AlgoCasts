// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  /** V1 */
  // const reversedStr = str.split('').reduce((rev, char) => char + rev, '');
  // return str === reversedStr;

  /* V2*/
  // let start = 0;
  // let end = str.length - 1;

  // while (start < end) {
  //   console.log(str[start], str[end])
  //   if (str[start] === str[end]) {
  //     start++;
  //     end--;
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  /** V3 */
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })
}
module.exports = palindrome;
