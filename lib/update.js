const todos = require("./todos").todos;

/**
 * todo의 상태를 변경합니다.
 * @param {number} id
 * @param {string} status
 * @returns
 */

const updateTodo = (id, status) => {
  const updateIndex = todos.findIndex((todo) => todo.id === id);
  if (updateIndex === -1) {
    console.log("존재하지 않는 id입니다. 다시 입력해주세요.");
    return 0;
  }
  if (checkStatus(status) === false) return;
  todos[updateIndex].status = status;
  console.log(`${todos[updateIndex].name} ${status}으로 변경되었습니다.`);
};

module.exports.updateTodo = updateTodo;
