const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');

const employeeArray = ["Engineer","Intern","I do no want to add any more team members."]
const managerQuestions = [
    {
        type:"input",
        name: "managerName",
        message: "What is the team manager's name?"
    },
    {
        type:"input",
        name: "idNum",
        message: "What is the team manager's ID number?"
    },
    {
        type:"input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type:"input",
        name: "officeNum",
        message: "What is the team manager's office number?"
    }

];

const engineerQuestions = [
    {
        type:"input",
        name: "managerName",
        message: "What is the engineer's name?"
    },
    {
        type:"input",
        name: "idNum",
        message: "What is the engineer's ID number?"
    },
    {
        type:"input",
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type:"input",
        name: "github",
        message: "What is the engineer's Github profile?"
    }

];

const internQuestions = [
    {
        type:"input",
        name: "managerName",
        message: "What is the intern's name?"
    },
    {
        type:"input",
        name: "idNum",
        message: "What is the team intern's ID number?"
    },
    {
        type:"input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type:"input",
        name: "school",
        message: "What school does the intern attend?"
    }

];

const addNewEmployee =
{
    type:"list",
    name: "license",
    message: "Which type of team member would you like to add?",
    choices: employeeArray
};

function init() {
    inquirer
.prompt(managerQuestions)
.then((anwsers)=>{
    console.log(anwsers)
})
}
// .then console.log(data)}
// .then((data)=>{
//     fs.writeFile("README.md",generateMarkdown(data), (err)=>{
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("Generating README...");
//         }
//     })
// })
// }

init();