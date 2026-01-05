import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Login_PO } from '../page_objects/Login_PO'

const login_PO = new Login_PO()

When(
	'I enter invalid credentials {string} {string}',
	(username: string, password: string) => {
		login_PO.type_Username(username)
		login_PO.type_Password(password)
	}
)

Then('I should see the login error {string}', (message: string) => {
	login_PO.getLoginError().should('contain.text', message)
})
