/// <reference types="cypress" />
import {
  When,
  Then,
  Given,
  Before,
  After,
} from '@badeball/cypress-cucumber-preprocessor'
import { Base_PO } from '../page_objects/Base_PO'

const base_PO = new Base_PO()

// Runs before every scenario
Before(() => {
  cy.log('Executes before each Scenario/Test.')
  // Do NOT clear cookies or local storage here
})

// Optional: regression tag hook
Before({ tags: '@regression' }, () => {
  cy.log('Executes Smoke Pack')
})

// Programmatic login for all features EXCEPT Login.feature
Given('I am logged in', () => {
  cy.fixture('loginData').then((data) => {
    cy.loginData(data.username, data.password)
  })
})

When('I wait for {int} seconds', (seconds: number) => {
  cy.wait(seconds * 1000)
})

When('I log out', () => {
  base_PO.openBurgerMenu()
  base_PO.logout()
})

Then('I should be redirected to login page', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/')
})