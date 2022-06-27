
import { forEachChild } from "typescript";
import locators from "./locators";
import locatorsPage from './locators';


describe('Identify elements', () => {
    it('should login with valid credentials', async () => {
        browser.url("https://qavbox.github.io/demo/")
        await browser.pause(2000)
        await browser.$("=SignUp Form").click() //contaning text as "SignUp Form"
        //await browser.$("*=SignUp").click() //contaning partial text as "SignUp"
        //await browser.$("a=Links").click() //contaning link tag text as "Links"
        //await browser.$("a*=Lin").click() //contaning link tag partial text as "Links"

        let text = await browser.$("#lblname=Full Name").getText()
        console.log(text)

        await browser.pause(2000)
        await (await browser.$("#username")).setValue("qavbox")
        await (await browser.$("#username")).getValue()

        //await (await browser.$('[role=b]')).getText() //not working
        //https://www.w3.org/TR/html-aria/#docconformance

        console.log(await (await browser.$$('[role=link]')).length)
        //shows 6, 4 a with href and 2 link with href

        console.log(await (await browser.$$('a')).length)
        //shows 6, 4 a with href and 2 link with href

        //console.log(await (await locatorsPage.getLengths).getAttribute("id"))
        
        await (await locatorsPage.getTexboxByIndex(2)).setValue('qwerty@gmail.com')
        console.log((await locatorsPage.getTexboxByIndex(2)).getValue())

        console.log(await (await $('<b>')).getText())
        await browser.pause(2000)

    });

    it('should behave...', async () => {
        
    });

});

//$("[name='email']")   class = .   id = #