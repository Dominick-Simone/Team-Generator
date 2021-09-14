const Manager = require("../classes/manager")

describe("Manager", () => {
    describe("Testing getEmail Function", () => {
        it("Should return the Manager's email", () => {
            let example = new Manager('Dom', 1, 'example@email.com', 1)
            expect(example.getEmail()).toBe("example@email.com")
        })
    })
    describe("Testing getEmployeeid Function", () => {
        it("Should return the Manager's employeeid", () => {
            let example = new Manager('Dom', 1, 'example@email.com', 1)
            expect(example.getEmployeeid()).toBe(1)
        })
    })
    describe("Testing getName Function", () => {
        it("Should return the Manager's name", () => {
            let example = new Manager('Dom', 1, 'example@email.com', 1)
            expect(example.getName()).toBe("Dom")
        })
    })
    describe("Testing getRole Function", () => {
        it("Should return the Manager's role", () => {
            let example = new Manager('Dom', 1, 'example@email.com', 1)
            expect(example.getRole()).toBe("Manager")
        })
    })
    describe("Testing getOfficeNumber Function", () => {
        it("Should return the Manager's officenumber", () => {
            let example = new Manager('Dom', 1, 'example@email.com', 1)
            expect(example.getOfficeNumber()).toBe(1)
        })
    })
})