Feature: Create student
    In order to create a student
    As a test engineer
    I need to ensure all /POST related scenarios work correctly

  Scenario: Create a student with valid data
    When I send a POST request to "localhost:9080/studentmgmt/addStudent"
    Then I get a 201 response code, and a student is created

  Scenario: Create a student without authorization
    When I send a POST request without auth to "localhost:9080/studentmgmt/addStudent"
    Then I get a 401 response code

  Scenario: Create a student that already exists
    When I send a POST request with existing student data to "localhost:9080/studentmgmt/addStudent"
    Then I get a 400 response code, and a student is not created because it already exists

  Scenario: Create a student with invalid id
    When I send a POST request with a missing id to "localhost:9080/studentmgmt/addStudent"
    Then I get a 400 response code indicating the id is invalid

  Scenario: Create a student with missing last name
    When I send a POST request with a missing last name to "localhost:9080/studentmgmt/addStudent"
    Then I get a 400 response code indicating the last name is missing