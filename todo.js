const todos = [
  {
    name: "자바스크립트 공부하기",
    tags: ["programming", "javascript"],
    status: "todo",
    id: 12123123,
  },
  {
    name: " 그림 그리기",
    tags: ["picture", "favorite"],
    status: "doing",
    id: 312323,
  },
];

let inputCommands = [];

const statusList = ["todo", "doing", "done"];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ID 생성
let globalId = 0;

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

  console.log(`${name} 1개가 추가되었습니다. (id: ${id})`);
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
 * todo를 조회합니다.
 * @param {string} status
 */

const show = (status) => {
  switch (status) {
    case "all":
      showAll();
      break;
    case "tags":
      break;
    case "tag":
      break;
    default:
      showTodo(status);
      break;
  }
};

/**
 * todo를 삭제합니다.
 * @param {number} id
 */

const deleteTodo = (id) => {
  const deleteIndex = todos.findIndex((todo) => todo.id === id);
  if (deleteIndex === -1) {
    console.log("존재하지 않는 id입니다. 다시 입력해주세요.");
    return 0;
  }
  console.log(`${todos[deleteIndex].name} todo가 목록에서 삭제되었습니다.`);
  todos.splice(deleteIndex, 1);
};

const updateTodo = (id, status) => {
  const updateIndex = todos.findIndex((todo) => todo.id === id);
  if (updateIndex === -1) {
    console.log("존재하지 않는 id입니다. 다시 입력해주세요.");
    return 0;
  }
  //   status 체크
  if (statusList.includes(status) === false) {
    console.log("존재하지 않는 상태입니다. 다시 입력해주세요.");
    return;
  }
  todos[updateIndex].status = status;
  console.log(`${todos[updateIndex].name} ${status}으로 변경되었습니다.`);
};

rl.on("line", (line) => {
  inputCommands = line.split("$");
  console.log("input: ", inputCommands[0]);

  switch (inputCommands[0]) {
    case "show":
      show(inputCommands[1]);
      break;

    case "add":
      addTodo(inputCommands[1], JSON.parse(inputCommands[2]));
      showAll();
      // add$study$["1","2"]
      break;

    case "delete":
      if (deleteTodo(Number(inputCommands[1])) !== 0) {
        showAll();
      }
      break;

    case "update":
      if (updateTodo(Number(inputCommands[1]), inputCommands[2]) !== 0) {
        showAll();
      }

      break;

    case "exit":
      rl.close();
      break;

    default:
      console.log("fault");
      return;
  }
});
