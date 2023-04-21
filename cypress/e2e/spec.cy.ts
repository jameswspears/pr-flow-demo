describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.wait(15000);
    cy.get('[data-test-id="value"]').contains('Found 0 items in the DB.');
  });
});
