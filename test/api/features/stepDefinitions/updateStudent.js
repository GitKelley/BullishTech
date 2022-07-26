const { expect } = require('chai');
const { When, Then } = require('@cucumber/cucumber');

const ConfigHelper = require('../../../../common/configure');
const StudentManagement = require('../../../../common/apis/studentManagement');

let configHelper = new ConfigHelper();
const config = configHelper.accessConfig();

let studentMgmnt = new StudentManagement(config);

When(/^I send an UPDATE request with new (.*?) data$/, async (student) => {
    this.putResponse = await studentMgmnt.updateStudent(config, student);
    this.id = student.id;
});

Then(/^The (.*?) data should be reflected in the app$/, async (student) => {
    const getResponse = await studentMgmnt.getStudent(config, this.id);
    expect(getResponse.body.studentClass).to.equal(student.studentClass);
});