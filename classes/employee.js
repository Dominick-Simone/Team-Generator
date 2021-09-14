class Employee {
    constructor(name, employeeid, email){
        this.name = name;
        this.employeeid = employeeid;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmployeeid() {
        return this.employeeid;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;