import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { Checkout_PO } from '../page_objects/Checkout_PO';

const checkout_PO = new Checkout_PO();

// NEW independent steps
When('I add a product to the cart for checkout', () => {
  cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
    .parents('.inventory_item')
    .find('button[data-test^="add-to-cart"]')
    .click();
});

When('I open the cart for checkout', () => {
  cy.get('.shopping_cart_link').click();
});

// Existing steps
When('I click on checkout', () => {
  checkout_PO.clickCheckout();
});

When('I enter checkout information {string} {string} {string}', (first: string, last: string, postal: string) => {
  checkout_PO.enterCheckoutInformation(first, last, postal);
});

When('I continue to the summary page', () => {
  checkout_PO.continueToSummary();
});

Then('I should see the item total', () => {
  checkout_PO.getItemTotal().should('contain', 'Item total');
});

Then('I should see the tax amount', () => {
  checkout_PO.getTaxAmount().should('contain', 'Tax');
});

Then('I should see the total amount', () => {
  checkout_PO.getTotalAmount().should('contain', 'Total');
});

When('I finish the checkout', () => {
  checkout_PO.finishCheckout();
});

Then('I should see the order confirmation page', () => {
  checkout_PO.verifyOrderConfirmation();
});

When('I go back to the products page', () => {
  checkout_PO.goBackHome();
});

Then('I should be redirected to the inventory page', () => {
  checkout_PO.verifyInventoryPage();
});
