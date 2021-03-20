describe('todo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.getEl('greeting').contains('Hi there');
  });
});
