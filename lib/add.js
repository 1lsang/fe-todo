const todos = require("./todos").todos;
// ID 생성
let globalId = 0;

/**
 * ID를 생성하는 함수입니다.
 * @returns number
 */
const generateId = () => globalId++;

/**
 * todo를 추가하는 함수입니다.
 * @param {stirng} name
 * @param {string[]} tags
 */

const addTodo = (name, tags) => {
  // id 부여
  const id = generateId();
  // todo list에 추가
  todos.push({
    name,
    tags,
    status: "todo",
    id,
  });

  console.log("\x1b[32m%s\x1b[0m", `${name} 1개가 추가되었습니다. (id: ${id})`);
};

module.exports.addTodo = addTodo;
