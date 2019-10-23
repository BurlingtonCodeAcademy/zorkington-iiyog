const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}



/*  roomOne =  outside 182 main - unlock door
    roomTwo = foyer - read sign
    roomThree = stairs ?
    roomFour = classroom - play w chairs - check - alex c
    roomFive = muddy's coffee return to class
    roomSix = status hunger mr mikes 
    
    player inventory
    room inventory
    player status*/

// remember the StateMachine lecture
// https://bootcamp.burlingtoncodeacademy.com/lessons/cs/state-machines
let states = {
  'roomOne': { canChangeTo: [ 'roomTwo' ] },
  'roomTwo': { canChangeTo: [ 'roomThree' ] },
  'roomThree': { canChangeTo: [ 'roomOne' ] }
};


/*let sign = {
  description: "Welcome to Burlington Code Academy! Come on up to the third floor.\n If the door is locked, use the code 12345."
  read: () => {
    return this.description
  }
}*/

let currentState = "roomOne";

function enterState(newState) {
  let validTransitions = states[currentState].canChangeTo;
  if (validTransitions.includes(newState)) {
    currentState = newState;
  } else {
    throw 'Invalid state transition attempted - from ' + currentState + ' to ' + newState;
  }
}


start();

async function start() {
  const welcomeMessage = `Your standing at 182 Main St. between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign. Welcome please enter your code to enter!\n>`;

// 12345 === 1234 to enter else throw error + "Please don't take the sign"

let answer = await ask(welcomeMessage);
  //console.log('!\n>');


  while(answer !== 'exit') {
    answer = await ask('>_ ')
    process.exit();
    
  }
}


