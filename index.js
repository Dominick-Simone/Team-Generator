const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./classes/engineer")
const Intern = require("./classes/intern")
const Manager = require("./classes/manager")
let employees = [];

function writeToFile(fileName, data) {
    fs.writeFile(fileName , data, err =>
    err ? console.error(err) : console.log("success"))
}

const managerQuestions = [
    {
        name: "managername",
        type: "input",
        message: "What is your team manager's name"
    },
    {
        name: "employeeid",
        type: "input",
        message: "What is your managers employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your managers email address?"
    },
    {
        name: "officenumber",
        type: "input",
        message: "What is your managers office number?"
    }
]

const moreEmployees = {
    name: "options",
    type: "list",
    message: "Would you like to add an engineer, intern, or finish building your team?",
    choices: ["Engineer", "Intern", "I'm Finished"]
}

const engineerQuestions = [
    {
        name: "engineername",
        type: "input",
        message: "What is your team engineer's name"
    },
    {
        name: "employeeid",
        type: "input",
        message: "What is your engineer's employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your engineer's email address?"
    },
    {
        name: "github",
        type: "input",
        message: "What is your engineer's github name?"
    }
]

const internQuestions = [
    {
        name: "internname",
        type: "input",
        message: "What is your intern's name"
    },
    {
        name: "employeeid",
        type: "input",
        message: "What is your intern's employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your intern's email address?"
    },
    {
        name: "school",
        type: "input",
        message: "Where does your intern go to school?"
    }
]

function engineerQuestion() {
    function generateEngineerHtml(name, employeeid, email, github, role) {
        output = `
    <div class="card bg-primary me-5" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${name}</h5>
            <h5 class="card-title">Engineer</h5>
            <h6 class="card-text">Employee ID: ${employeeid}</h6>
            <h6 class="card-text">Email: ${email}</h6>
            <h6 class="card-text">Github:<a href="https://github.com/${github}" class="link-dark card-link">${github}</a></h6>
        </div>
    </div>`
        return  output;
    } 

    inquirer
        .prompt(engineerQuestions)
        .then(responses => {
            const name = responses.engineername;
            const employeeid = responses.employeeid;
            const email = responses.email;
            const github = responses.github;
            const engineer = new Engineer(name, employeeid, email, github)
            console.log("Engineer", engineer, engineer.getRole())
            employees.push(generateEngineerHtml(engineer.name, engineer.employeeid, engineer.email, engineer.github, engineer.getRole()))
            console.log("New Engineer Created")
            askQuestion();
        })
}



function internQuestion() {
    function generateInternHtml(name, employeeid, email, school, role) {
        output = `
    <div class="card bg-primary me-5" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${name}</h5>
            <h5 class="card-title">Intern</h5>
            <h6 class="card-text">Employee ID: ${employeeid}</h6>
            <h6 class="card-text">Email: ${email}</h6>
            <h6 class="card-text">School: ${school}</h6>
        </div>
    </div>`
        return  output;
    } 
    inquirer
        .prompt(internQuestions)
        .then(responses => {
            let name = responses.internname;
            let employeeid = responses.employeeid;
            let email = responses.email;
            let school = responses.school;
            const interns = new Intern(name, employeeid, email, school)
            console.log("Intern", interns, interns.getRole())
            employees.push(generateInternHtml(interns.name, interns.employeeid, interns.email, interns.school, interns.getRole()))
            console.log("New Intern Created")
            askQuestion();
        })
}

function askQuestion() {
    inquirer 
        .prompt(moreEmployees)
        .then(responses => {
            let option = responses.options;
            if (option === "I'm Finished") {
                let workHTML = employees.join("")
                let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <title>Team Generator</title>
</head>
<body>
  <header class= "bg-primary mb-5 pb-3 pt-3">
    <h1 class="text-dark text-center">Team Generator</h1>
  </header>
  <div class="container d-flex flex-row justify-content-center">${workHTML}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>`
                writeToFile("index.html", html);
            } else if (option === "Engineer") {
                engineerQuestion();
            } else if (option === "Intern") { 
                internQuestion()
            }
        })
}

function managerQuestion() {
    function generateManagerHtml(name, employeeid, email, officenumber, role) {
        output = `
    <div class="card bg-primary me-5" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${name}</h5>
            <h5 class="card-title">Manager</h5>
            <h6 class="card-text">Employee ID: ${employeeid}</h6>
            <h6 class="card-text">Email: ${email}</h6>
            <h6 class="card-text">OfficeNumber: ${officenumber}</h6>
        </div>
    </div>`
        return output;
    } 
    inquirer 
    .prompt(managerQuestions)
    .then(responses => {
        let name = responses.managername;
        let employeeid = responses.employeeid;
        let email = responses.email;
        let officenumber = responses.officenumber;
        const managers = new Manager(name, employeeid, email, officenumber)
        console.log("Manager", managers, managers.getRole())
        employees.push(generateManagerHtml(managers.name,  managers.employeeid, managers.email, managers.officenumber, managers.getRole()))
        console.log("Manager Created")
        askQuestion()
    })
}

managerQuestion()