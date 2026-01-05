Feature: Add to Cart and Verify Details

  Background:
    Given I am logged in

  Scenario: Add product to cart and verify details
    When I add the product "Sauce Labs Backpack" to the cart
    And I open the cart
    Then I should see the product name "Sauce Labs Backpack"
    And I should see the cart product price "$29.99"
    And I should see the quantity "1"
