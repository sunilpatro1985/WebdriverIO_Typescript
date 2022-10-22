describe('Form filling', () => {
    it('test form filling', async () => {
        browser.url(`https://qavbox.github.io/demo/signup/`)
        await browser.pause(3000)

        await (await $('#username')).setValue('qavbox')
        await (await $('#email')).setValue('qavbox@gmail.com')
        await (await $('#tel')).setValue('12345')
        await browser.pause(2000)
    });
});