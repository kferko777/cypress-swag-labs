export class Cart_Mutation_PO {
  addItemToCart(productName: string) {
    cy.contains('.inventory_item', productName)
      .find('button')
      .contains(/add to cart/i)
      .click();
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }

  getCartItemName() {
    return cy.get('.cart_item .inventory_item_name');
  }

  getCartItemQuantity() {
    return cy.get('.cart_item .cart_quantity');
  }

  removeProductFromCart(productName: string) {
    cy.contains('.cart_item', productName)
      .find('button')
      .contains(/remove/i)
      .click();
  }

  cartShouldBeEmpty() {
    cy.get('.cart_item').should('not.exist');
  }
}
