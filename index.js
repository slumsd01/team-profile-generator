const inquirer = require('inquirer')

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const { generateHTML , generateCSS } = require('./lib/generatePages')

let employee
let employeeArray = []

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this manager's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this manager's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is this manager's office number?",
    },
]

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is the this team member's role?",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is this team member's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this team member's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this team member's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this team member's GitHub username?",
        when: (answers) => answers.role == 'Engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does this team member attend?",
        when: (answers) => answers.role == 'Intern',
    },
]

function inquireManager() {
    inquirer
    .prompt(managerQuestions)
    .then((managerAnswers) => {
        employee = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, 'Manager', managerAnswers.officeNumber)

        employeeArray.push(employee)

        inquirer
        .prompt({
            type: 'confirm',
            name: 'buildTeam',
            message: "Manager added. Would you like to build a team?",
        })
        .then((confirm) => {
            if (confirm.buildTeam == true) {
                inquireEmployees();
            }
        })
    })
}


function inquireEmployees(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        if (answers.role == 'Engineer') {
            employee = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github)
        }
        if (answers.role == 'Intern') {
            employee = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school)
        }

        employeeArray.push(employee)

        inquirer.prompt({
            type: 'confirm',
            name: 'nextEmployee',
            message: "New team member added! Would you like to add another?",
        })
        .then((confirm) => {
            if (confirm.nextEmployee == true) {
                inquireEmployees();
            } else {
                module.exports = employeeArray
                generateHTML(employeeArray);
                generateCSS();

                console.log(`Your files have been generated! They can be found in the 'dist/' folder.`)
            }
        })
    })
}

inquireManager();