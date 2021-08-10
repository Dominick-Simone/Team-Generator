class Manager {
    Constructor(name, employeeid, email, officenumber, options) {
        this.name = name;
        this.employeeid = employeeid;
        this.email = email;
        this.officenumber = officenumber;
        this.options = options;
    }
    addToHtml(name, employeeid, email, officenumber) {
        console.log("added")
    }
}
module.exports = Manager;
