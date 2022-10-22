describe('different types of scrolling', () => {
    xit('verify scroll...', async () => {
        browser.url("https://qavbox.github.io/demo/signup/")
        await browser.pause(2000)
        //await (await $('=Tutorials!')).scrollIntoView({behavior: "smooth"})
        await (await $('=Tutorials!')).scrollIntoView(false)

        await browser.pause(3000)

    });
    xit('verify scroll...', async () => {
        browser.url("https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView")
        await browser.pause(2000)
        //await (await $('=Tutorials!')).scrollIntoView({behavior: "smooth"})
        await (await $('#examples')).scrollIntoView(false)

        await browser.pause(3000)

    });

    function scrollInside(selector, scrollAmount){
        browser.execute((selector, scrollAmount)=>{
            var el = document.querySelector(`${selector}`)
            el.scrollTop = el.scrollTop + parseInt(`${scrollAmount}`)
        }, selector, scrollAmount)
    }

    it('verify scroll...', async () => {
        browser.url("https://qavbox.github.io/demo/webtable/")
        await browser.pause(2000)
        //await (await $('=Tutorials!')).scrollIntoView({behavior: "smooth"})
        await (await $('#table02')).scrollIntoView()

        while(!await (await $('td=Paul Byrd')).isDisplayedInViewport()){
            /*await browser.execute(()=>{
                var el = document.querySelector('#table02')
                el.scrollTop = el.scrollTop + 100
            })*/
            scrollInside('#table02', 200)
            await browser.pause(1000)
        }

        
        await browser.pause(3000)

    });
})