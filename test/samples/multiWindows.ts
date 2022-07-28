import locators from "./locators"

describe('Browser windows or popups', () => {
    it('verify Browser windows...', async () => {
        browser.url("https://qavbox.github.io/demo/links/")
        await browser.pause(2000)
        let parentWindow = await browser.getWindowHandle()
        
        /*await browser.newWindow("https://qavalidation.com")
        console.log(await browser.getTitle())
        //to-do
  
        //await browser.switchToWindow(parentWindow)
        await browser.switchWindow("Browser") //matcher of title, url or windowname 
        //to-do on the parent window
        console.log("Switching back to parent window - "+await browser.getTitle())
        */


        await (await $("[name=multiple]")).click()
        //await browser.switchWindow("QAVBOX Demo")
        //expect(await $$("a").length).toBe(12)

        let windows = await browser.getWindowHandles()
        
        /*for(let window of windows){
            if(parentWindow != window){
                await browser.switchToWindow(window)
                if(await (await browser.getTitle()).includes("QAVBOX")){
                    expect(await $$("a").length).toBe(12)
                }
            }
        }*/

        /*for(let window of windows){
            if(parentWindow != window){
                await browser.switchToWindow(window)
                expect(await browser.getTitle()).not.toContain("Browser Windows")
            }
        }*/

        for(let window of windows){
            if(parentWindow != window){
                await browser.switchToWindow(window)
                console.log(await browser.getTitle())
                await browser.closeWindow()
                //console.log("after closing current window - " + await browser.getTitle())
            }
        }


        await browser.switchToWindow(parentWindow)
        console.log(await browser.getTitle())
        


        await browser.pause(2000)
    });

   
});