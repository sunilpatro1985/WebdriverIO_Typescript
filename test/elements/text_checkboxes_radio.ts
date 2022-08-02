import locators from "./locators"

describe('Text vs value', () => {
    xit('verify textBox...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)
        await $("#username").setValue("qavbox")
        
        console.log("getvalue - " + await (await $("#username")).getValue())
        //getAttribute("value")
   
        expect(await $("#username").getValue()).toEqual("qavbox")

        await $("#username").clearValue()

        expect(await $("#username").getValue()).toEqual("")

        await browser.pause(2000)
    });

    xit('verify radioButton...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)
        let exps = await $$("input[name='experience']")
        expect(exps.length).toEqual(8)

        exps.filter(async el => {
            if(await el.getValue() === "three"){
                await el.click()
                expect(await el.isSelected()).toBe(true)
            }
        });

        await browser.pause(2000)
        await (await $("input[name='experience'][value='five']")).click()
        expect(await $("input[name='experience'][value='five']").isSelected()).toBe(true)
        await browser.pause(2000)

    });

    it('verify checkBoxes...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)
        let exps = await $$("input[name='language']")
        expect(exps.length).toEqual(7)

        exps.filter(async el => {
            if((await el.getValue()).includes("testing")){
                await el.click()
                expect(await el.isSelected()).toBe(true)
                await browser.pause(1000)
            }
        });

        await browser.pause(2000)
        await (await $("input[name='language'][value='testng']")).click()
        expect(await $("input[name='language'][value='testng']").isSelected()).toBe(true)

    
        await browser.pause(2000)

        await (await $("input[name='language'][value='html']")).click()
        expect(await $("input[name='language'][value='html']").isSelected()).toBe(true)
        await browser.pause(4000)

    
    });
});