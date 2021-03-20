describe('List component', () => {

  describe('Style', () => {
    const todos = 'Todo 1,Todo 2,Todo 3,Todo 4';
    const arrayTodos = todos.split(',');

    beforeEach(() => {
      cy.visit('/iframe.html?id=list--primary&knob-Todo=' + todos);
    })

    it(`should render ${arrayTodos.length} todos`, () => {
      cy.findAllByTestId('todo-item')
        .should('have.length', arrayTodos.length);
    });

    arrayTodos.forEach((todo) => {
      it(`should render ${todo}`, () => {
        cy.contains(todo);
      });
    })
  });
});