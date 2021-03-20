/// <reference types="Cypress" />
declare namespace Cypress {
    interface Chainable<Subject = any> {
      getEl<E extends Node = HTMLElement>(
        identifier: string
      ): Chainable<JQuery<E>>;
    }
  }
  
  Cypress.Commands.add(
    'getEl',
    { prevSubject: 'optional' },
    (subject: Cypress.Chainable, identifier: string) => {
      if (subject) {
        return subject.find(`[data-cy="${identifier}"]`);
      } else {
        return cy.get(`[data-cy="${identifier}"]`);
      }
    }
  );