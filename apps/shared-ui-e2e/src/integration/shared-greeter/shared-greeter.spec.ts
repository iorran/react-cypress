describe('greeter component', () => {
  it('should display greeting message', () => {
    cy.visit('/iframe.html?id=shared-greeter--primary&knob-Person Name=Person One');
    cy.getEl('greeting').contains('Hi there, Person One!');
  });

  it('should display the person name properly', () => {
    cy.visit('/iframe.html?id=shared-greeter--primary&knob-Person Name=Person Two');
    cy.getEl('greeting').contains('Hi there, Person Two!');
  });
});