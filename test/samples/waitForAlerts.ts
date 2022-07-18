//import * as EC from 'wdio-wait-for';
import {alertIsPresent} from 'wdio-wait-for';

describe('different types of alerts', () => {
    it('verify alert...', async () => {
        browser.url("https://qavbox.github.io/demo/alerts/")
        await browser.pause(3000)
        await (await $('#delayalert')).click()
        
        /*await browser.waitUntil(
            async () => (await browser.getAlertText()) !== null,
            {
                timeout: 7000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );*/

        await browser.waitUntil(alertIsPresent(), { timeout: 5500, timeoutMsg: 'Failed, after waiting for the alert to be present' })

        console.log(await browser.getAlertText())
        await browser.acceptAlert()

        await browser.pause(4000)
    });
});