describe('Button component', () => {

  beforeEach(() => {
    cy.visit('/iframe.html?id=button--primary&knob-Title=Save');
  })
  it('should have height 50px', () => {
    cy.findByRole('button')
      .should('have.css', 'height')
      .and('eq', '50px');
  }); 
  it('should have width 150px', () => {
    cy.findByRole('button')
      .should('have.css', 'width')
      .and('eq', '150px');
  }); 
  it('should have border-radius 3px', () => {
    cy.findByRole('button')
      .should('have.css', 'border-radius')
      .and('eq', '3px');
  }); 
  it('should have background-color #3f3c3c', () => {
    cy.findByRole('button')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(63, 60, 60)');
  }); 
  it('should have white foreground color', () => {
    cy.findByRole('button') 
      .should('have.css', 'color')
      .and('eq', 'rgb(255, 255, 255)');
  }); 
});