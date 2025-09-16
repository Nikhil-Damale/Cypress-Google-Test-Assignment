describe('Google Title Test', () => {
  it('should have the correct title', () => {
    cy.visit('https://www.google.com')
    cy.title().should('eq', 'Google')
  })
})
