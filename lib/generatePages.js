const fs = require('fs');

const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')
let employeeArray = require('../index')

function generateHTML(employeeArray) {
    //start HTML
    let HTML = `
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
    `

    let HTMLend = `
        </section>
    </body>
    </html>
    `

    //generate manager card
    employeeArray.forEach(Manager => {
        if (Manager.role == 'Manager') {
            HTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title" id="name">
                        ${Manager.name}
                    </h5>
                    <h6 class="card-subtitle mb-2">
                        ${Manager.role}
                    </h6>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    ID: ${Manager.id}
                </li>
                <li class="list-group-item">
                    Email: <a href="mailto:${Manager.email}"> ${Manager.email} </a>
                </li>
                <li class="list-group-item">
                    Office Number: ${Manager.officeNumber}
                </li>
                </ul>
            </div>
            `
        }
    })    
    
    //generate engineer cards
    employeeArray.forEach(Engineer => {
        if (Engineer.role == 'Engineer') {
            HTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title" id="name">
                        ${Engineer.name}
                    </h5>
                    <h6 class="card-subtitle mb-2">
                        ${Engineer.role}
                    </h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                      ID: ${Engineer.id}
                  </li>
                  <li class="list-group-item">
                      Email: <a href="mailto:${Engineer.email}"> ${Engineer.email} </a>
                  </li>
                  <li class="list-group-item">
                      GitHub: <a href="https://github.com/${Engineer.github}" target="blank"> ${Engineer.github} </a>
                  </li>
                </ul>
            </div>
            `
        }
    })

    //generate intern cards
    employeeArray.forEach(Intern => {
        if (Intern.role == 'Intern') {
            HTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title" id="name">
                        ${Intern.name}
                    </h5>
                    <h6 class="card-subtitle mb-2">
                        ${Intern.role}
                    </h6>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    ID: ${Intern.id}
                </li>
                <li class="list-group-item">
                    Email: <a href="mailto:${Intern.email}"> ${Intern.email} </a>
                </li>
                <li class="list-group-item">
                    School: ${Intern.school}
                </li>
                </ul>
            </div>
            `
        }
    })

    //finish HTML
    HTML += HTMLend

    fs.writeFile('./dist/index.html', HTML, function (err) {
        if (err) {
            console.log("Error creating HTML file.")
        }
    })
}

function generateCSS() {
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

    fs.writeFile('./dist/style.css', cssTemplate, function (err) {
        if (err) {
            console.log("Error creating CSS file.")
        }
    })
}

module.exports = { generateHTML, generateCSS }