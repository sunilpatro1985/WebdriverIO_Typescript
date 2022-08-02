//import * as EC from 'wdio-wait-for';
import {alertIsPresent} from 'wdio-wait-for';

describe('different types of waitFor commands', () => {
    xit('verify waitforexist', async () => {
        browser.url("https://qavbox.github.io/demo/delay/")
        await browser.pause(1000)
        //console.log(browser.capabilities)
        await (await $("#loaderStart")).click()
        await $("#delay").waitForExist({timeout:6000})
        expect(await (await $("#delay")).getText()).toContain("appeared after 5 sec")

    });
    it('verify waitfor Not displayed', async () => {
        browser.url("https://qavbox.github.io/demo/delay/")
        await browser.pause(1000)
        //console.log(browser.capabilities)
        await (await $("#loaderStart")).click()
        await (await $("#loader b")).waitForDisplayed({timeout:6000, reverse:true})
        expect(await (await $("#loaderdelay")).getText()).toContain("after 5 sec loading")

    });
    
    
    
});