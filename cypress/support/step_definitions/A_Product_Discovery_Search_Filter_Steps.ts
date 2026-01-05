import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { A_Product_Discovery_Search_Filter_PO } from '../page_objects/A_Product_Discovery_Search_Filter_PO';

const product_PO = new A_Product_Discovery_Search_Filter_PO();

When('I apply filter {string}', (option: string) => {
  product_PO.applyFilter(option);
});

Then('products should be sorted alphabetically from A to Z', () => {
  product_PO.getProductNames().then($names => {
    const texts = $names.toArray().map(el => el.textContent!.trim());
    const sorted = [...texts].sort();
    expect(texts).to.deep.equal(sorted);
  });
});

Then('products should be sorted alphabetically from Z to A', () => {
  product_PO.getProductNames().then($names => {
    const texts = $names.toArray().map(el => el.textContent!.trim());
    const sorted = [...texts].sort().reverse();
    expect(texts).to.deep.equal(sorted);
  });
});

Then('products should be sorted by ascending price', () => {
  product_PO.getProductPrices().then($prices => {
    const values = $prices.toArray().map(el => parseFloat(el.textContent!.replace('$', '')));
    const sorted = [...values].sort((a, b) => a - b);
    expect(values).to.deep.equal(sorted);
  });
});

Then('products should be sorted by descending price', () => {
  product_PO.getProductPrices().then($prices => {
    const values = $prices.toArray().map(el => parseFloat(el.textContent!.replace('$', '')));
    const sorted = [...values].sort((a, b) => b - a);
    expect(values).to.deep.equal(sorted);
  });
});
