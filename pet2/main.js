const inquirer = require("inquirer");
const { Dragon } = require("./dragon.js");
const { Griffin } = require("./griffin.js");

let MyBeast = "";
    try
{
const start = async () => {
const { BeastType } = await inquirer.prompt(
{
    type: "list",
    Beastname: "BeastType",
    message:
    "What animal would you like? Please choose from the following options.",
    choices: [
{
    key: "A",
    Beastname: "Dragon",
    value: "Dragon",
},{
    key: "B",
    Beastname: "Griffin",
    value: "Griffin",
},],});
const { animalBeastname } = await inquirer.prompt({
    type: "input",
    Beastname: "animalBeastname",
    message: "What is your new pet called?",
});
if (BeastType == "Dragon") {
    MyBeast = new Dragon(animalBeastname);
}
else if (BeastType == "Griffin") {
      MyBeast = new Griffin(animalBeastname);
}
    await playersAnimal();
};

  start();
} catch (error) {
  console.log("Beep...Bop...Boop.....ERROR", error);
}

async function playersAnimal() {
  const { choice } = await inquirer.prompt({
    type: "list",
    Beastname: "choice",
    message: "What would you like to do?",
    choices: [
{
    key: "a",
    Beastname: "Feed your pet",
    value: "feed",
},{
    key: "b",
    Beastname: "Give your pet a drink",
    value: "drink",
},{
    key: "c",
    Beastname: "View your pet's status",
    value: "status",
},{
        key: "d",
        Beastname: "Quit the game",
        value: "quit",
},],});

    if (choice === "status") console.log(MyBeast.vitals());
    if (choice === "feed") await MyBeast.eats();
    if (choice === "drink") await MyBeast.drinks();
    if (choice === "quit") {
const quitChoice = await confirmQuit();
    if (quitChoice) return;
}
    MyBeast.vitals();
    await playersAnimal();
}

async function confirmQuit() {
const { quitChoice } = await inquirer.prompt({
    type: "list",
    Beastname: "quitChoice",
    message:
    "Are you sure you want to quit? This will mean your pet has to be returned to the Animal Shelter...",
    choices: [
{
    key: "a",
    Beastname: "Yes, I'm sure.",
    value: "yes",
},{
    key: "b",
    Beastname: "No, I'll play some more.",
    value: "no",
},],});

    if (quitChoice === "yes") return true;
    else return false;
}

async function gameOver() {
const { playAgain } = await inquirer.prompt({
    type: "list",
    Beastname: "playAgain",
    message: "Would you like to play again?",
    choices: [
{
    key: "a",
    Beastname: "Yes",
    value: "yes",
},{
    key: "b",
    Beastname: "No",
    value: "no",
  },],});
console.log(playAgain);
    if (playAgain === "yes") start();
    else return;
}