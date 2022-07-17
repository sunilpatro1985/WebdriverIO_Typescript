

describe('position and size', () => {
    it('verify position and size...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(3000)

        console.log(await browser.getWindowRect())

        let position = await browser.getWindowRect()

        console.log(position.x + " | " + position.y)

        browser.setWindowRect(2000, 210, 800, 600)

        /*await $("#username").setValue("qavbox")
        
        console.log("getvalue - " + await (await $("#username")).getValue())
        //getAttribute("value")
   
        expect(await $("#username").getValue()).toEqual("qavbox")

        await $("#username").clearValue()

        expect(await $("#username").getValue()).toEqual("")*/

        await browser.pause(6000)

        await browser.setWindowSize(1000, 800)

        await browser.pause(4000)
    });

    //https://automatetheboringstuff.com/chapter18/
    //https://qavalidation.com/
    //https://webdriver.io/docs/api/browser/setWindowSize
    //https://webdriver.io/docs/api/webdriver
});