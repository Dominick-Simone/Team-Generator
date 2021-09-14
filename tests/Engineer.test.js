const Engineer = require("../classes/engineer")

describe("Engineer", () => {
    describe("Testing getEmail Function", () => {
        it("Should return the Engineer's email", () => {
            let example = new Engineer('Dom', 1, 'example@email.com', "example")
            expect(example.getEmail()).toBe("example@email.com")
        })
    })
    describe("Testing getEmployeeid Function", () => {
        it("Should return the Engineer's employeeid", () => {
            let example = new Engineer('Dom', 1, 'example@email.com', "example")
            expect(example.getEmployeeid()).toBe(1)
        })
    })
    describe("Testing getName Function", () => {
        it("Should return the Engineer's name", () => {
            let example = new Engineer('Dom', 1, 'example@email.com', "example")
            expect(example.getName()).toBe("Dom")
        })
    })
    describe("Testing getRole Function", () => {
        it("Should return the Engineer's role", () => {
            let example = new Engineer('Dom', 1, 'example@email.com', "example")
            expect(example.getRole()).toBe("Engineer")
        })
    })
    describe("Testing getGithub Function", () => {
        it("Should return the Engineer's officenumber", () => {
            let example = new Engineer('Dom', 1, 'example@email.com', "example")
            expect(example.getGithub()).toBe("example")
        })
    })
})