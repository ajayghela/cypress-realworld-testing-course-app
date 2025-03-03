describe('Home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3002')
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })
})