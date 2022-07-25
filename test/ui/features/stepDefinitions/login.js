const assert = require('assert');
const loginPage = require('common/pages/loginPage.js')

module.exports = async () => {
    this.Given("I access the login page", async() => {
        helpers.loadPage(loginPage.url)
    })
    this.When("I try to login with valid credentials", async() => {
        loginPage.login(shared.testData.username, shared.testData.password)
    })
}