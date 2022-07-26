Feature: Create student
    In order to create a student
    As a test engineer
    I need to ensure all /POST related scenarios work correctly

  Scenario: Create a student with valid data
    When I try to create a <student>
    Then A student is successfully created

    Examples: 
      | student                                                                                                     |
      | {"id": 1,"firstName": "Robert","lastName": "Cullinan","studentClass": "Math 101","nationality": "American"} |

  Scenario: Create a student that already exists
    When I create a new student with the existing <student> data
    Then I should see a <statusCode> status code
    And I should see a message saying <message>

    Examples: 
      | student                                                                                                     | statusCode | message                  |
      | {"id": 1,"firstName": "Robert","lastName": "Cullinan","studentClass": "Math 101","nationality": "American"} |        400 | 'Student already exists' |

  Scenario: Create a student with invalid data
    When I attempt to create a student with an invalid <field>
    Then The applications responds with a <statusCode> status code
    And The <message> should mention invalid data

    Examples: 
      | field                                                                                                            | statusCode | message     |
      | {"id": 1,"firstName": 999,"lastName": "Cullinan","studentClass": "Math 101","nationality": "American"}           |        400 | Bad request |
      | {"id": 1,"firstName": "Robert","lastName": 999,"studentClass": "Math 101","nationality": "American"}             |        400 | Bad request |
      | {"id": "test","firstName": "Robert","lastName": "Cullinan","studentClass": "Math 101","nationality": "American"} |        400 | Bad request |
      | {"id": 1,"firstName": "Robert","lastName": "Cullinan","studentClass": "Math 101","nationality": 999}             |        400 | Bad request |
      | {"id": 1,"firstName": "Robert","lastName": "Cullinan","studentClass": 999,"nationality": "American"}             |        400 | Bad request |

  Scenario: Create a student with missing data
    When A student with missing <field> is sent
    Then The response status code is <statusCode>
    And The <message> should mention missing data

    Examples: 
      | field                                                                                                        | statusCode | message                                   |
      | {"id": 1,"firstName": "","lastName": "Cullinan","studentClass": "Math 101","nationality": "American"}        |        400 | Required fields are missing: [First Name] |
      | {"id": 1,"firstName": "Robert,"lastName": "","studentClass": "Math 101","nationality": "American"}           |        400 | Required fields are missing: [Last Name]  |
      | {"id": "","firstName": "Robert","lastName": "Cullinan","studentClass": "Math 101","nationality": "American"} |        400 | Required fields are missing: [id]         |
      | {"id": 1,"firstName": "Robert","lastName": "Cullinan","studentClass": "Math 101","nationality": ""}          |        400 | Required fields are missing: [id]         |
      | {"id": 1,"firstName": "Robert","lastName": "Cullinan","studentClass": "","nationality": "American"}          |        400 | Required fields are missing: [id]         |
