Feature: Employer services form

  @demo
  Scenario: Employer services form
    Given the User navigated to Employer Services Form page
    When the user entered the details and clicked on next
    And the user answer the questions and clicked on next
    And the user validated the full name and clicked on submit
    Then the user is redirected to Employer Services Page
