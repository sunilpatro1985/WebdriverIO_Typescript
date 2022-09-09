
describe('Accessibility Selector', () => {
    xit('verify Accessibility Selector...', async () => {
        browser.url("https://www.saucedemo.com/")
        await (await $("aria/Username")).setValue("standard_user")
        await (await $("aria/Password")).setValue("secret_sauce")
        await (await $("[id='login-button']")).click()

        await browser.pause(3000)
    });
    it('verify Accessibility Selector...', async () => {
        browser.url("https://www.google.com/")
        await (await $("aria/Search")).setValue("qavbox")
        await (await $("aria/Google Search")).click()

        await browser.pause(3000)
    });
});

//https://www.w3.org/WAI/fundamentals/accessibility-intro/

