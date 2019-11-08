import { getGreeting } from '../support/app.po';

describe('product', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to product!');
  });
});
