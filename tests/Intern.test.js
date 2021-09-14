const Intern = require("../classes/intern")
const Employee = require("../classes/employee")

describe("Intern", () => {
    describe("Testing getEmail Function", () => {
        it("Should return the Intern's email", () => {
            let example = new Intern('Dom', 10, 'example@email.com', 'UPenn')
            expect(example.getEmail()).toBe("example@email.com")
        })
    })
    describe("Testing getEmployeeid Function", () => {
        it("Should return the Intern's email", () => {
            let example = new Intern('Dom', 10, 'example@email.com', 'UPenn')
            expect(example.getEmployeeid()).toBe(10)
        })
    })
    describe("Testing getName Function", () => {
        it("Should return the Intern's email", () => {
            let example = new Intern('Dom', 10, 'example@email.com', 'UPenn')
            expect(example.getName()).toBe("Dom")
        })
    })
    describe("Testing getRole Function", () => {
        it("Should return the Intern's email", () => {
            let example = new Intern('Dom', 10, 'example@email.com', 'UPenn')
            expect(example.getRole()).toBe("Intern")
        })
    })
    describe("Testing getSchool Function", () => {
        it("Should return the Intern's email", () => {
            let example = new Intern('Dom', 10, 'example@email.com', 'UPenn')
            expect(example.getSchool()).toBe("UPenn")
        })
    })
})