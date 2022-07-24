const { Given, When, Then } = require('cucumber');
const chai = require('chai')
const axios = reqiore('axios')
const studentOne = require('data/students/studentData.json');

const header = "{'Content-Type': 'application/json'}"
const base_url = "http://localhost:9080"
const endpoint = "/studentmgmt/addStudent"

When('I send a POST request to {string}', function (string) {
    const response = await axios.post(base_url + endpoint, data,
        {
            headers: header,
        }
    )
    return 'pending';
});


Then('I get a {int} response code, and a student is created', function (int) {
    chai.expect(response)
});

When('I send a POST request without auth to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I get a {int} response code', function (int) {
    // Then('I get a {float} response code', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('I send a POST request with existing student data to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I get a {int} response code, and a student is not created because it already exists', function (int) {
    // Then('I get a {float} response code, and a student is not created because it already exists', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('I send a POST request with a missing id to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I get a {int} response code indicating the id is invalid', function (int) {
    // Then('I get a {float} response code indicating the id is invalid', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I send a POST request with a missing last name to {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I get a {int} response code indicating the last name is missing', function (int) {
    // Then('I get a {float} response code indicating the last name is missing', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});