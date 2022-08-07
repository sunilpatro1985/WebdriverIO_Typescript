//import * as EC from 'wdio-wait-for';
import {alertIsPresent} from 'wdio-wait-for';

describe('different types of waitUntil commands', () => {

    xit('verify waitUntil a text appears', async () => {
        browser.url("https://qavbox.github.io/demo/delay/")
        await browser.pause(1000)
        //console.log(browser.capabilities)
        await (await $("[name='commit1']")).click()
        let el = await $("#delay")
        await el.waitUntil(async function(){
            return (await this.getText()) != ''},
            {
                timeout:6000,
                timeoutMsg: "text didn't appear for delay element"
            })

        expect(await el.getText()).toContain("after 5 sec")

    });
    xit('verify waitUntil no. of elements appear', async () => {
        browser.url("https://qavbox.github.io/demo/")
        await browser.pause(1000)
        //console.log(browser.capabilities)
        await (await $("=SignUp Form")).click()
  
        await browser.waitUntil(async function(){
            return (await $$("input[type='text']")).length > 3 },
            {
                timeout:3000,
                timeoutMsg: "textboxes didn't appear on screen"
            })

        expect(await $$("input[type='text']").length).toBeGreaterThan(3)
        await browser.pause(3000)
    });
    it('verify waitUntil title changes', async () => {
        browser.url("https://qavbox.github.io/demo/")
        await browser.pause(1000)
        //console.log(browser.capabilities)
        await (await $("=SignUp Form")).click()
  
        await browser.waitUntil(async function(){ 
            return (await (await browser.getTitle()).includes("Registration"))},//when title changes to "Registration Form"
            {
                timeout:3000,
                timeoutMsg: "textboxes didn't appear on screen"
            })

        expect(await browser.getTitle()).toContain("Form")
        await browser.pause(3000)
    });
    
    
    
});