Feature: Updating a student

  Scenario: Update a student's data
    When I send an UPDATE request with new <student> data
    Then The <updated> data should be reflected in the app

    Examples: 
      | student                                                                                                          | updated                                                                                                          |
      | {"id": 1,"firstName": "NewFName","lastName": "NewLName","studentClass": "English 101","nationality": "Canadian"} | {"id": 1,"firstName": "NewFName","lastName": "NewLName","studentClass": "English 101","nationality": "Canadian"} |