const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, employeeid, email, github) {
        super(name, employeeid, email)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
