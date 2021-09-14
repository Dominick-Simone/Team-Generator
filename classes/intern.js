const Employee = require("./employee");

class Intern extends Employee { 
    constructor(name, employeeid, email, school) {
        super(name, employeeid, email, school)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
