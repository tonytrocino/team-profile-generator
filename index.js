const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./template/htmltemplate");


const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);

var team = [];
var str = '';

async function main() {
  try {
    await prompt();

    for (let i=0; i<team.length; i++) {
      str += html.makeEmployeeHTML(team[i]);
    }
    let results = html.createHTML(str);

    writeFile("./index.html", results);
  } catch (error) {
    console.error(error);
  }

  
};

async function prompt() {
  let finished = "";
  // prompt to collect input and use do while at least one and do it number of times depending on the while condition
  do {
    try {
      answer = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Employee Name: "
        }, {
          type: "input",
          name: "id",
          message: "Employee ID: "
        }, {
          type: "input",
          name: "email",
          message: "Employee Email: "
        }, {
          type: "list",
          name: "job",
          message: "Employee Job Title: ",
          choices: ["Engineer", "Intern","Manager"]
        }
      ]);

      let jobAnswer = "";

      // ask question based on Employee job answer
      switch (answer.job) {
        case "Engineer":
          jobAnswer = await inquirer.prompt([{
            type: "input",
            name: "github",
            message: "GitHub Username:",
          },]);
          const engineer = new Engineer(answer.name, answer.id, answer.email, jobAnswer.github);
          team.push(engineer);
          break;
        case "Intern": 
          jobAnswer = await inquirer.prompt([{
            type: "input",
            name: "school",
            message: "School Attended: ",
          },]);
          const intern = new Intern(answer.name, answer.id, answer.email, jobAnswer.school);
          team.push(intern);
          break;
        case "Manager":
          jobAnswer = await inquirer.prompt([{
            type: "input",
            name: "phone",
            message: "Office Phone Number: ",
          },]);
          const manager = new Manager(answer.name, answer.id, answer.email, jobAnswer.phone);
          team.push(manager);
          break;
      }
    } catch (error) {
      return console.log(error);
    }
    console.log(team)
    
    //prompt to continue, use answer to continue or break out of loop and end
    finished = await inquirer.prompt([{
      type: "list",
      name: "finish",
      message: "Add another employee? ",
      choices: [
        "Yes",
        "No"
      ]
    },]);

    console.log(finished.choices);
    //Keep going until the user says yes
  } while (finished.finish === "Yes");
}






console.log("hello!");
//call function to run application on the server
main();