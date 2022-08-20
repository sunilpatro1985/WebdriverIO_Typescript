import locators from "./locators"

describe('Text vs value', () => {
    it('should behave...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)
        await $("#username").setValue("qavbox")
        console.log("getText" + await (await $("#username")).getText())

        console.log("getvalue" + await (await $("#username")).getValue())
        //getAttribute("value")
   
        console.log("getText label - " + await (await $("#lblname")).getText())

        

        await browser.pause(2000)

    });
    
});