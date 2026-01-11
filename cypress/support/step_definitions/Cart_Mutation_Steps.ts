import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { Cart_Mutation_PO } from '../../support/page_objects/Cart_Mutation_PO';

const cart = new Cart_Mutation_PO();

When('I remove the product {string} from the cart', (productName: string) => {
  cart.removeProductFromCart(productName);
});

Then('the cart should be empty', () => {
  cart.cartShouldBeEmpty();
});