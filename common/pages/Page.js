/**
 * base page from which all other objects are born
 */
export default class Page {
    constructor() {
        this.title = 'My Page';
    }

    async open (path) {
        await browser.url(path);
    }
}