const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./src/markdown");
const renderManager = require("./src/markdown");
const { validate } = require("@babel/types");
const { number } = require("yargs");
const { not } = require("expect");

const employeeArray = ["Engineer", "Intern", "I do no want to add any more team members."]
const teamArray = []


function appMenu() {
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team member's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "please enter at least one character"
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team member's ID number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "please enter a positive number greater tha zero"
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the member's email?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "please enter a valid email address"
            }
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the team manager's office number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "please enter a positive number greater tha zero"
            }
        }

    ]).then(answers => {
        const manager = new Manager(
            answers.managerName,
            answers.mangerId,
            answers.mangerEmail,
            answers.mangerOffice);
        teamArray.push(manager);
        //empty id array for manager id 
        createTeam();
    });

}

function newEmployee() {
    inquirer.prompt([{
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I do no want to add any more team members."]
    }
    ]).then(userChoice => {
        switch (userChoice.role) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });

}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "please enter at least one character"
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "please enter a positive number greater tha zero"
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "please enter a valid email address"
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github profile?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "please enter at least one character"}

        }
    
    ]).then(answers => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.github);
        teamArray.push(engineer);
        //empty id array for manager id 
        createTeam();
    })
}

function addIntern() {
    inquirer.prompt([{
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "please enter at least one character"
        }

    },
    {
        type: "input",
        name: "internId",
        message: "What is the team intern's ID number?",
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "please enter a positive number greater tha zero"
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
        validate: answer => {
            const pass = answer.match(
                /\S+@\S+\.\S+/
            );
            if (pass) {
                return true;
            }
            return "please enter a valid email address"
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "please enter at least one character"
        }
    }]).then(answers => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.school);
        teamArray.push(intern);
        //empty id array for manager id 
        createTeam();
    })
}


function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)

    }
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}

// console.log("this is my team!");
createManager();
newEmployee();
addEngineer();
addIntern();
}

appMenu();
// console.log(manager.getName());