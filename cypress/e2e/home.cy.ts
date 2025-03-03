describe('Home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3002')
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })
})