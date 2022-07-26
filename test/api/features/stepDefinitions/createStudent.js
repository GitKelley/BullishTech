const { expect } = require('chai');
const { When, Then } = require('@cucumber/cucumber');

const ConfigHelper = require('../../../../common/configure');
const StudentManagement = require('../../../../common/apis/studentManagement');

let configHelper = new ConfigHelper();
const config = configHelper.accessConfig();

let studentMgmnt = new StudentManagement(config);

let id;

When(/^I try to create a (.*)$/, async (student) => {
    const response = await studentMgmnt.createStudent(config, student);
    id = response.text.replace( /^\D+/g, '');
});

Then('A student is successfully created', async () => {
    const getResponse = await studentMgmnt.getStudent(config, id);
    expect(getResponse.statusCode).to.equal(200);
});

When(/^I create a new student with the existing (.*) data$/, async (student) => {
    this.existingResponse = await studentMgmnt.createStudent(config, student);
});

Then(/^I should see a (.*?) status code$/, async (statusCode) => {
    expect(this.existingResponse.statusCode).to.equal(parseInt(statusCode));
});

Then(/^I should see a message saying (.*?)$/, async (message) => {
    expect(this.existingResponse.text).to.equal(message);
});

When(/^I attempt to create a student with an invalid (.*)$/, async (student) => {
    this.invalidStudentResponse = await studentMgmnt.createStudent(config, student);
});

Then(/^The applications responds with a (.*?) status code$/, async (statusCode) => {
    expect(this.invalidStudentResponse.statusCode).to.equal(parseInt(statusCode));
});

Then(/^The (.*?) should mention invalid data$/, async (message) => {
    expect(this.invalidStudentResponse.text).to.equal(message);
});

When(/^A student with missing (.*?) is sent$/, async (student) => {
    this.invalidStudentResponse = await studentMgmnt.createStudent(config, student);
});

Then(/^The response status code is (.*?)$/, async (statusCode) => {
    expect(this.invalidStudentResponse.statusCode).to.equal(parseInt(statusCode));
});

Then(/^The (.*?) should mention missing data$/, async (message) => {
    expect(this.invalidStudentResponse.text).to.equal(message);
});