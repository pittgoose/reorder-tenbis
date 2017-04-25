Feature: Order my lunch

  Scenario: Reorder my last meal
    Given I go to the 10bis website
    When I log in with the stored credentials
    And I reorder my last meal
    Then I should see my order and be satisfied

