describe('shared-ui: SharedGreeter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedgreeter--primary&knob-name='));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to shared-ui!');
    });
});
