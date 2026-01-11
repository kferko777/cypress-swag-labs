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
    return cy.get('.cart_item .inventory_item_name')
  }

  getCartItemPrice() {
    return cy.get('.cart_item .inventory_item_price')
  }

  getCartItemQuantity() {
    return cy.get('.cart_item .cart_quantity')
  }
}