#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

console.log(chalk.bold.italic.greenBright.bold("GAME MANIA"));

let currentLocation = "Forest";

console.log(`You are in the ${currentLocation}.`);



let q1 = await inquirer.prompt([
  {
    name: "q1",
    type: "list",
    choices: ["Start", "Quit"],
    message: "What do you want?",
  }]);

   if(q1.q1 === "Quit"){
  console.log("Thanks for playing GoodBye!")}
  
let q2 = await inquirer.prompt([{
    name: "Start",
    type: "list",
    choices: ["River", "Cave", "Road"],
    message: "Where do you want to go?",
  
  
}]);


if (q2.Start === "River") {
  console.log(`You are swimming in your game mania ${currentLocation}.`);
  console.log("...........................");
  console.log(".....River water is very cold.....");
  console.log(`You are in river underwater wow! \n you are good swimmer`);
  console.log("Finally you see a Sword of GOld YEAHHH..");
  console.log(chalk.green.bold("CONGRATULATIONS"));}

//   // if(q1.q1 === "Quit"){
//   //   console.log("Thanks for playing GoodBye!")}


 else if (q2.Start === "Cave") {
  console.log(
    "You are in dark light.\n Every where in cave huge silence.\n Oh Bad luck here is a big snake no treasure.\n Hurry up come out from Cave. "
 ) }

 else if (q2.Start === "Road") {

  console.log(" Bad luck!!! \n Here is a big traffic on a road")
 
 }



   


