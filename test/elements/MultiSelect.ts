import locators from "./locators"

export class Select{
    async getSelectedOptions(options){
        let selectedText = []

        for(let option of options){
            if(await option.isSelected()){
                selectedText.push(await option.getText())
                //break
            }
        }
        return selectedText
    }

    async getSelectedValues(options){
        let selectedText = []

        for(let option of options){
            if(await option.isSelected()){
                selectedText.push(await option.getValue())
                //break
            }
        }
        return selectedText
    }
}

describe('Text vs value', () => {
    it('verify textBox...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)
        let select = await $("select[id='tools']")
        
        let options = await select.$$("option")
  
/*      
while(!lastText === options.getlasttext){
    options = await select.$$("option")
    lastText:String 

    totalOptions = append options
}*/

        console.log("items count - " + await options.length)
        expect(options.length).toBe(6)

        await select.selectByIndex(1) //Postman
        //expect(await (await $("option[value=\'male\']")).isSelected()).toBe(true)
        expect(await new Select().getSelectedOptions(options)).toContain("Postman")

        browser.pause(1000)
        await select.selectByVisibleText("JMeter") //select the 1st option
        expect(await (await $("option[value='jmeter']")).isSelected()).toBe(true)

        await select.selectByAttribute("value", "cypress")

        console.log(await new Select().getSelectedOptions(options))

        await browser.pause(2000)
    });
});