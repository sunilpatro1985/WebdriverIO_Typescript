import fetch from 'node-fetch'

describe('different types of alerts', () => {
    it('verify alert...', async () => {
        let baseUrl = "https://qavbox.github.io/"
        //browser.config.baseUrl

        browser.url(`${baseUrl}demo/`)
        await browser.pause(3000)
        
        await $$('a').forEach(async (link) =>{
            await link.getAttribute('href').then(async (href)=>{
            
                let url: string | URL = href
                if(!url.startsWith('http')){
                    console.log("before - " + url)
                    url = new URL(url, baseUrl)
                    console.log("after - " + url)
                }

                await fetch(url).then(async (resp) =>{
                    //expect(resp.status).toMatch(/^[2-3].*/)
                    expect(resp.status)
                    .withContext("link '" + await link.getText() +  "' returned a status "+ resp.status)
                    .toBeLessThan(400)
                })
            })
        })

    });
});