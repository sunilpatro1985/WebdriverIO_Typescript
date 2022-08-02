import locators from "./locators"

export class Select{
    async getSelectedOption(options){
        let selectedText = ""

        for(let option of options){
            if(await option.isSelected()){
                selectedText = await option.getText()
                break
            }
        }
        return selectedText
    }

    async getSelectedValue(options){
        let selectedText = ""

        for(let option of options){
            if(await option.isSelected()){
                selectedText = await option.getValue()
                break
            }
        }
        return selectedText
    }
}

describe('Text vs value', () => {
    it('verify textBox...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)
        let select = await $("select[name='sgender']")
        
        let options = await select.$$("option")
  
/*      
while(!lastText === options.getlasttext){
    options = await select.$$("option")
    lastText:String 

    totalOptions = append options
}*/

        console.log("items count - " + await options.length)
        expect(options.length).toBe(4)

        await select.selectByIndex(1) //Male
        //expect(await (await $("option[value=\'male\']")).isSelected()).toBe(true)
        expect(await new Select().getSelectedOption(options)).toEqual("Male")

        browser.pause(1000)
        await select.selectByVisibleText("Select:") //select the 1st option
        expect(await (await $("option[value=\'select\']")).isSelected()).toBe(true)

        await select.selectByAttribute("value", "na")

        await browser.pause(2000)
    });
});