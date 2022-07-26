Feature: Deleting a student

  Scenario: Delete a student
    When I send a DELETE request with an existing <id>
    Then I should see a <statusCode> response code
    And The student should not exist

    Examples: 
      | id             | statusCode |
      | { "id" : "1" } |        200 |
      | { "id" : "0" } |        404 |
      | "test"         |        400 |