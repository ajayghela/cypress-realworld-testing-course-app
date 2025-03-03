describe('Home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001')
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })
  it.only("the features on the homepage are correct", () => {
    cy.visit("http://localhost:3001")
    cy.get("dt")
  })
})