describe('Note ', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Software anecdotes')
  })

  it('login form can be opened', function() {
    cy.contains('login')
      .click()
    cy.get('[data-cy=usernameInput]')
      .type('gab')
    cy.get('[data-cy=passwordInput]')
      .type('secreto')
    cy.get('[data-cy=loginSubmit]')
      .click()
    cy.contains('gab Logged In')
  })
})

// gab Logged In