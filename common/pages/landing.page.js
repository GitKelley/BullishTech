import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get formAuthenticationLink () {
        return $('=Form Authentication');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open(browser.options.baseUrl);
    }
}

export default new LandingPage();