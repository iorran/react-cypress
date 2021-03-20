describe('todo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a input to add a new todo', () => {
    cy.findByRole('textbox')
      .should('be.visible');
  });

  it('should add new todo when click save', () => {
    cy.findByTestId('todo-list')
      .should('not.exist');

    cy.findByRole('textbox')
      .type('New task');
    
    cy.findByRole('button')
      .click();

    cy.findByTestId('todo-list')
      .should('exist');

    cy.findAllByTestId('todo-item')
      .should('have.length', 1);
  });

  it('should display a warning message when todo is empty string', () => {
    cy.findByTestId('todo-list')
      .should('not.exist');

    cy.findByRole('button')
      .click();

    cy.contains('You can not add an empty todo');
  });
  
});
