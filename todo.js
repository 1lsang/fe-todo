const todos = [

]

const commands = [
    'show', 'add' , 'delete', 'update', 'exit'
]

let inputCommands = [

]

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const checkInput = (input) => {
    // input 체크
}


    rl.on("line", (line)=> {
        inputCommands = line.split('$')
        console.log("input: ", inputCommands[0])
        checkInput(inputCommands[0])
        if (inputCommands[0] === 'exit') {
            rl.close()
        }

    })
    
    
