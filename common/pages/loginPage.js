class LoginPage {

    const url: "http://the-internet.herokuapp.com/login",

    elements: {
        usernameField: by.id('username'),
        passwordField: by.id('password'),
        loginButton: by.css('#login > buttonLogin')
    },

    login: function (username, password) {
        driver.findElement(usernameField).sendKeys(username);
        driver.findElement(passwordField).sendKeys(password);
        driver.findElement(loginButton).click();
    }
}