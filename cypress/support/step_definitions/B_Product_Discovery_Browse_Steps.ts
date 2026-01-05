import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { B_Product_Discovery_Browse_PO } from '../page_objects/B_Product_Discovery_Browse_PO'

const browse_PO = new B_Product_Discovery_Browse_PO()

When('I click on {string}', (name: string) => {
	browse_PO.clickProductByName(name)
})

Then('I should be taken to the product details page', () => {
	cy.url().should('include', 'inventory-item.html')
})

Then('I should see the product title {string}', (title: string) => {
	browse_PO.getProductTitle().should('contain', title)
})

Then('I should see the product price {string}', (price: string) => {
	browse_PO.getProductPrice().should('contain', price)
})
