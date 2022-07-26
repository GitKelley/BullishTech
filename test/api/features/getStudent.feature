Feature: Getting a student

  Scenario: Get a student
    When I send a GET request with a <id> in the url
    Then The application should return a <statusCode> status code
    And The application should return the <student>

    Examples: 
      | id     | statusCode | student                                                                                                     |
      |      1 |        200 | {"id": 1,"firstName": "Robert","lastName": "Cullinan","studentClass": "Math 101","nationality": "American"} |
      | 999999 |        404 | {""}                                                                                                        |
