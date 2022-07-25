Feature: Create student
    In order to create a student
    As a test engineer
    I need to ensure all /POST related scenarios work correctly

  Scenario: Create a student with valid data
    When I try to create a student
    Then A student is successfully created

  Scenario: Create a student that already exists
    Given a student that already exists
    When I try to create a new student with the existing student's data
    Then The application alerts me the student already exists

  Scenario: Create a student with an invalid first name
    Given a student with an invalid first name
    When I try to create a student with the invalid first name
    Then the student with the invalid first name is not created
    And the error message mentions first name being invalid

  Scenario: Create a student with missing last name
    Given a studen without a first name
    When I try to create a student with the missing first name
    Then the student with the missing first name is not created
    And the error message mentions the first name missing