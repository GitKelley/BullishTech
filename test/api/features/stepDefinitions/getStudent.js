const { expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');

const ConfigHelper = require('../../../../common/configure')
const StudentManagement = require('../../../../common/apis/studentManagement')
const studentData = require('../../../../data/students/studentData');

let configHelper = new ConfigHelper();
const config = configHelper.accessConfig()

let studentMgmnt = new StudentManagement(config)

let id;

When(/^I send a GET request with a (.*?) in the url$/, async (id) => {
    this.getResponse = await studentMgmnt.getStudent(config, parseInt(id))
});

Then(/^The application should return a (.*?) status code$/, async (statusCode) => {
    expect(this.getResponse.statusCode).to.equal(parseInt(statusCode))
});

Then(/^The application should return the (.*?)$/, async (student) => {
    expect(this.getResponse.body).to.deep.equal(student)
});