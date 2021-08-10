class Intern { 
    Constructor(name, employeeid, email, school) {
        this.name = name;
        this.employeeid = employeeid;
        this.email = email;
        this.school = school;
    }
    addToHtml(name, employeeid, email, school) {
        console.log("added")
    }
}
module.exports = Intern;
