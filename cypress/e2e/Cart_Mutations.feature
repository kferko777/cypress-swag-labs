Feature: Cart Mutations — Update and Remove Items

  Background:
    Given I am logged in

  Scenario: Update the cart by removing an item
    When I add the product "Sauce Labs Backpack" to the cart
    And I open the cart
    Then I should see the product name "Sauce Labs Backpack"
    And I should see the quantity "1"
    When I remove the product "Sauce Labs Backpack" from the cart
    Then the cart should be empty
