/**
 * inputCommands의 길이가 length와 같은지 확인하여 다를 경우 Error를 throw합니다.
 * @param {string[]} inputCommands
 * @param {number} length
 */
const checkCommandLength = (inputCommands, length) => {
  if (inputCommands.length !== length) throw Error;
};

const statusList = ["todo", "doing", "done"];

/**
 * Todo의 status를 확인하는 함수입니다.
 * @param {string} status
 * @returns boolean
 */
const checkStatus = (status) => {
  if (statusList.includes(status) === false) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "존재하지 않는 상태입니다. 다시 입력해주세요."
    );
    return false;
  }
  return true;
};

module.exports.checkCommandLength = checkCommandLength;

module.exports.checkStatus = checkStatus;
