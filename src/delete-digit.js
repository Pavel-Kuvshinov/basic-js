const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringNumber = String(n);
  let resultAtt = [];

  for (let i = 0; i < stringNumber.length; i += 1) {
    let numberArr = stringNumber.split('');
    numberArr.splice(i, 1);
    resultAtt.push(numberArr.join(''));
  }

  return Math.max(...resultAtt)
}

module.exports = {
  deleteDigit
};
