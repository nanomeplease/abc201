export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });
  describe('application navigation', () => {
    it('should start on email screen', () => {
      cy.contains('EmailContainerComponent').should('exist');
    });
    it('should navigate to help screen', () => {
      cy.contains('a', 'Help').click();
      cy.get('.card-title').should('contain', 'Help Page');
    });
  });
  describe('email screen', () => {
    before(() => {
      cy.contains('a', 'Email').click();
    });
    // Nothing to test yet ...
  });
  describe('help screen', () => {
    before(() => {
      cy.contains('a', 'Help').click();
    });
    // Nothing to test yet ...
  });
});
