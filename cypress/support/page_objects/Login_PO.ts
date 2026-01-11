import { Base_PO } from "./Base_PO";
export class Login_PO extends Base_PO {
	

  visit() {
    cy.visit('/')
  }

  type_Username(value: string) {
    cy.get('#user-name').clear().type(value)
    return this
  }

  type_Password(value: string) {
    cy.get('#password').clear().type(value)
    return this
  }

  click_LoginButton() {
    cy.get('[data-test="login-button"]').click()
  }

  getLoginError() {
    return cy.get('[data-test="error"]')
  }
}
