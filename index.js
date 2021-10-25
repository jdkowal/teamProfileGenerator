const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');

const employeeArray = ["Engineer","Intern","I do no want to add any more team members."]

const managerQuestions = [
    {
        type:"input",
        name: "Name",
        message: "What is the team member's name?"
    },
    {
        type:"input",
        name: "idNum",
        message: "What is the team member's ID number?"
    },
    {
        type:"input",
        name: "email",
        message: "What is the member's email?"
    },
    {
        type:"input",
        name: "officeNumber",
        message: "What is the team manager's office number?"
    }

];

const engineerQuestions = [
    {
        type:"input",
        name: "Name",
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
        name: "Name",
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

function getManagerInfo(){
    inquirer
    .prompt(managerQuestions)
    .then((data)=>{
        console.log(data)
        
})

};

function newEmployee(){
    inquirer
    .prompt(addNewEmployee)
    .then((data)=>{
        console.log(data)
        
})
};

function getEngineerInfo(){
    inquirer
    .prompt(engineerQuestions)
    .then((data)=>{
        console.log(data)
        
})
};

function getInternInfo(){
    inquirer
    .prompt(internQuestions)
    .then((data)=>{
        console.log(data)
        
})
};

getManagerInfo();
