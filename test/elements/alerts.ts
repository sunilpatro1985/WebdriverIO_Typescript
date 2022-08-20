

describe('different types of alerts', () => {
    it('verify alert...', async () => {
        browser.url("https://qavbox.github.io/demo/alerts/")
        await browser.pause(3000)
        await (await $('[name=\'commit\']')).click()
        console.log(await browser.getAlertText())
        //expect
        await browser.acceptAlert()

        await browser.pause(3000)
        await (await $('[id=\'prompt\']')).click()
        console.log(await browser.getAlertText())
        //expect
        await browser.sendAlertText("qavbox")
        await browser.acceptAlert()
        expect(await (await $('#Parademo')).getText()).toContain("qavbox")
        
        await browser.pause(4000)
        await (await $('[id=\'confirm\']')).click()
        console.log(await browser.getAlertText())
        //expect
        await browser.dismissAlert()
        expect(await (await $('#Parademo')).getText()).toContain("Cancel")

        await browser.pause(4000)
    });
});