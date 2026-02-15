describe('pmds-hub-storybook', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('pmds-hub-root').should('exist');
  });
});
