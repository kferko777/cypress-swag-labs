Feature: Cart Mutations – Remove Items

  Background:
    Given I am logged in
    And I add the product "Sauce Labs Backpack" to the cart
    And I open the cart
    And I should see the product name "Sauce Labs Backpack"
    And I should see the quantity "1"

  Scenario: Remove an item from the cart
    When I remove the product "Sauce Labs Backpack" from the cart
    Then the cart should be empty

