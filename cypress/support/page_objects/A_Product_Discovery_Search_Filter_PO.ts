export class A_Product_Discovery_Search_Filter_PO {

	applyFilter(option: string) {
		cy.get('.product_sort_container').select(option)
	}

	getProductNames() {
		return cy.get('.inventory_item_name')
	}

	getProductPrices() {
		return cy.get('.inventory_item_price')
	}
}
