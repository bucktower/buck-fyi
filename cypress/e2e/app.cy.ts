describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000');

    cy.contains('Software Engineer').should('exist');
  });
});
