export class Add_To_Cart_PO {
	addProductToCart(name: string) {
		cy.contains('.inventory_item_name', name)
			.parents('.inventory_item')
			.find('button[data-test^="add-to-cart"]')
			.click()
	}

	openCart() {
		cy.get('.shopping_cart_link').click()
	}

	getCartItemName() {
		return cy.get('.inventory_item_name')
	}

	getCartItemPrice() {
		return cy.get('.inventory_item_price')
	}

	getCartItemQuantity() {
		return cy.get('.cart_quantity')
	}

	removeProductFromCart(name: string) {
		cy.contains('.inventory_item_name', name)
			.parents('.cart_item')
			.find('button[data-test^="remove"]')
			.click()
	}

	cartShouldBeEmpty() {
		cy.get('.cart_item').should('not.exist')
	}
}