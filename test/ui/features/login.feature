Feature: Login
    In order to login to the application
    As a test engineer
    I need to submit login information

  Scenario: Login with valid information
    Given I access the login page
    When I try to login with valid credentials
    Then I am successfully logged in

  Scenario: Login with invalid information
    Given I access the login page
    When I try to login with invalid credentials
    Then I am not able to login