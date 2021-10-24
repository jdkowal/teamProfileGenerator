const inquirer = require('inquirer');
const fs = require('fs');

const employeeArray = ["Engineer","Intern"]
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