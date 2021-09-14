const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, employeeid, email, officenumber) {
        super(name, employeeid, email)
        this.officenumber = officenumber;
    }
    getOfficeNumber() {
        return this.officenumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
