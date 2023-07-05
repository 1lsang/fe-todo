const todos = require("./todos").todos;
/**
 * todo를 삭제합니다.
 * @param {number} id
 */

const deleteTodo = (id) => {
  const deleteIndex = todos.findIndex((todo) => todo.id === id);
  if (deleteIndex === -1) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "존재하지 않는 id입니다. 다시 입력해주세요."
    );
    return 0;
  }
  console.log(
    "\x1b[31m%s\x1b[0m",
    `${todos[deleteIndex].name} todo가 목록에서 삭제되었습니다.`
  );
  todos.splice(deleteIndex, 1);
};

module.exports.deleteTodo = deleteTodo;
