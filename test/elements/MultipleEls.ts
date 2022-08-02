import locators from "./locators"

describe('Name of the group', () => {
    it('should behave...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)

        //console.log(await $$("input[type='text']").length)
        
        /*await $$("input[type='text']").forEach(el =>{
            console.log(el.getAttribute("id"))
        })
        */
        //let textItems = await $$("input[type='text']")

        /*let items = textItems.filter(el => {
            console.log(el.getAttribute("id"))
        })*/

        //console.log(await textItems[2].getAttribute("id"))

        let options = await $$("#tools option")

        /*await options.filter(el => {
            console.log(el.getText())
        })*/

        console.log(options[1].getText())

        //await $$("a") //alll the links from current web page

        await browser.pause(2000)

    });
    

    /*it('should behave...', async () => {
        browser.url("file:///Users/skpatro/Desktop/textarea.html")
        browser.pause(2000)
        await $("#q2").getText()
        await (await $("#q2")).setValue("qav")
        await $("#q2").getValue()
        await browser.pause(2000)
    });*/
});