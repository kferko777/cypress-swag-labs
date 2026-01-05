import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { Add_To_Cart_PO } from '../page_objects/Add_To_Cart_PO';

const cart_PO = new Add_To_Cart_PO();

When('I add the product {string} to the cart', (name: string) => {
  cart_PO.addProductToCart(name);
});

When('I open the cart', () => {
  cart_PO.openCart();
});

Then('I should see the product name {string}', (name: string) => {
  cart_PO.getCartItemName().should('have.text', name);
});

Then('I should see the quantity {string}', (qty: string) => {
  cart_PO.getCartItemQuantity().should('have.text', qty);
});

Then("I should see the cart product price {string}", function (price: string) {
  cart_PO.getCartItemPrice().should('have.text', price);
});

When('I remove the product {string} from the cart', (name: string) => {
  cart_PO.removeProductFromCart(name);
 });

 Then('the cart should be empty', () => {
   cart_PO.cartShouldBeEmpty(); 
  });