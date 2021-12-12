const inquirer = require('inquirer')
const fs = require('fs');

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


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
        name: 'school',
        message: "What school does this employee attend?",
        when: (answers) => answers.role == 'Intern',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is this employee's office number?",
        when: (answers) => answers.role == 'Manager',
    },
]

let HTMLtemplate = `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">

        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section class="row justify-content-center" id="container">
            <div class="card" style="width: 18rem;" id="employee">
                <div class="card-header">
                    <h5 class="card-title" id="name">
                        <!-- employee name -->
                    </h5>
                    <h6 class="card-subtitle mb-2" id="role">
                        <!-- employee role -->
                    </h6>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id="id">
                    <!-- employee id number -->
                    ID: 
                </li>
                <li class="list-group-item" id="email">
                    <!-- employee email -->
                    
                </li>
                <li class="list-group-item">
                    <!-- other role information (github, office number, school) -->
                </li>
                </ul>
            </div>
        </section>
    </body>
    </html>
`

let cssTemplate = `
    body {
        margin: 30px;
    }

    header {
        text-align: center;
        background-color: #E84756;
        color: white;
        padding: 30px;
        margin: 20px 0;
    }

    .card {
        margin: 10px;
    }

    .card-header {
        background-color: #0077F7;
        color: white;
        margin: 0 -12px;
    }

    .card-subtitle {
        opacity: 0.8;
    }
`

function generateFiles() {
    fs.writeFile('./dist/index.html', HTMLtemplate, function (err) {
        if (err) {
            console.log("Error creating HTML file.")
        } else {
            console.log("HTML file created.")
        }
    })

    fs.writeFile('./dist/style.css', cssTemplate, function (err) {
        if (err) {
            console.log("Error creating CSS file.")
        } else {
            console.log("CSS file created.")
        }
    })
}

function initialize(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        let employee;

        if (answers.role == 'Engineer') {
            employee = new Engineer(answers.name, answers.id, answers.email, answers.github)
        }
        if (answers.role == 'Intern') {
            employee = new Intern(answers.name, answers.id, answers.email, answers.school)
        }
        if (answers.role == 'Manager') {
            employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        }

        employeeArray.push(employee)

        inquirer.prompt({
            type: 'confirm',
            name: 'nextEmployee',
            message: "New employee added! Would you like to add another?",
        })
        .then((confirm) => {
            if (confirm.nextEmployee == true) {
                initialize();
            } else {
                console.log(employeeArray)
            }
        })
    })
}

initialize();