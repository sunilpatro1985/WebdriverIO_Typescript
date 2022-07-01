import locators from "./locators"

describe('Name of the group', () => {
    it('should behave...', async () => {
        browser.url("https://qavbox.github.io/demo/")
        browser.pause(2000)
        await $("=SignUp Form").click() //any element that has text SignUp Form
        //await $("*=SignUp").click() //any element that contans text SignUp
        //await browser.pause(2000)
        //browser.pause(2000)
        //console.log(await $$('[role=link]').length)
        //console.log(await $$('<a>').length)
        
        //await $("h3").getText() //using tagname
        //await $("<h3>").getText() //using tagname

        //console.log(await (await $('label=Full Name')).getAttribute("id"))
        //console.log(await (await $('label*=Full')).getAttribute("id"))

        //await $('#username') //using id
        //await $('.EnterText') //using classname
        await (await locators.getTaxtBoxIndex(1)).setValue("qavbox")

        //=================
        //await (await $("=WebTable")).click()
        //browser.pause(2000)
        //await (await $('table[id=\'table01\'] tbody tr:nth-child(1) td:nth-child(2)')).getText() //using css seelctor
        //await (await (await $('table[id=\'table01\']')).$('tr:nth-child(1) td:nth-child(2)')).getText() //using css seelctor
        //await (await locators.getTableData(1,2)).getText()
        //await $('//table[@id=\'table01\']') //using xpath
        await browser.pause(2000)

      
    });
    
});