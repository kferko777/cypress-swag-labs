export class Checkout_PO {
	clickCheckout() {
		cy.get('#checkout').click()
	}

	enterCheckoutInformation(first: string, last: string, postal: string) {
		cy.get('#first-name').type(first)
		cy.get('#last-name').type(last)
		cy.get('#postal-code').type(postal)
	}

	continueToSummary() {
		cy.get('#continue').click()
	}

	getItemTotal() {
		return cy.get('.summary_subtotal_label')
	}

	getTaxAmount() {
		return cy.get('.summary_tax_label')
	}

	getTotalAmount() {
		return cy.get('.summary_total_label')
	}

	finishCheckout() {
		cy.get('#finish').click()
	}

	verifyOrderConfirmation() {
		cy.get('.complete-header').should('contain', 'Thank you')
	}

	goBackHome() {
		cy.get('#back-to-products').click()
	}

	verifyInventoryPage() {
		cy.url().should('include', '/inventory.html')
		cy.get('.inventory_list').should('be.visible')
	}
}
