const inquirer = require('inquirer')

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employeeArray = []

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this employee's email?",
    },
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this employee's GitHub username?",
        when: (answers) => answers.role == 'Engineer',
    },
    {
        type: 'input',
        name: 'github',
        message: "What school does this employee attend?",
        when: (answers) => answers.role == 'Intern',
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this employee's office number?",
        when: (answers) => answers.role == 'Manager',
    },
]

function initialize(){
    inquirer.prompt(questions)
    .then((answers) => {
        employeeArray.push(answers)
        inquirer.prompt({
            type: 'confirm',
            name: 'nextEmployee',
            message: "Would you like to add another employee?",
        })
        .then((answer) => {
            if (answer.nextEmployee == true) {
                initialize();
            } else {
                console.log(employeeArray)
            }
        })
    })
}

initialize();