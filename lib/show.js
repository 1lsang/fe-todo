const todos = require("./todos").todos;

const statusList = ["todo", "doing", "done"];

const checkCommandLength = require("./utils").checkCommandLength;

/**
 * Todo의 status를 확인하는 함수입니다.
 * @param {string} status
 * @returns boolean
 */
const checkStatus = (status) => {
  if (statusList.includes(status) === false) {
    console.log("존재하지 않는 상태입니다. 다시 입력해주세요.");
    return false;
  }
  return true;
};

/**
 * 상태별 todo의 개수를 출력합니다.
 */
const showAll = () => {
  const countStatus = { todo: 0, doing: 0, done: 0 };
  todos.forEach((todo) => countStatus[todo.status]++);
  console.log(
    `현재 상태: todo: ${countStatus.todo}개, doing: ${countStatus.doing}개, done: ${countStatus.done}개 `
  );
};

/**
 * status에 해당하는 상태의 todo를 출력합니다.
 * @param {string} status
 */

const showTodo = (status) => {
  if (checkStatus(status) === false) return;
  const filteredTodos = todos.filter((todo) => todo.status === status);

  console.log(
    `총 ${filteredTodos.length}건 : ${filteredTodos
      .reduce((accumulator, todo) => {
        return accumulator + `'${todo.name}, ${todo.id}번' ,`;
      }, "")
      .slice(0, -1)}`
  );
};

/**
 * 태그별 todo의 개수를 출력합니다.
 */
const showTags = () => {
  const countStatus = {};
  todos.forEach((todo) =>
    todo.tags.forEach((tag) =>
      Object.keys(countStatus).includes(tag)
        ? countStatus[tag]++
        : (countStatus[tag] = 1)
    )
  );
  console.log(
    `총 태그수: ${Object.keys(countStatus).length}개: ${Object.keys(countStatus)
      .reduce((accumulator, tag) => {
        return accumulator + `'${tag}': ${countStatus[tag]}개 ,`;
      }, "")
      .slice(0, -1)}`
  );
};

/**
 * 해당하는 tag를 가지고 있는 todo를 모두 출력합니다.
 * @param {string} tag
 */
const showTag = (tag) => {
  // 없는 태그일때!

  const filteredTodos = todos.filter((todo) => todo.tags.includes(tag));
  if (filteredTodos.length === 0) {
    console.log("없는 태그입니다. 다시 입력해주세요.");
    return;
  }
  console.log(
    `${tag}(${filteredTodos.length}) : ${filteredTodos
      .reduce((accumulator, todo) => {
        return accumulator + `'${todo.name}, ${todo.id}번' ,`;
      }, "")
      .slice(0, -1)}`
  );
};

/**
 * todo를 조회합니다.
 * @param {string} status
 */

const show = (inputCommands) => {
  switch (inputCommands[1]) {
    case "all":
      checkCommandLength(inputCommands, 2);
      showAll();
      break;
    case "tags":
      checkCommandLength(inputCommands, 2);
      showTags();
      break;
    case "tag":
      checkCommandLength(inputCommands, 3);
      showTag(inputCommands[2]);
      break;
    default:
      checkCommandLength(inputCommands, 2);
      showTodo(inputCommands[1]);
      break;
  }
};

module.exports.show = show;
module.exports.showAll = showAll;
