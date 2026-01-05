/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Login_PO } from '../page_objects/Login_PO'
import * as LoginData from '../../fixtures/loginData.json'

const login_PO = new Login_PO()

Given('I navigate to Swag Labs', () => {
  login_PO.visit()
})

// 1. Positive scenario
When('I login with valid credentials', () => {
  login_PO.type_Username(LoginData.username)
  login_PO.type_Password(LoginData.password)
})

Given('I click on Sign in button', () => {
  login_PO.clickOn_SignIn_Button()
})

Then('I should be able to login successfully to the Website', () => {
  cy.url().should('include', 'inventory.html')
})

Then('I should see the inventory page', () => {
  cy.get('.inventory_list').should('be.visible')
})

Then('I refresh and should still be logged in', () => {
  cy.reload()
  cy.get('.inventory_list').should('be.visible')
})
