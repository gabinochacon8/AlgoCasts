// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    const result = new Array(n).fill(' ')
    let x = 0;
    while(x < i) {
      result[x] = '#';
      x++;
    }
    console.log(result.join(''))
  }
}

module.exports = steps;
