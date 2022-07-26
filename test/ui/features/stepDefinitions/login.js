import { Given, When, Then } from '@wdio/cucumber-framework';
import LandingPage from '../../../../common/pages/landing.page';
import LoginPage from '../../../../common/pages/login.page';
import SecurePage from '../../../../common/pages/secure.page';

Given(/^I am on the (\w+) page$/, async (page) => {
    await LandingPage.open();
    await LandingPage.formAuthenticationLink.click();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

