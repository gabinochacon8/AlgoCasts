// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  /** V1 */
  // m = Math.abs(n);
  // const nStr = m.toString();
  // m = parseInt(nStr.split('').reverse().join(''));

  // if (n < 0) {
  //   return m - (m * 2);
  // } else {
  //   return m;
  // }

  /** V2 */
  // const sign = Math.sign(n)
  // let m = Math.abs(n);
  // const nStr = m.toString();
  // m = parseInt(nStr.split('').reverse().join(''));

  // return n < 0 ? m * sign : m;

  /** V3 */
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
