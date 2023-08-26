describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Have heading', () => {
    cy.getByData('heading-1').contains('Alimnfl Todos - React-TS');
    cy.getByData('button-toggle').contains('Toggle Mode');
  });

  it('Search Input exist?', () => {
    cy.getByData('search-input').click();
  });

  it('Todo List part', () => {
    cy.getByData('text-data').contains('This is my first todo!');
    cy.getByData('date-data').contains('3/18/2023');
    cy.getByData('delete-data').eq(0);
  });
});
