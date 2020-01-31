describe('Anecdote App ', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Software anecdotes')
  })

  it('login form can be opened', function() {
    cy.contains('login')
      .click()
    cy.contains('Login')
    cy.contains('Username')
    cy.contains('Password')
  })

  describe('When registered: ', function() {
    it('properly registers', function() {
      cy.request('POST', 'http://localhost:3003/api/reset')
      cy.get('[data-cy=menu-register]')
        .click()
      cy.contains('Register')
      cy.get('[data-cy=username-register]')
        .type('gab')
      cy.get('[data-cy=name-register]')
        .type('julio')
      cy.get('[data-cy=password-register]')
        .type('secreto')
      cy.get('[data-cy=submit-register]')
        .click()
      cy.contains('gab successfully registered!')
    })

    it('properly displays user info ', function () {
      cy.get('[data-cy=menu-users]')
      .click()
      cy.get('[data-cy=refresh-users]')
        .click()
      cy.contains('gab')
    })

    describe('When logged in', function() {
      beforeEach(function() {
      cy.get('[data-cy=menu-login]')
        .click()
      cy.get('[data-cy=usernameInput]')
        .type('gab')
      cy.get('[data-cy=passwordInput]')
        .type('secreto')
      cy.get('[data-cy=loginSubmit]')
        .click()
      })
  
      it('user is displayed', function() {
        cy.contains('gab Logged In')
        cy.get('[data-cy=menu-logout]')
          .click()
      })

      it('properly posts an anecdote', function () {
        cy.get('[data-cy=menu-createanecdote]')
          .click()
        cy.get('[data-cy="content-input-anecdote"]')
          .type('testing')
        cy.get('[data-cy="author-input-anecdote"]')
          .type('testing')
        cy.get('[data-cy="info-input-anecdote"]')
          .type('testing')
        cy.get('[data-cy="submit-button-anecdote"]')
          .click()
        cy.contains('Anecdotes')
        cy.contains('testing')
      })
    })
  })

})

// gab Logged In

// it('User can log in', function() {
//   cy.contains('login')
//     .click()
//   cy.get('[data-cy=usernameInput]')
//     .type('gab')
//   cy.get('[data-cy=passwordInput]')
//     .type('secreto')
//   cy.get('[data-cy=loginSubmit]')
//     .click()
//   cy.contains('gab Logged In')
// })