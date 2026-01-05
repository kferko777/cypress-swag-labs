import { findElementByText } from "../utils/domutils"

export class Base_PO {

	loginButton() {
		cy.contains('Login', { matchCase: false })
			.filter(':visible')
			.first()
			.click({ force: true })
	}

	openBurgerMenu() { 
		cy.get('#react-burger-menu-btn')
			.click({ force: true }); 
		cy.get('#logout_sidebar_link').should('be.visible');
	} 

	logout() { 
		cy.get('#logout_sidebar_link')
		.click({ force: true }); 
	}
}