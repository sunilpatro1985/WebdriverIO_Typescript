//import * as EC from 'wdio-wait-for';
import {alertIsPresent} from 'wdio-wait-for';

describe('different types of alerts', () => {
    xit('verify alert...', async () => {
        browser.url("https://qavbox.github.io/demo/delay/")
        await browser.pause(5000)
        console.log(browser.capabilities)
        await $("").waitForClickable()

    });
    xit('verify alert...', async () => {
        browser.url("https://qavbox.github.io/demo/delay/")
        await browser.pause(4000)
        console.log(browser.capabilities)

    });
    xit('verify alert...', async () => {
        browser.url("https://qavbox.github.io/demo/delay/")
        await browser.pause(7000)
        console.log(browser.capabilities)

    });
    it('should detect when element is enabled', async () => {
        browser.url("file:///Users/skpatro/Desktop/delay.html")
        await (await $('#elem')).waitForDisplayed(
            { timeout: 3500, timeoutMsg: "element not visible after 3.5 sec", interval:2000 });

            //textbox to be disabled after 3.5 sec
            await (await $('#username')).waitForEnabled(
                { timeout: 3500, reverse: true, timeoutMsg: "element not visible after 3.5 sec", interval:2000 });
    
    });
    
});