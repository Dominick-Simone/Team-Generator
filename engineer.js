class Engineer {
    Constructor(name, employeeid, email, github) {
    this.name = name;
    this.employeeid = employeeid;
    this.email = email;
    this.github = github;
    }
    addToHtml(name, employeeid, email, github) {
        console.log("added")
    }
}
module.exports = Engineer;
