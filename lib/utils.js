/**
 * inputCommands의 길이가 length와 같은지 확인하여 다를 경우 Error를 throw합니다.
 * @param {string[]} inputCommands
 * @param {number} length
 */
const checkCommandLength = (inputCommands, length) => {
  if (inputCommands.length !== length) throw Error;
};

module.exports.checkCommandLength = checkCommandLength;
