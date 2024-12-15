const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const STR = String(str);
  const DEFAULT_SEPARATOR = "+";
  const DEFAULT_ADDITIONAL_SEPARATOR = "|";

  let memSeparator = DEFAULT_SEPARATOR;
  let memAdditionalSeparator = DEFAULT_ADDITIONAL_SEPARATOR;
  let memStr = STR;
  let resStr = '';

  if(options.separator) memSeparator = options.separator;
  if(options.additionSeparator) memAdditionalSeparator = options.additionSeparator;

  if(options.addition !== undefined){
    for(let i = 0; i < options.additionRepeatTimes - 1; i += 1) {
      memStr += String(options.addition) + memAdditionalSeparator;
    }
    memStr += String(options.addition);
  }

  resStr = memStr;

  for (let i = 0; i < options.repeatTimes - 1; i += 1) {
    resStr += memSeparator + memStr;
  }

  return resStr;
}

module.exports = {
  repeater
};
