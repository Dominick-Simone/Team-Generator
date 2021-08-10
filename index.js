const inquirer = require("inquirer")
const Engineer = require("./engineer")
const Intern = require("./intern")
const Manager = require("./manager")
let html = "";
const employees = [];
const managerquestions = [
    {
        name: "managername",
        type: "input",
        message: "What is your team manager's name",
    },
    {
        name: "employeeid",
        type: "input",
        message: "What is your managers employee ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your managers email address?",
    },
    {
        name: "officenumber",
        type: "input",
        message: "What is your managers office number?",
    },
    {
        name: "options",
        type: "list",
        message: "Would you like to add an engineer, intern, or finish building your team?",
        choices: ["Engineer", "Intern", "I'm Finished"]
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
        message: "What is your team engineer's name",
    },
    {
        name: "employeeid",
        type: "input",
        message: "What is your engineer's employee ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your engineer's email address?",
    },
    {
        name: "github",
        type: "input",
        message: "What is your engineer's github name?",
    }
]
const internQuestions = [
    {
        name: "internname",
        type: "input",
        message: "What is your intern's name",
    },
    {
        name: "employeeid",
        type: "input",
        message: "What is your intern's employee ID?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your intern's email address?",
    },
    {
        name: "school",
        type: "input",
        message: "Where does your intern go to school?",
    }
]
inquirer 
    .prompt(managerquestions)
    .then(responses => {
        let name = responses.managername;
        let employeeid = responses.employeeid;
        let email = responses.email
        let officenumber = responses.officenumber
        let options = responses.options
        const managers = new Manager(name, employeeid, email, officenumber, options)
        console.log("manager added")
        if (options === "Engineer") {
            inquirer
                .prompt(engineerQuestions)
                .then(responses => {
                    let name = responses.engineername;
                    let employeeid = responses.employeeid;
                    let email = responses.email
                    let github = responses.github;
                    const engineers = new Engineer(name, employeeid, email, github)
                    console.log("New Engineer Created")
                    inquirer 
                        .prompt(moreEmployees)
                        .then(responses => {
                            let option = responses.options;
                            if (option === "I'm Finished") {
                                options.replace(options, option)
                            } else {
                                inquirer.prompt(engineerQuestions)
                            }
                        })
                })
        } else if (options === "Intern") {
            inquirer
                .prompt(internQuestions)
                .then(responses => {
                    let name = responses.internname;
                    let employeeid = responses.employeeid;
                    let email = responses.email;
                    let school = responses.school;
                    const interns = new Intern(name, employeeid, email, school)
                    console.log("New Intern Created")
                    inquirer 
                        .prompt(moreEmployees)
                        .then(responses => {
                            let option = responses.options;
                            if (option === "I'm Finished") {
                                options.replace(options, option)
                            } else {
                                inquirer.prompt(internQuestions)
                            }
                        })
                })
            }

    })