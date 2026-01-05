Feature: Sign in

  Background: Navigate to https://www.saucedemo.com/
    Given I navigate to Swag Labs
    Given I login with valid credentials
    And I click on Sign in button
    Then I should be able to login successfully to the Website
    And I should see the inventory page
    And I refresh and should still be logged in

  Scenario: Logout scenario
    When I log out
    Then I should be redirected to login page