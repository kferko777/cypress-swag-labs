import { BeforeAll } from '@badeball/cypress-cucumber-preprocessor'
import * as LoginData from '../../fixtures/loginData.json'

BeforeAll(() => {
  cy.log('FILTER LOGIN HOOK RAN')
  cy.loginData(LoginData.username, LoginData.password)
})