const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

  
  let currentRoom = "";
  let playerInventory = [];
  let roomInventory = [];
  let status = "";
  let globalResponses = [
    "i",
    "inventory",
    "take inventory",
    "r",
    "room inventory",
    "take room inventory"
  ];
  
  // Get Response Main St
  const getResponseGlobal = thePrompt => {
    let theResponse = "";
  
    if (
      thePrompt === "i" ||
      thePrompt === "inventory" ||
      thePrompt === "take inventory"
    ) {
      theResponse = "You are carrying: \n" + playerInventory + "\n";
    } else if (
      thePrompt === "r" ||
      thePrompt === "room inventory" ||
      thePrompt === "take room inventory"
    ) {
      theResponse = "The rooms inventory: \n" + roomInventory + "\n";
    }
  
    return theResponse;
  };
  
  // Get Response Main St
  const getResponseMainSt = thePrompt => {
    let theResponse = "";
  
    if (thePrompt === "start") {
      theResponse =
        "182 Main St. \n" +
        "You are standing on Main Street between Church and South Winooski. \n" +
        "There is a door here. A keypad sits on the handle. \n" +
        "On the door is a handwritten sign. \n";
    } else if (thePrompt === "read sign") {
      theResponse =
        'The sign says "Welcome to Burlington Code Academy! Come on \n' +
        "up to the second floor. If the door is locked, use the code \n" +
        '12345." \n';
    } else if (thePrompt === "take sign") {
      theResponse =
        "That would be selfish. How will other students find their way? \n";
    } else if (thePrompt === "open door") {
      theResponse =
        "The door is locked. There is a keypad on the door handle. \n";
    } else if (thePrompt === "enter code 12345" || thePrompt === "key in 12345") {
      theResponse =
        "Success! The door opens. You enter the foyer and the door shuts behind you. \n\n" +
        "You are in a foyer. Or maybe it's an antechamber. Or a \n" +
        "vestibule. Or an entryway. Or an atrium. Or a narthex. \n" +
        "But let's forget all that fancy flatlander vocabulary, \n" +
        'and just call it a foyer. In Vermont, this is pronounced "FO-ee-yurr". \n' +
        "A copy of Seven Days lies in a corner. \n";
      currentRoom = "182 Main St - Foyer";
    } else if (
      thePrompt.startsWith("enter code") ||
      thePrompt.startsWith("key in")
    ) {
      theResponse = "Bzzzzt! The door is still locked. \n";
    } else if (thePrompt === "xyzzy") {
      theResponse =
        "You entered the magic short cut word. You enter the classroom. Please be seated. \n";
      currentRoom = "182 Main St - Classroom";
    } else if (thePrompt === "muddy waters" || thePrompt === "muddy") {
      theResponse = "You are now inside Muddy Waters. \n";
      currentRoom = "Muddy";
    } else if (thePrompt === "mr mikes" || thePrompt === "mikes") {
      theResponse = "You are now inside Mr Mikes. \n";
      currentRoom = "Mikes";
    }
  
    return theResponse;
  };