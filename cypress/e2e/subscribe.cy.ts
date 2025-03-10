describe("Newsletter Subscribe Form", () => {
    beforeEach(()=>{
        cy.visit("http://localhost:3001")
    })
    it("allows users to subscribe to the email list", () => {})
        cy.getByData("email-input")
})