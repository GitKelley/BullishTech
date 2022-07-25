const { expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');

const ConfigHelper = require('../../../../common/configure')
const StudentManagement = require('../../../../common/apis/studentManagement')
const studentData = require('../../../../data/students/studentData');

let configHelper = new ConfigHelper();
const config = configHelper.accessConfig()

let studentMgmnt = new StudentManagement(config)

let id;

When('I try to create a student', async () => {
    const response = await studentMgmnt.createStudent(config, studentData.studentOne)
    id = response.text.replace( /^\D+/g, '')
});

Then('A student is successfully created', async () => {
    this.getResponse = await studentMgmnt.getStudent(config, parseInt(id))
    expect(this.getResponse.body[0]).to.deep.equal(studentData.studentOne)
});

Given('a student that already exists', async () => {
    dupeStudent = this.getResponse.body[0]
});

// This will fail with a 500 instead of a 400
When('I try to create a new student with the existing student\'s data', async () => {
    this.response = await studentMgmnt.createStudent(config, studentData.studentOne)
    expect(this.response.statusCode).to.equal(500)
});

Then('The application alerts me the student already exists', async () => {
    expect(this.response.text).to.equal(`Exception occurred while adding new student: Student already exists with student id: ${dupeStudent.id}`)
});

// API doesn't check if lastName is missing, only firstName for some reason
Given('a student with an invalid first name', async () => {
    this.studentOneInvalidFName = {...studentData.studentOne}
    this.studentOneInvalidFName.firstName = 999

}); When('I try to create a student with the invalid first name', async () => {
    this.badResponse = await studentMgmnt.createStudent(config, this.studentOneInvalidFName)
});

// This also returns the incorrect status code
Then('the student with the invalid first name is not created', async () => {
    expect(this.badResponse.statusCode).to.equal(500)
});

// This returns a duplicate student error message rather than 
Then('the error message mentions first name being invalid', async () => {
    expect(this.badResponse.text).to.equal('Exception occurred while adding new student: Required fields are missing: [First Name]')
});

// API doesn't check if lastName is missing, only firstName for some reason
Given('a studen without a first name', async () => {
    this.studentOneMissingFName = {...studentData.studentOne}
    this.studentOneMissingFName.firstName = ''
});


When('I try to create a student with the missing first name', async () => {
    this.badResponse = await studentMgmnt.createStudent(config, this.studentOneMissingFName)
});

// also returns 500 instead of 400
Then('the student with the missing first name is not created', async () => {
    expect(this.badResponse.statusCode).to.equal(500)
});


Then('the error message mentions the first name missing', async () => {
    expect(this.badResponse.text).to.equal('Exception occurred while adding new student: Required fields are missing: [First Name]')
});

