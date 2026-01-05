Feature: Negative Login

  Background:
    Given I navigate to Swag Labs

  Scenario: Login fails with invalid credentials
    When I enter invalid credentials "wrong_user" "wrong_pass"
    And I click on Sign in button
    Then I should see the login error "Epic sadface: Username and password do not match any user in this service"
