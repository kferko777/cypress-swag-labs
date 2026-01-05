/// <reference types="cypress" />
import * as CONFIG from '../../../cypress.config'
import { Base_PO } from './Base_PO'

export class Login_PO extends Base_PO {
	visit() {
		cy.visit(Cypress.env('url'))
	}

	clickOn_SignIn_Button() {
		const button = cy.get("input[name='login-button']")
		button.click({ force: true })
	}

	type_Username(value) {
		const field = cy.get('#user-name').click({ force: true })
		field.clear()
		field.type(value)
		return this
	}

	type_Password(value) {
		const field = cy.get('#password').click({ force: true })
		field.clear()
		field.type(value)
		return this
	}

	click_LoginButton() {
		cy.get('[data-test="login-button"]').click()
	}

	getLoginError() {
		return cy.get('[data-test="error"]')
	}
}
