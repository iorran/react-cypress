describe('Input component', () => {

  beforeEach(() => {
    cy.visit('/iframe.html?id=input--primary');
  })
  it('should have back background-color', () => {
    cy.findByRole('textbox')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(63, 60, 60)')
      .should('have.css', 'background-color');
  }); 
  it('should have back color', () => {
    cy.findByRole('textbox') 
      .should('have.css', 'color')
      .and('eq', 'rgb(255, 255, 255)');
  }); 
});