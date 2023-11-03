describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Have heading', () => {
    cy.getByData('heading-1').contains('Alimnfl Todos - React-TS');
    cy.getByData('button-toggle').contains('Toggle Mode');
  });

  it('Search Input can use?', () => {
    cy.getByData('search-input').click().type('this is');
  });

  it('Have a Toggle Mode?', () => {
    cy.getByData('button-toggle').click();
    // Make a white desc again
    cy.getByData('button-toggle').click();
  });

  it('Can make new Todo List?', () => {
    cy.getByData('data-input').click().type('I wanna go to the gym');
    cy.getByData('data-created').should('exist').click();
  });

  it.only('Can make new Todo and Delete List another?', () => {
    cy.getByData('data-input').click().type('I wanna go to the gym');
    cy.getByData('data-created').should('exist').click();
    cy.getByData('delete-data').eq(0).click();
    cy.getByData('delete-data').eq(1).click();
  });
});
