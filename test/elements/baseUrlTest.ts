import data from '../util/appData'

describe('baseUrl based on env', () => {
    it('test diff urls based on env', async () => {
        browser.url(`/`)
        await browser.pause(3000)
        console.log(new data().getCredentials())
    });
});