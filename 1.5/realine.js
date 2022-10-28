var readline = require("readline"),
    rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("$$");
rl.prompt();

var toDolist = [];


var commands = {
    ls:function(){
        console.log(toDolist);
    },
    add:function(item){
        toDolist.push(item);
    },
    rm:function(item){
        console.log("I want to remove " ,item,"! !" )
    }

};


rl.on('line', function(line){
    var words = line.split(''),
        command = words.shift();
        argsStr = words.join('');

    command[command](argsStr);

    // console.log("the command is", command)
    // if(command === 'ls'){
    //     console.log(toDolist);
    // }

    // if(command === 'add'){
    //     toDolist.push(line);
    // }

    // console.log(words);    


    // toDolist.log("tou said", line);
    // console.log(toDolist);
    rl.prompt();
});