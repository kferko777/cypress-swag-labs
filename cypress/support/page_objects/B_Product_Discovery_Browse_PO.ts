export class B_Product_Discovery_Browse_PO {
  
  verifyInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  }

  clickProductByName(name: string) {
    cy.contains('.inventory_item_name', name).click();
  }

  clickProductByIndex(index: number) {
    cy.get('.inventory_item_name').eq(index).click();
  }

  verifyProductDetailsPage() {
    cy.url().should('include', 'inventory-item.html');
    cy.get('.inventory_details_container').should('be.visible');
  }

  getProductTitle() {
    return cy.get('.inventory_details_name');
  }

  getProductPrice() {
    return cy.get('.inventory_details_price');
  }
}
