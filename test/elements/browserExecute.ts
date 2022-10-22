
describe('browser.Execute overview', () => {
    async function getPageStatus(){
        let pageStatus = await browser.execute(()=>{
            return document.readyState
        })
        return pageStatus
    }
    //https://www.w3schools.com/jsref/dom_obj_document.asp

    async function click(querySelector){
        await browser.execute((querySelector)=>{
            var el = document.querySelector(querySelector)
            el.click()
        }, querySelector)
    }

    async function highLightEl(locatorID: string){
        await browser.execute((locatorID)=>{
            const style = 
                "border:2px solid red ; background-color:yellow"
            //document.getElementById("username").style.border = "thick solid #0000FF";
            var el = document.getElementById(locatorID)
            el.setAttribute("style", style)
        }, locatorID)
    }

    it('verifying browser.execute method...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)

        let url = await browser.execute(()=>{
            return document.URL
        })
        console.log(url);

      
        console.log(getPageStatus());

        //await (await $('#username')).click()

        highLightEl("username")
        highLightEl("tel")
 
        await browser.pause(3000)
    });
   
})