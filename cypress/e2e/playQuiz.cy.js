describe('flow of the play-quiz', () => {
  it('Get to the play-quizView', () => {
    cy.visit('http://localhost:4173')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('.username-input').type('adminUser')
    cy.get('.password-input').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.url().should('include', '/discover')
    cy.get('.slider').eq(2).children().eq(2).click()
    cy.url().should('include', '/quiz-info')
    cy.contains('Play Quiz').click()
    cy.url().should('include','/play-quiz')
    //assert if a button is true or false(not working)------>
    cy.get('[data-cy="answer-buttons"]').eq(1).click()//.children().eq(0).should('eql', { isCorrect: false })
    cy.get('[data-cy="next-question-button"]').click()
    cy.get('[data-cy="answer-buttons"]').eq(0).click()
    cy.get('[data-cy="next-question-button"]').click()
    cy.get('[data-cy="answer-buttons"]').eq(2).click()
    cy.get('[data-cy="next-question-button"]').click()
    cy.get('[data-cy="answer-buttons"]').eq(2).click()
    cy.get('[data-cy="next-question-button"]').click()
    cy.get('[data-cy="answer-buttons"]').eq(0).click()
    cy.get('[data-cy="next-question-button"]').click()
    cy.url().should('include', 'quiz-results')
    cy.get('.quiz-result-container').children().eq(0).should( 'contain','You got 1 out of 5 right!')


    //click on the slide-button
/*
    cy.get('[data-cy="handle-right-button"]').first().click()
    //How to access a array
    ///cy.get('[data-cy="quizzes-by-user")]')
    cy.url().should('include','/quiz-info')
    cy.contains('Play Game').click()
    cy.url().should('include', 'play-quiz')
*/
    it('continue the flow of the program...')
  })
})