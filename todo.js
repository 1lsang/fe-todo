const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addTodo = require("./lib/add").addTodo;

const deleteTodo = require("./lib/delete").deleteTodo;

const updateTodo = require("./lib/update").updateTodo;

const showTodo = require("./lib/show").show;

const showAll = require("./lib/show").showAll;

const checkCommandLength = require("./lib/utils").checkCommandLength;

rl.setPrompt("명령하세요 : ");
rl.prompt();
rl.on("line", (line) => {
  try {
    const inputCommands = line.split("$");
    switch (inputCommands[0]) {
      case "show":
        showTodo(inputCommands);
        break;

      case "add":
        // 태그 유효성 검사
        checkCommandLength(inputCommands, 3);
        addTodo(inputCommands[1], JSON.parse(inputCommands[2]));
        showAll();

        // add$study$["1","2"]
        break;
      case "delete":
        checkCommandLength(inputCommands, 2);
        if (deleteTodo(Number(inputCommands[1])) !== 0) {
          showAll();
        }
        break;

      case "update":
        checkCommandLength(inputCommands, 3);
        if (updateTodo(Number(inputCommands[1]), inputCommands[2]) !== 0) {
          showAll();
        }

        break;

      case "exit":
        rl.close();
        return;

      default:
        console.log("잘못된 입력입니다. 다시 입력해주세요.");
        return;
    }
  } catch (error) {
    console.error("잘못된 입력입니다. 다시 입력해주세요.");
  }
  rl.prompt();
});
