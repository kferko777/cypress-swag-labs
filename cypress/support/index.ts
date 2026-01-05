/// <reference types="cypress" />

import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      loginData(username: string, password: string): Chainable<void>;
      isVisible(selector: string): Chainable<void>;
      clickAndOpenLink_InSameTab(selector: string): Chainable<void>;
    }
  }
}

export {};
