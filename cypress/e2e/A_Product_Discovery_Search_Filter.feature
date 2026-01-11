Feature: Path A: Product Discovery — Search and Filter

  Background:
    #Given I am logged in
    And I am on the inventory page

  Scenario: Filter by Name A to Z
    When I apply filter "Name (A to Z)"
    Then products should be sorted alphabetically from A to Z

  Scenario: Filter by Name Z to A
    When I apply filter "Name (Z to A)"
    Then products should be sorted alphabetically from Z to A

  Scenario: Filter by Price Low to High
    When I apply filter "Price (low to high)"
    Then products should be sorted by ascending price

  Scenario: Filter by Price High to Low
    When I apply filter "Price (high to low)"
    Then products should be sorted by descending price

