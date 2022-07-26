const { expect } = require('chai');
const { When, Then } = require('@cucumber/cucumber');

const ConfigHelper = require('../../../../common/configure')
const StudentManagement = require('../../../../common/apis/studentManagement')

let configHelper = new ConfigHelper();
const config = configHelper.accessConfig()

let studentMgmnt = new StudentManagement(config)

When(/^I send a DELETE request with an existing (.*?)$/, async (id) => {
    this.id = id;
    this.delResponse = await studentMgmnt.deleteStudent(config, id)
});

Then(/^I should see a (.*?) response code$/, async (statusCode) => {
    expect(this.delResponse.statusCode).to.equal(parseInt(statusCode))
});

Then('The student should not exist', async () => {
    const getResponse = await studentMgmnt.getStudent(config, this.id)
    expect(getResponse.statusCode).to.equal(404)
});