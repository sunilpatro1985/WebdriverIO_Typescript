import locators from "./locators"

describe('shadowDOM', () => {
    xit('verify shadowDom elements...', async () => {
        browser.url("https://qavbox.github.io/demo/shadowDOM/")
        await browser.pause(2000)
        await (await $('my-open-component')).shadow$("input").setValue("qavbox")
        
        //let el = await browser.executeScript("return document.querySelector('my-open-component').shadowRoot.querySelector('input')", [])
        //await $(el).setValue("qavalidation")

        //let el = await browser.executeScript("return document.querySelector('my-close-component')._root.querySelector('input')",[])

        let el = await browser.executeScript("return document.querySelector('my-open-component').shadowRoot", [])
        await (await $(el)).$("input").setValue("qavalidation")
        await browser.pause(2000)
    });

    it('verify nested shadowDom elements...', async () => {
        browser.url("https://shop.polymer-project.org/")
        await browser.pause(2000)
        let text = await (await (await (await $('[page=home]')).shadow$(".iron-selected")).shadow$("h2")).getText()
        console.log("nested shadow text " + text)
        await browser.pause(2000)
    });

});



