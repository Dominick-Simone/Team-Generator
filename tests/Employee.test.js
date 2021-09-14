const Employee = require("../classes/employee")

describe("Employee", () => {
    describe("Testing getEmail Function", () => {
        it("Should return the Employee's email", () => {
            let example = new Employee('Dom', 1, 'example@email.com')
            expect(example.getEmail()).toBe("example@email.com")
        })
    })
    describe("Testing getEmployeeid Function", () => {
        it("Should return the Employee's employeeid", () => {
            let example = new Employee('Dom', 1, 'example@email.com')
            expect(example.getEmployeeid()).toBe(1)
        })
    })
    describe("Testing getName Function", () => {
        it("Should return the Employee's name", () => {
            let example = new Employee('Dom', 1, 'example@email.com')
            expect(example.getName()).toBe("Dom")
        })
    })
})