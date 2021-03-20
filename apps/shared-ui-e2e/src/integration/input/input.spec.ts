describe('Input component', () => {

  beforeEach(() => {
    cy.visit('/iframe.html?id=input--primary');
  })
 
  it('should have red border', () => {
    cy.findByRole('textbox')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(63, 60, 60)');
  }); 
});