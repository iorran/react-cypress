import { getGreeting } from '../support/app.po';

describe('todo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.getEl('page-title').contains('Welcome to todo!');
  });
});
