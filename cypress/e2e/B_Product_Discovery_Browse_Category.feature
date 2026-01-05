Feature: Path B: Product Discovery — Browse and View Details

  Background:
    Given I am logged in

  Scenario: Browse product via featured products
    When I click on "Sauce Labs Backpack"
    Then I should be taken to the product details page
    And I should see the product title "Sauce Labs Backpack"
    And I should see the product price "$29.99"
