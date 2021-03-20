describe('Input component', () => {
  describe('Style', () => {
    it('should have red border', () => {
      cy.visit('/iframe.html?id=input--primary');
      cy.getEl('input')
        .should('have.css', 'border-color')
        .and('eq', 'rgb(255, 0, 0)')
    });
  });
});