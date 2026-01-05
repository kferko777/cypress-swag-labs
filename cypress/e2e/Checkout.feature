 Feature: Path: Checkout Process
  # @not-applicable Scenario: Apply a coupon or discount
  # Swag Labs does not support coupons or promo codes.
  # No UI element or backend logic exists for this feature

  Background:
    Given I am logged in

  Scenario: Complete checkout and verify order summary
    When I add the product "Sauce Labs Backpack" to the cart
    And I open the cart
    And I click on checkout
    And I enter checkout information "QA" "Tester" "12345"
    And I continue to the summary page
    Then I should see the item total
    And I should see the tax amount
    And I should see the total amount
    When I finish the checkout
    Then I should see the order confirmation page
    When I go back to the products page
    Then I should be redirected to the inventory page

