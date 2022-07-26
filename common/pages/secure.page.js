import Page from './page';

/**
 * sub page containing specific selectors and methods for the secure page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
