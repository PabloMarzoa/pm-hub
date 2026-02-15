describe('pmds-hub-storybook', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('pmds-hub-nx-welcome').should('exist');
  });
});
