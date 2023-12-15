describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://Amazon.com')
    cy.get('#twotabsearchtextbox').type('Mobile')
    cy.get('#nav-search-submit-button').click()
    cy.title().should('eq', 'Mobile - Google Search')
  })
})