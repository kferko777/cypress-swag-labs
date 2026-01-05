// -- This will overwrite an existing command --
///<reference types="cypress" />
import './commands'
require('cypress-iframe')
require('cypress-xpath')

import { Login_PO } from './page_objects/Login_PO'

const login_PO = new Login_PO()

Cypress.Commands.add('loginData', (username, password) => {
	login_PO.visit()
	login_PO.type_Username(username)
	login_PO.type_Password(password)
	login_PO.click_LoginButton()
})

Cypress.Commands.add('isVisible', selector => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('clickAndOpenLink_InSameTab', selector => {
	cy.get(selector).invoke('removeAttr', 'target').click()
	cy.get(selector).click({ multiple: true })
})